import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../../../../requests/api.service';
import { GroupsJobService } from './../../../services/groups-jobs.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'admin-groupstable',
    templateUrl: './admin.groupstable.component.html',
    providers: [ApiService, GroupsJobService]
})
export class AdminGroupsTableComponent implements OnInit{
    groups=null;
    changeId:number|null;
    jobs=null;
    mode:string='add';
    jobMode:string='add';
    selectedJob;
    selectedGroup:number|null=null;
    groupId;
    jobId;

    groupForm: FormGroup;
    jobForm: FormGroup;



    constructor(private groupsJobService: GroupsJobService){
        this.groupForm=new FormGroup({
            "groupName": new FormControl('', [Validators.required, Validators.minLength(5)]),
        })
        this.jobForm=new FormGroup({
            "jobName": new FormControl('',[Validators.required, Validators.minLength(3)]),
        })
    }
    
    ngOnInit(): void {
        this.update();    
    }
    update(){
        this.groupsJobService.getGroups().subscribe((data)=>{
            this.groups=data;
        })
    }
    getJobs(id){
        this.groupsJobService.getJobs(id).subscribe((data:{id:number,name:string,department_id:number}[])=>{
            this.jobs=data;
        })
    }
    change(item, index){
        this.changeId=item.id;
        this.selectedGroup=index;
        this.jobs=null;
        this.groupId=this.groups[index].id;
        this.mode='change';
        document.getElementById('addBtn').innerHTML='Редактировать';
        this.getJobs(item.id);
        this.groupForm.patchValue({
            groupName:item.name
        })
    }
    remove(id,index){
        if(confirm('Точно хотите удалить подразделение')){
            this.groupsJobService.removeGroup(id).subscribe((data)=>{
                this.groups.splice(index,1);
                if(this.changeId==id){
                    this.clear();
                }
            })  
        }
    }
    addOrChange(){
        if(this.mode=='add'){
            this.groupsJobService.addGroup(this.groupForm.value['groupName']).subscribe((data)=>{
                this.groups.push(data);
            });
        }
        else if(this.mode=='change'){
            this.groupsJobService.changeGroup(this.groupId,this.groupForm.value['groupName']).subscribe((data)=>{
                this.groups[this.selectedGroup]=data;
            })
        }
    }
    clear(){
        this.changeId=null;
        this.jobs=null;
        this.groupForm.value['groupName']='';
        this.jobMode='add';
        this.mode='add';
        this.selectedGroup=null;
        document.getElementById('addBtn').innerHTML='Добавить';
        document.getElementById('jobModalLabel').innerHTML='Добавление должности';
        this.groupForm.reset();
    }
    addJob(){
        if(this.changeId){
            if(this.jobMode=='add'){
                this.groupsJobService.addJob(this.changeId,this.jobForm.value['jobName']).subscribe((data)=>{
                    this.jobs.push(data);
                    this.clearForm();
                })        
            }
            else if(this.jobMode=='change'){
                this.groupsJobService.changeJob(this.jobId,this.jobForm.value['jobName']).subscribe((data)=>{
                    this.jobs[this.selectedJob]=data;
                    document.getElementById('close').click();
                    this.clearForm();
                })
            }
        }
    }   
    openModal(){
        this.jobMode='add';
        document.getElementById('jobModalLabel').innerHTML='Добавление должности';
        document.getElementById('addJobBtn').innerHTML='Добавить';
    }
    changeGroup(id){
        this.selectedGroup=id;
        this.groupId=this.groups[id].id;
        this.mode='change';
    }
    changeJob(id){
        this.selectedJob=id;
        this.jobId=this.jobs[id].id;
        this.jobMode='change';
        this.jobForm.patchValue({
            jobName: this.jobs[id].name,
        });
        document.getElementById('jobModalLabel').innerHTML='Редактирование должности';
        document.getElementById('addJobBtn').innerHTML='Редактировать';
    }
    removeJob(id,index){
        if(confirm('Точно зотите удалить должность?')){
            this.groupsJobService.removeJob(id).subscribe(()=>{
                this.jobs.splice(index,1)
            })    
        } 
    }
    clearForm(){
        this.jobForm.patchValue({
            jobName: ''
        })
        this.jobForm.reset();
        this.jobForm.updateValueAndValidity();

    }
}