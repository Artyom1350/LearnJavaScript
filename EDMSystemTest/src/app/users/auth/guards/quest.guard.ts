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
        if(this.authService.user.role=='user'){
            this.router.navigate(['/user']);
        }
        if(this.authService.user.role=='admin'){
            this.router.navigate(['/admin']);
        }
        return false;
    }
  }
}