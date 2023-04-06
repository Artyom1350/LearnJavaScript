import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
 
    postData(email: string,password: string){
          
        const body = {email: email, password: password};
        return this.http.post('http://localhost:8000/api/auth', body); 
    }
}