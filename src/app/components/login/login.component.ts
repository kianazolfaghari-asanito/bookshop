import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { PostService } from '../../services/httpServices/post.service';

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

  constructor(private http: HttpClient, private router: Router, private postService : PostService) {}

  loginUser() {
    this.
  }
}
