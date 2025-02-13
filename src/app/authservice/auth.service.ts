import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/httpServices/post.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: any;
  token: string | null;

  constructor(private router: Router, private postService: PostService) {
    this.token = localStorage.getItem('token');
    console.log(this.token)
    if (!this.token) this.router.navigate(['/login']);
      else {
    this.postService.isCustomerLoggedIn.next(true)
    
  }
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  removeToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  logout() {
    this.user = null;
    this.removeToken();
    this.router.navigate(['/login']);
  }
}
