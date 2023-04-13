import { OutApplService } from './../../../userServices/outAppl.service';
import { InclAppl } from './../../../classes/incApplClass';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ViewInclService } from './viewIncl.service';

@Component({
    selector:'inc-appl-view',
    templateUrl: 'user.incl-appl.modal-view.compoment.html',
    providers: [ViewInclService, OutApplService]
})
export class UserInclApplModalView{
    @Input() inclAppl:InclAppl|null;
    @Input() status:number;
    @Output() eventEmitter= new EventEmitter();
    constructor(private viewInclService:ViewInclService,private outApplService: OutApplService){
    
    }

    changeStatus(){
        this.viewInclService.changeStatus(this.inclAppl.id,+this.status).subscribe((data:any)=>{
            alert('Статус заявки успешно изменен!');
            this.eventEmitter.emit();
        });
    }
    download(id){
        this.outApplService.download(id).subscribe(blob => {
            const a = document.createElement('a')
            const objectUrl = URL.createObjectURL(blob)
            a.href = objectUrl
            a.download = this.inclAppl.title;
            a.click();
            URL.revokeObjectURL(objectUrl);
          })
    }

}