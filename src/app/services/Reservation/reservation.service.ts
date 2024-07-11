import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../../shared/models/reservation';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor( private _http:HttpClient) { }
  CreationReservation(reservationdata:Reservation) : Observable <Reservation> {
    return this._http.post<Reservation> (`${environment.API}/reservations/createResa`,reservationdata)
  }
  
}
