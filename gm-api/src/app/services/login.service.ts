import { HttpHeaders } from '@angular/common/http';
import { ApplicationInitStatus, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }
  
  url = "http://localhost:3000/login"

login(user: User): Observable<any>{
  return this.httpclient.post(this.url, JSON.stringify(user), {
    Headers: new HttpHeaders({'Content-Type' : 'application/json'}),
    observe: "response"
  }
  
  ) 
}

}
