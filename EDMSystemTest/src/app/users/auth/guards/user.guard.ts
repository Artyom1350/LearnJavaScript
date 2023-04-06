import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(this.authService.user!=null){
        if ( this.authService.user.role=='user') {
            return true;
        } else {
            this.router.navigate(['/admin']);
            return false;
        }      
    }
    this.router.navigate(['/login']);
    return false;
  }
}