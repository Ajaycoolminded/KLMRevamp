import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFlightComponent } from './flights/create-flight.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAssignFlightComponent } from './flights/create-assign-flight.component';



const routes: Routes = [
  {path:'create', component:CreateFlightComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'create-Assign', component:CreateAssignFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
