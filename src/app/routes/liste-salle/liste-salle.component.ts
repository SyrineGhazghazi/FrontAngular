import { Component } from '@angular/core';
import { Room } from '../../shared/models/room';

@Component({
  selector: 'app-liste-salle',
  templateUrl: './liste-salle.component.html',
  styleUrl: './liste-salle.component.css'
})
export class ListeSalleComponent {
salles!: Room[];
ngOnInit(){

}

}
