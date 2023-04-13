import { AuthUser } from './authUser';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class AuthService{
    user:AuthUser|null=null;
    constructor(private cookie:CookieService){
        console.log(this.cookie.getAll())
        if(this.cookie.get('userRole') && this.cookie.get('userName') && this.cookie.get('userEmail') && this.cookie.get('userId')){
            this.user={
                id:parseInt(this.cookie.get('userId')),
                name:this.cookie.get('userName'),
                email:this.cookie.get('userEmail'),
                role:+this.cookie.get('userRole')
            };
        }
        else{
            this.user=null
        }
        console.log(this.user);
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
        this.cookie.set('userId',null,-1);
        this.cookie.set('userName',null,-1);
        this.cookie.set('userEmail',null,-1);
        this.cookie.set('userRole',null,-1);
    }
}