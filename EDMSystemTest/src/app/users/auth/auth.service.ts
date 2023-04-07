import { AuthUser } from './authUser';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class AuthService{
    user:AuthUser|null=null;
    constructor(private cookie:CookieService){
        if(this.cookie.get('userRole')){
            this.user={
                id:parseInt(this.cookie.get('userId')),
                name:this.cookie.get('userName'),
                email:this.cookie.get('userEmail'),
                role:+this.cookie.get('userRole')};
        }
        else{
            this.user=null
        }
    }
    setUser(user:AuthUser){
        this.user=user;
        let date:Date=new Date(Date.now()+86400e3); 
        this.cookie.set('userId',this.user.id.toString(),date);
        this.cookie.set('userName',this.user.name.toString(),date);
        this.cookie.set('userEmail',this.user.email.toString(),date);
        this.cookie.set('userRole',this.user.role.toString(),date);
    }
    removeUser(){
        this.cookie.set('userId',this.user.id.toString(),-1);
        this.cookie.set('userName',this.user.name.toString(),-1);
        this.cookie.set('userEmail',this.user.email.toString(),-1);
        this.cookie.set('userRole',this.user.role.toString(),-1);
        this.user=null;
    }
}