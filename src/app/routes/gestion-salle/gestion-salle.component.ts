import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-salle',
  templateUrl: './gestion-salle.component.html',
  styleUrl: './gestion-salle.component.css'
})
export class GestionSalleComponent {
  customers =[
 
 
  {
      id: 1012,
      name: 'Kiley Caldarera',
      country: {
          name: 'Serbia',
          code: 'rs'
      },
      company: 'Feiner Bros',
      date: '2015-10-20',
      status: 'unqualified',
      verified: false,
      activity: 80,
      representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
      },
      balance: 92734
  },
  {
      id: 1013,
      name: 'Graciela Ruta',
      country: {
          name: 'Chile',
          code: 'cl'
      },
      company: 'Buckley Miller & Wright',
      date: '2016-07-25',
      status: 'negotiation',
      verified: false,
      activity: 59,
      representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
      },
      balance: 45250
  },
  {
      id: 1014,
      name: 'Cammy Albares',
      country: {
          name: 'Philippines',
          code: 'ph'
      },
      company: 'Rousseaux, Michael Esq',
      date: '2019-06-25',
      status: 'new',
      verified: true,
      activity: 90,
      representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
      },
      balance: 30236
  }]
  first = 0;
  rows = 10;
  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
}

isLastPage(): boolean {
    return this.customers ? this.first === this.customers.length - this.rows : true;
}

isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
}
}