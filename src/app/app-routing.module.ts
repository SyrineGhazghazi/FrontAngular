import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RegisterComponent } from './routes/register/register.component';
import { GestionSalleComponent } from './routes/gestion-salle/gestion-salle.component';
import { ListeSalleComponent } from './routes/liste-salle/liste-salle.component';
import { CalendrierComponent } from './routes/calendrier/calendrier.component';
import { ResSalleComponent } from './routes/res-salle/res-salle.component';

const routes: Routes = [

  {path:'',component:MainLayoutComponent,children: [

    // {path: 'home', component:HomeComponent},
    {path: 'GestionSalle', component:GestionSalleComponent},
    {path: 'ListeSalle', component:ListeSalleComponent},
    {path: 'Calendrier', component:CalendrierComponent},
    {path: 'ResSalle', component:ResSalleComponent},
    {path:'',redirectTo:'ListSalle',pathMatch:'full'}
  ]
  },
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
