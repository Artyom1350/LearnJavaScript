import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'user-out-modal',
    templateUrl: 'user.out-appl.modal.component.html'
})  
export class UserOutApplModalComponent{
    addOrChangeForm: FormGroup;
    constructor(){
        this.addOrChangeForm = new FormGroup({
            'title': new FormControl("",Validators.required),
            'date': new FormControl(null,Validators.required),
            'description': new FormControl("",Validators.required),
            'file': new FormControl(null,Validators.required),
        })
    }
    addOrChangeAppl(){
        console.log(this.addOrChangeForm.value);
    }
}