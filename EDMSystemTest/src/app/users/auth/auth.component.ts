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
    receivedUser:AuthUser;
    @Input() userEmail: string="";
    @Input() userPassword: string="";
    done:boolean;

    constructor(private authService: AuthService ,private router: Router,  private httpService: ApiService){
    
    }

    submit(){     
        let body={email: this.userEmail, password: this.userPassword};
        this.httpService.request(body,'auth').subscribe({
            next:(data: any) => {
                if(data){
                    this.receivedUser=data; 
                    this.done=true;
                    this.authService.setUser(this.receivedUser);
                    window.location.reload();
                }
            },
            error:error=> console.log(error)
        });

        //this.findUserByEmail();

    }
};