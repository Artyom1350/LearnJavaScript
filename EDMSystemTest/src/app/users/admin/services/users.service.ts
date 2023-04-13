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
    getUser(id:number){
        let body={id}
        return this.apiService.request(body,'getUserApi');
    }
    getDepartments(){
        let body={};
        return this.apiService.request(body,'getDepartments');
    }
    getDepartmentParts(id:number){
        let body={id};
        return this.apiService.request(body,'getDepartmentPartsApi');
    }
    addUser(name:string, email:string, password:string, department_part:string){
        let body={name,email,password,department_part};
        return this.apiService.request(body, 'addUserApi');
    }
    removeUser(id:number){
        let body={id};
        return this.apiService.request(body,'removeUserApi');
    }
    changeUser(id:number,name:string, email:string, password:string, department_part:string){
        let body={name,email,password,department_part,id};
        return this.apiService.request(body,'changeUserApi');
    }

}

