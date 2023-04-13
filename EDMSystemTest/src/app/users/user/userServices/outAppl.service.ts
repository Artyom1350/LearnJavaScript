import { ApiService } from 'src/app/requests/api.service';
import { AuthService } from './../../auth/auth.service';
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
    getUsers(){
        let body={id: this.authService.user.id};
        return this.apiService.request(body,'getUsersApi');
    }
    getDepartments(){
        let body={};
        return this.apiService.request(body,'getDepartmentApi');
    }
    addInclAppl(title:string,description:string, date: Date, file:File, users:any, groups:any){
        let fd=new FormData();
        fd.append('file',file);
        fd.append('nameAppl',title);
        fd.append('descriptionAppl',description);
        fd.append('dateAppl',date.toString());
        fd.append('authUser',this.authService.user.id.toString());
        fd.append('groupSelect',groups);
        fd.append('peopleSelect',users);
        fd.append('fileName',file.name);
        return this.apiService.request(fd,'addApplicationApi');        
    }
    changeOutAppl(title:string,description:string, date: Date, file:File, users:any, groups:any, doc_id:number){
        let fd=new FormData();
        fd.append('doc_id',doc_id.toString())
        fd.append('file',file);
        fd.append('nameAppl',title);
        fd.append('descriptionAppl',description);
        fd.append('dateAppl',date.toString());
        fd.append('authUser',this.authService.user.id.toString());
        fd.append('groupSelect',groups);
        fd.append('peopleSelect',users);
        if(file){
            fd.append('fileName',file.name);
        }
        else{
            fd.append('filename',null);
        }
        return this.apiService.request(fd,'changeApplicationApi');        
    }



    download(id:number){
        let body={id:id};
        return this.apiService.downloadRequest(body,'downloadApplApi');
    }

    destroy(id:number){
        let body={id:id};
        return this.apiService.request(body,'destroyAppl');
    }
    getChangeAppl(id:number){
        let body={id:id};
        return this.apiService.request(body,'changeAppl');
    }

}