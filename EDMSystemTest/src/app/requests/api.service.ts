import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService{
    private url="http://localhost:8000/api/"
    
    constructor(private http: HttpClient){
    }
    request(body: any, url:string){
        return this.http.post(this.url+url, body,{headers:{ 'Access-Control-Allow-Origin': '*' }})
    }
    downloadRequest(body: any, url:string){
        return this.http.post(this.url+url, body,{responseType: 'blob'})
    }

}