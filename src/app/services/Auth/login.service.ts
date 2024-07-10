import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  login(data:User):Observable<any>{
    
    return this._http.post<any>(`${environment.API}/auth/login`,data)
  }
  register(data:User):Observable<any>{

    return this._http.post<any>(`${environment.API}/users/createUser`,data)
  }


}
