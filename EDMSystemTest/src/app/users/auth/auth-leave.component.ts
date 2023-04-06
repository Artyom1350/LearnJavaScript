import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector:'',
    template:'',
})
export class AuthLeaveComponent{
    constructor(private authService: AuthService,private router: Router){
        this.authService.removeUser();
        router.navigateByUrl('login');
    }
}