import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFlightComponent } from './flights/create-flight.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './nav/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './api.service';
import { HomeComponent } from './home/home.component';
import { CreateAssignFlightComponent } from './flights/create-assign-flight.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateFlightComponent,
    LoginComponent,
    NavigationComponent,
    HomeComponent,
    CreateAssignFlightComponent



  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
  providers: [ApiService],
  bootstrap: [AppComponent]

})
export class AppModule { }
