import { Component } from '@angular/core';
import { Room } from '../../shared/models/room';
import { RoomService } from '../../services/Rooms/room.service';

@Component({
  selector: 'app-liste-salle',
  templateUrl: './liste-salle.component.html',
  styleUrl: './liste-salle.component.css'
})
export class ListeSalleComponent {
salles!: Room[];

constructor(private salleService:RoomService){}
ngOnInit(){
this.salleService.GetAllRooms().subscribe(rooms=>{
  this.salles = rooms
})
}

}
