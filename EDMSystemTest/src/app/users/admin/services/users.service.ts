import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../../requests/api.service';
import { Injectable } from '@angular/core';

@Injectable()

export class UsersService{

    constructor(private apiService: ApiService,private authService:AuthService){

    }
    getUsers(){
        let body={id: this.authService.user.id};
        return this.apiService.request(body,'getUsersApi')
    }

}

