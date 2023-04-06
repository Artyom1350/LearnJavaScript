import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";

interface user{
    id:number;
    name: string;
    email: string;
    password: string;
    role: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    user:user|null=null;
    constructor(private cookie:CookieService){
        console.log(this.cookie.get('userRole'))
        if(this.cookie.get('userRole')){
            this.user={id:parseInt(this.cookie.get('userId')),name:this.cookie.get('userName'),email:this.cookie.get('userEmail'),password:this.cookie.get('userPassword'),role:this.cookie.get('userRole')};
        }
        else{
            this.user=null
        }
    }
    setUser(user:user){
        this.user=user;
        let date:Date=new Date(Date.now()+86400e3); 
        this.cookie.set('userId',this.user.id.toString(),date);
        this.cookie.set('userName',this.user.name.toString(),date);
        this.cookie.set('userEmail',this.user.email.toString(),date);
        this.cookie.set('userPassword',this.user.password.toString(),date);
        this.cookie.set('userRole',this.user.role.toString(),date);
    }
    removeUser(){
        this.cookie.set('userId',this.user.id.toString(),-1);
        this.cookie.set('userName',this.user.name.toString(),-1);
        this.cookie.set('userEmail',this.user.email.toString(),-1);
        this.cookie.set('userPassword',this.user.password.toString(),-1);
        this.cookie.set('userRole',this.user.role.toString(),-1);
        this.user=null;
    }
}