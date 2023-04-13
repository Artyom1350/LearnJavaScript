import { AdminHomeModule } from './users/admin/admin-home.module';
import { UserHomeModule } from './users/user/user-home.module';
import { AuthService } from './users/auth/auth.service';
import { AuthModule } from './users/auth/auth.module';
import { UserHomeComponent } from './users/user/user-home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NotFoundComponent} from './errors/not-found.component';
import { AppRoutingModule } from './app-routing.module'
import { CookieService } from 'ngx-cookie-service';
import { AdminHomeComponent } from './users/admin/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';





@NgModule({
    imports: [BrowserModule, AppRoutingModule, AuthModule, UserHomeModule, AdminHomeModule, HttpClientModule, CommonModule],
    declarations:[AppComponent, UserHomeComponent, NotFoundComponent, AdminHomeComponent],
    bootstrap:[AppComponent],
    providers:[AuthService, CookieService],
})
export class AppModule{}