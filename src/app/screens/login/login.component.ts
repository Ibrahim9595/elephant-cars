import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginInterface } from '../../interfaces/login-interface';
import { UserAuthinticationService } from '../../user-authintication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern(/[0-9a-zA-Z_]{8,50}/)]);
  user: LoginInterface = 
  {
    email: "",
    password: ""
  };

  constructor(
    private loginService: UserAuthinticationService, 
    private router: Router, 
    private snakBar: MatSnackBar) { }

  login(){
    this.loginService.login(this.user)
    .then(d => {
      this.router.navigate(['']);
    }).catch(e => {
      this.snakBar.open("Wrong user name or password", "Dismiss");
    });
  }
  
}
