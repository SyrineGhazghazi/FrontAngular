import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Liste des salles',
        icon: 'pi pi-fw pi-list',
        routerLink: '/ListeSalle'
      },
      {
        label: 'Réserver une salle',
        icon: 'pi pi-fw pi-calendar-plus',
        routerLink: '/ResSalle'
      },
      {
        label: 'Gérer vos réservations',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/GestionSalle'
      },
      {
        label: 'Calendrier',
        icon: 'pi  pi-fw pi-calendar-clock',
        routerLink: '/Calendrier'
      }
    ];
  }
}
