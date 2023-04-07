import { InclAppl } from './../../../classes/incApplClass';
import { Component, Input} from '@angular/core';
import { ViewInclService } from './viewIncl.service';

@Component({
    selector:'inc-appl-view',
    templateUrl: 'user.incl-appl.modal-view.compoment.html',
    providers: [ViewInclService]
})
export class UserInclApplModalView{
    @Input() inclAppl:InclAppl|null;
    @Input() status:number;
    constructor(private viewInclService:ViewInclService){
    
    }

    changeStatus(){
        this.viewInclService.changeStatus(this.inclAppl.id,+this.status).subscribe((data:any)=>{
            console.log(data);
        });
    }
}