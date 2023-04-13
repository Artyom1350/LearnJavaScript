import { ApiService } from './../../requests/api.service';
import { HttpService } from './http.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AuthUser } from './authUser';

@Component({
    selector:'auth-app',
    templateUrl:'auth.component.html',
    providers:[HttpService, AuthService, ApiService]
})
export class AuthComponent{ 
    loginForm: FormGroup;

    createForm(){
        this.loginForm=new FormGroup({
            "userEmail": new FormControl('', [Validators.required, Validators.email,]),
            "userPassword": new FormControl('',[Validators.required, Validators.minLength(7)])
        });
    }

    constructor(private authService: AuthService ,private router: Router,  private httpService: ApiService){
        this.createForm();
    }

    submit(){     
        let body={email: this.loginForm.value['userEmail'], password: this.loginForm.value['userPassword']};
        this.httpService.request(body,'auth').subscribe(
            (data: AuthUser) => {
                if(data){
                    this.authService.setUser(data);
                    window.location.reload();                        
                }
                else{
                    alert("Неверный логин или пароль!");
                }
            },
        );

    }
};