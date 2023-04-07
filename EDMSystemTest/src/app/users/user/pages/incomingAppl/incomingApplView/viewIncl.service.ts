import { ApiService } from 'src/app/requests/api.service';
import { AuthService } from './../../../../auth/auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class ViewInclService{
    constructor(private authService: AuthService, private apiService: ApiService){}
    
    changeStatus(id: number, status:number){
        let body={idUser: this.authService.user.id, idDocument:id, status: status};
        return this.apiService.request(body,'updateStatusDocumentApi')
    }
}