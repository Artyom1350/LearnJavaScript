import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector:'admin-home-app',
    templateUrl: 'admin-home.component.html'
})
export class AdminHomeComponent { 
    constructor(private authService:AuthService){

    }
    leave(){
        this.authService.removeUser();
        window.location.reload();
    }

}