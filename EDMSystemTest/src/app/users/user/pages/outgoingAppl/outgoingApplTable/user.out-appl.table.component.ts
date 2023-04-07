import { OutApplStatus } from './../../../classes/outApplStatusClass';
import { OutAppl } from './../../../classes/outApplClass';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OutApplService } from '../../../userServices/outAppl.service';
import { ApiService } from 'src/app/requests/api.service';
import { UserOutApplModalComponent } from '../outgoingApplModal/user.out-appl.modal.component';
@Component({
    selector: 'out-table',
    templateUrl: 'user.out-appl.table.component.html',
    providers: [ApiService,OutApplService]
    
})
export class UserOutApplTableComponent implements OnInit{
    outAppl:Array<OutAppl>;
    choiseOutApplStatus:Array<OutApplStatus>=null;

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
            console.log(this.outAppl)
        });
    }
    viewChoiseOutAppl(id){
        this.outApplService.getAnsersAppl(id).subscribe((data: Array<OutApplStatus>)=>{
            this.choiseOutApplStatus=data;
        })
    }

}