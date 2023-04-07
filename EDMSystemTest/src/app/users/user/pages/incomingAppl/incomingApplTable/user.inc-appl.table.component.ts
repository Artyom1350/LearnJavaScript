import { UserInclApplModalView } from './../incomingApplView/user.incl-appl.modal-view.compoment';
import { ViewInclService } from './../incomingApplView/viewIncl.service';
import { InclAppl } from './../../../classes/incApplClass';
import { InclApplService } from './../../../userServices/inclAppl.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/requests/api.service';

@Component({
    selector: 'incl-table',
    templateUrl: 'user.inc-appl.table.component.html',
    providers: [ApiService, InclApplService, ViewInclService]
    
})
export class UserInclApplTableComponent implements OnInit{
    incAppls:Array<InclAppl>;
    choiseIncAppl:InclAppl=null;
    status:number=0;
    constructor(private inclApplService:InclApplService){
        this.incAppls=new Array<InclAppl>
    }

    @ViewChild(UserInclApplModalView)
    viewChild: UserInclApplModalView 

    ngOnInit(){
        this.update();
    }
    update(){
        this.inclApplService.getInclAppl().subscribe((data: Array<InclAppl>)=>{
            this.incAppls=data;
        });
    }
    choiseViewAppl(id){
        this.choiseIncAppl=this.incAppls[id];
        this.status=this.incAppls[id].status;
        console.log(this.status);
        //this.viewIncludeService.setIncl(this.incAppls[id]);
    }
}