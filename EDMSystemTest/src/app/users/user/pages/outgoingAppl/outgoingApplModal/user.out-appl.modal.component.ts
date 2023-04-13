import { ApiService } from 'src/app/requests/api.service';
import { OutApplService } from './../../../userServices/outAppl.service';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import {ValidateDate} from './date.validator';

@Component({
    selector: 'user-out-modal',
    templateUrl: 'user.out-appl.modal.component.html',
    providers: [OutApplService,ApiService]
})  
export class UserOutApplModalComponent implements OnInit{
    users;
    groups;
    usersCheck:Set<number>;
    groupsCheck:Set<number>;
    doc_id:number|null;
    mode:string='add';
    file:File|null=null; 

    outApplForm:FormGroup;

    @Output() childEvent=new EventEmitter();
    updateMain(){
        this.childEvent.emit();
    }

    constructor(private outApplService: OutApplService){
        this.usersCheck=new Set();
        this.groupsCheck=new Set();

        this.outApplForm=new FormGroup({
            'title': new FormControl('',[Validators.required]),
            'date': new FormControl('',[
                Validators.required,
                ValidateDate
            ]),
            'description': new FormControl('',[Validators.required]),
            'file': new FormControl('',Validators.required),
        });
    }
    ngOnInit(): void {
        this.getData();    
    }
    getData(){
        this.outApplService.getUsers().subscribe((data)=>{
            this.users=data;
        })
        this.outApplService.getDepartments().subscribe((data)=>{
            this.groups=data;
        })
    }
    addFile(event){
        this.file=event.target.files[0];
    }
    download(id){
        this.outApplService.download(id).subscribe(blob => {
            const a = document.createElement('a')
            const objectUrl = URL.createObjectURL(blob)
            a.href = objectUrl
            a.download = this.outApplForm.value['title'];
            a.click();
            URL.revokeObjectURL(objectUrl);
            this.file
          })
    }
    test(selectedAppl:any){
        this.mode='change';
        document.getElementById('outApplModalLabel').innerHTML='Редактировать заявку';
        document.getElementById('addBtn').innerHTML='Редактировать';
        this.outApplForm.get('file').clearValidators();
        this.outApplForm.reset();
        this.outApplForm.markAllAsTouched();
        

        let selectedApplDoc=selectedAppl['doc'];
        for(let i=0;i<selectedAppl['users'].length;i++){
            this.usersCheck.add(selectedAppl['users'][i]);
        }

        this.doc_id=selectedApplDoc[0].id;
        this.outApplForm.patchValue({
            title: selectedApplDoc[0].title,
            description: selectedApplDoc[0].description,
            date:selectedApplDoc[0].dateAppl
        })

        let table=document.getElementById('userItems');
        let userItems=table.querySelectorAll('input');
        for(let i=0;i<userItems.length;i++){
            if(Array.from(this.usersCheck).includes(+userItems[i].value)){
                userItems[i].checked=true;
            }
            else{
                userItems[i].checked=false;
            }
        }
        console.log(this.usersCheck)
    }

    changeUsers(event){
        if(event.target.checked){
            this.usersCheck.add(+event.target.value);
        }
        else{
            this.usersCheck.delete(+event.target.value)
        }
        console.log(this.usersCheck)
    }
    changeGroups(event){
        if(event.target.checked){
            this.groupsCheck.add(+event.target.value);
        }
        else{
            this.groupsCheck.delete(+event.target.value)
        }
    }
    addOrChangeAppl(){
        if(this.file!=null){
            if( this.file.type !== "application/pdf" ){
                alert("Загружать можно только PDF!");
                return;
            }
        }
        if(this.mode=='add'){
            if(!(Array.from(this.usersCheck).length>0 || Array.from(this.groupsCheck).length>0)){ alert('Нужно выбрать хотябы одного пользователя или группу!'); return};
            let tempUsers=Array.from(this.usersCheck);
            let tempGroups=Array.from(this.groupsCheck);
            this.outApplService.addInclAppl(
                this.outApplForm.value['title'],
                this.outApplForm.value['description'],
                this.outApplForm.value['date'],
                    this.file, 
                    tempUsers, 
                    tempGroups
                )
                .subscribe(()=>{
                document.getElementById('close').click();
                alert('Заявка успешно добавлена');
                this.updateMain();
            });    
        }
        else if(this.mode='change'){
            if(!(Array.from(this.usersCheck).length>0 || Array.from(this.groupsCheck).length>0)){ alert('Нужно выбрать хотябы одного пользователя или группу!'); return};
            let tempUsers=Array.from(this.usersCheck);
            let tempGroups=Array.from(this.groupsCheck);
            this.outApplService.changeOutAppl(
                this.outApplForm.value['title'],
                this.outApplForm.value['description'],
                this.outApplForm.value['date'],
                    this.file, 
                    tempUsers, 
                    tempGroups,
                    this.doc_id
                )
                .subscribe(()=>{
                    document.getElementById('close').click();
                    alert('Заявка успешно изменена');
                    this.updateMain();
            });    
        }
    }
    clear(){
        this.outApplForm.patchValue({
            title:'',
            description:'',
            date:null
        })
        document.getElementById('outApplModalLabel').innerHTML='Добавить заявку';
        document.getElementById('addBtn').innerHTML='Добавить';
        this.mode='add';
        this.file=null;
        this.doc_id=null;
        this.usersCheck.clear();
        this.groupsCheck.clear();

        let table=document.getElementById('userItems');
        let items=table.querySelectorAll('input');
        for(let i=0;i<items.length;i++){
                items[i].checked=false;
        }

        table=document.getElementById('groupItems');
        items=table.querySelectorAll('input');
        for(let i=0;i<items.length;i++){
            items[i].checked=false;
        }

        this.outApplForm.reset();
        this.outApplForm.updateValueAndValidity();

    }
}