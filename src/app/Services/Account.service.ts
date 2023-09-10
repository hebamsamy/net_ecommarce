import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../ViewModels/apiResult';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseURL= "http://localhost:5000/user"
constructor(private Http:HttpClient) { }
login(user:any):Observable<APIResult>{
  return this.Http.post<APIResult>(`${this.baseURL}/login`,user)
}
register(user:any):Observable<APIResult>{
  return this.Http.post<APIResult>(`${this.baseURL}/register`,user)
}
logout(){

}

}
