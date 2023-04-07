import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../../requests/api.service';
import { Injectable } from "@angular/core";

@Injectable()
export class OutApplService{
    constructor(private apiService: ApiService,private authService:AuthService){

    }
    getInclAppl(){
        let body={id: this.authService.user.id};
        return this.apiService.request(body,'outAppl')
    }
    getAnsersAppl(id:number){
        let body={id_doc: id};
        return this.apiService.request(body,'getUnswersUsersApi')
    }
}