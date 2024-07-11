import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  GetAllUsers():Observable<User[]>{
    return this._http.get<User[]>(`${environment.API}/users/allUsers`)
  }
}
