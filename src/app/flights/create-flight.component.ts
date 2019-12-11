import { Component, OnInit } from '@angular/core';
import { CreateflightModel } from '../flights/createFlightModel';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.scss']
})
export class CreateFlightComponent implements OnInit {
 
  constructor() { }

  createflightmodel: CreateflightModel = new CreateflightModel();

  ngOnInit() {

    
  }

  myFunc(val: any) {
    alert("myfunction triggered ");
  }


  onSubmit() {
    alert("Booking Done Successfully ");
  } 
}
