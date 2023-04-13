import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class QuestGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.user==null) {
        return true;
    } 
    else {
        if(this.authService.user.role==0){
            this.router.navigate(['/user/incApll']);
        }
        if(this.authService.user.role==1){
            this.router.navigate(['/admin/users']);
        }
        return false;
    }
  }
}