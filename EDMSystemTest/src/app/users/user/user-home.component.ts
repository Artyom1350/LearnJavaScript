import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'user-home-app',
    templateUrl: 'user-home.component.html',
    providers: [AuthService]
})
export class UserHomeComponent{
    constructor(private authService:AuthService){

    }
    leave(){
        this.authService.removeUser();
        window.location.reload();
    }
}