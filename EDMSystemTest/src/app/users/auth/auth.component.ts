import { UsersService } from './testApiLogin/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector:'auth-app',
    templateUrl:'auth.component.html',
    providers:[UsersService, AuthService]
})
export class AuthComponent implements OnInit { 
    authForm: FormGroup;
    constructor(private usersService: UsersService, private authService: AuthService ,private router: Router){
    }
    public ngOnInit(): void {
        this.authForm=new FormGroup({
            "userEmail": new FormControl(null,[
                Validators.required,
                Validators.email
            ]),
            "userPassword":new FormControl(null,Validators.required),
        });
    }
    submit(){
        this.findUserByEmail();
        window.location.reload();
    }
    findUserByEmail(){
        for(let i=0;i<this.usersService.users.length;i++){
            if(this.usersService.users[i].email==this.authForm.value['userEmail']){
                if(this.usersService.users[i].password==this.authForm.controls['userPassword'].value){
                    this.authService.setUser(this.usersService.users[i]);
                }
            }
        }
    }
};