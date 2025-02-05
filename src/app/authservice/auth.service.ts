import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: any;
  token: string | null;

  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
    if (!this.token) this.router.navigate(['/login']);
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
