import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _http:HttpClient) { }


  GetAllRooms(){
    return this._http.get(`${environment.API}/`)
  }
}
