import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';

import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RegisterComponent } from './routes/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListeSalleComponent } from './routes/liste-salle/liste-salle.component';
import { ResSalleComponent } from './routes/res-salle/res-salle.component';
import { GestionSalleComponent } from './routes/gestion-salle/gestion-salle.component';
import { CalendrierComponent } from './routes/calendrier/calendrier.component';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { Interceptor } from '../interceptor';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardHeaderComponent,
    MainLayoutComponent,
    RegisterComponent,
    ListeSalleComponent,
    ResSalleComponent,
    GestionSalleComponent,
    CalendrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule ,
    BrowserAnimationsModule,
    FloatLabelModule,
    HttpClientModule,
    CalendarModule,
    TableModule,
    DropdownModule,
    MenubarModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:Interceptor, multi:true}],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
