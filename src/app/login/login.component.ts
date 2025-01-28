import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 userData = {
    username: "",
    password: ""
  };
  errorMessage: string = 'username or password is incorrect';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!this.userData.username || !this.userData.password) return;

    this.http
      .post("http://localhost:3000/auth/login", this.userData)
      .subscribe(
        response => {
          console.log("login Successful:", response);
          // if (this.userData.username === 'admin' && this.userData.password === 'password') {
            this.router.navigate(['/list']);
          // } 
        },
        error => {
          console.error("Registration Failed:", error);
        }
      );
  }
}
