import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/httpServices/post.service';
import { userData } from '../../services/dataTypes/userdata.service';
import { AuthService } from '../../authservice/auth.service';
import { AuthInterceptor } from '../../authservice/AuthInterceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  errorMessage: string = 'username or password is incorrect';

  constructor(
    private http: HttpClient,
    private router: Router,
    private postService: PostService
  ) {}
  userData: userData = {
    userName: '',
    password: '',
  };
  loginUser() {
    this.postService.login(this.userData);
  }
}
