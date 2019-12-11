import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {loginModel} from './login/loginModel';
import {userlistModel} from './flights/userlistModel';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseurl = 'https://localhost:44300';

  constructor(private httpClient: HttpClient) { }

getloginModel(loginDetail: loginModel): Observable<string>{
     return this.httpClient.get(this.baseurl+'/api/USER/login?UserId='+ loginDetail.UserId +'&Password='+ loginDetail.Password,{ responseType:'text'});
    }

getAgents(userlistModel: userlistModel):Observable<any>{
return this.httpClient.get(this.baseurl+'/api/USER/userlist?UserID='+ userlistModel.UserId +'&Option='+ userlistModel.Option);
 }   
 
}


