import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Room } from '../../shared/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _http:HttpClient) { }


  GetAllRooms():Observable<Room[]>{
    return this._http.get<Room[]>(`${environment.API}/rooms`)
  }
}