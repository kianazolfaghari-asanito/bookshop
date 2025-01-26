import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss"
})
export class registerComponent {
  userData = {
    username: "",
    password: ""
  };

  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {
    if (!this.userData.username || !this.userData.password) return;

    this.http
      .post("http://localhost:3000/auth/register", this.userData)
      .subscribe(
        response => {
          console.log("Registration Successful:", response);
          // if (this.userData.username === 'admin' && this.userData.password === 'password') {
            this.router.navigate(['/login']);
          // } 
        },
        error => {
          console.error("Registration Failed:", error);
        }
      );
  }
}
