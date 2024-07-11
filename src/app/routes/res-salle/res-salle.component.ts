import { Component } from '@angular/core';
import { Reservation } from '../../shared/models/reservation';
import { ReservationService } from '../../services/Reservation/reservation.service';
import { User } from '../../shared/models/user';
import { Room } from '../../shared/models/room';
import { RoomService } from '../../services/Rooms/room.service';
import { UserService } from '../../services/Users/user.service';

@Component({
  selector: 'app-res-salle',
  templateUrl: './res-salle.component.html',
  styleUrl: './res-salle.component.css'
})
export class ResSalleComponent {

users:User[]=[];
rooms:Room[]=[];
reservationData:Reservation={
  roomId:'',
  userId:'',
  startTime:new Date(),
  endTime:new Date
}
  constructor(private reservationService:ReservationService,private roomService:RoomService,private usersService:UserService){}
  ngOnInit(){
    this.loadUsers();
    this.loadRooms();
  }
  loadUsers() {
    this.usersService.GetAllUsers().subscribe(
      users=>{
        this.users=users;
      }
    )
  }
  loadRooms() {
    this.roomService.GetAllRooms().subscribe(rooms=>{
      this.rooms=rooms
    })
  }
onSubmit() {
  console.log(this.reservationData);
  
  this.reservationService.CreationReservation(this.reservationData).subscribe((response)=>{
    console.log('Reservation created successfully:', response);
  },
  (error)=>{
    console.error('Error creation reservation :',error);
  }
)}

}
