import { ApiService } from './../../../requests/api.service';
import { Injectable } from "@angular/core";

@Injectable()
export class GroupsJobService{
    constructor(private apiService:ApiService){

    }
    getGroups(){
        let body={};
        return this.apiService.request(body,'getDepartments');
    }
    getJobs(id:number){
        let body={id};
        return this.apiService.request(body,'getDepartmentPartsApi');
    }
    addGroup(name:string){
        let body={name};
        return this.apiService.request(body,'addGroupApi');
    }
    removeGroup(id:number){
        let body={id};
        return this.apiService.request(body,'removeGroupApi');
    }
    addJob(id:number, name:string){
        let body={id,name};
        return this.apiService.request(body,'addJobApi');
    }
    removeJob(id:number){
        let body={id};
        return this.apiService.request(body,'removeJobApi');
    }
    changeJob(id:number, name:string){
        let body={id,name};
        return this.apiService.request(body,'changePostApi');
    }
    changeGroup(id:number, name:string){
        let body={id,name};
        return this.apiService.request(body,'changeGroupApi');
    }
}