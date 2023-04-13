import { saveAs } from 'file-saver';
import { OutApplStatus } from './../../../classes/outApplStatusClass';
import { OutAppl } from './../../../classes/outApplClass';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OutApplService } from '../../../userServices/outAppl.service';
import { ApiService } from 'src/app/requests/api.service';
import { UserOutApplModalComponent } from '../outgoingApplModal/user.out-appl.modal.component';
@Component({
    selector: 'out-table',
    templateUrl: 'user.out-appl.table.component.html',
    providers: [ApiService,OutApplService],
    
})
export class UserOutApplTableComponent implements OnInit{
    outAppl:Array<OutAppl>;
    choiseOutApplStatus:Array<OutApplStatus>=null;
    selectedAppl;

    @ViewChild(UserOutApplModalComponent)
    viewChild: UserOutApplModalComponent

    constructor(private outApplService:OutApplService){
        this.outAppl=new Array<OutAppl>
    }
    ngOnInit(): void {
        this.update();
    }
    update(){
        this.outApplService.getInclAppl().subscribe((data: Array<OutAppl>)=>{
            this.outAppl=data;
        });
    }
    viewChoiseOutAppl(id){
        this.outApplService.getAnsersAppl(id).subscribe((data: Array<OutApplStatus>)=>{
            this.choiseOutApplStatus=data;
        })
    }
    download(id, name){
        this.outApplService.download(id).subscribe(blob => {
            const a = document.createElement('a')
            const objectUrl = URL.createObjectURL(blob)
            a.href = objectUrl
            a.download = name+'.pdf';
            a.click();
            URL.revokeObjectURL(objectUrl);
          })
    }
    destroy(id){
        if(confirm('Точно хотите удалить заявку?')){
            this.outApplService.destroy(id).subscribe(()=>{
                alert('Заявка успешно удалена!');
                this.update();
            })    
        }
    }
    change(id){
        this.outApplService.getChangeAppl(id).subscribe((data)=>{
            this.selectedAppl=data;    
            this.viewChild.test(data);
        })
    }
    clearModal(){
        this.viewChild.clear();
    }

}