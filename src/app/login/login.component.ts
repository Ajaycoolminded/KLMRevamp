import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { ApiService } from '../api.service';
import { loginModel } from './loginModel';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetail: loginModel = new loginModel();
  frmlogin: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: ApiService) {}


  buildForm() {
    this.frmlogin = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(): void {
    debugger
    event.preventDefault();
    this.formSubmitted = true;
    

    if (this.frmlogin.valid) {
      console.log(this.frmlogin.value); // Process your form
      this.loginService.getloginModel(this.loginDetail).subscribe(res => {
      console.log(res);
      if(res='success')
      {
        this.router.navigate(['/home']);
        return false;
      }
        debugger;
      });
    }
  }

}
