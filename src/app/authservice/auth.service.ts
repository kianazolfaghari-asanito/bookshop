import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: any;
  token$ = new BehaviorSubject<string | null>(localStorage.getItem('token'));

  constructor(private router: Router) {
    this.token$.subscribe(token => {
      if (!token) {
        this.router.navigate(['/login']);
      } else {
        // this.postService.isCustomerLoggedIn.next(true);
      }
    });
    console.log(this.token$)
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token$.next(token); 
  }

  removeToken() {
    localStorage.removeItem('token');
    this.token$.next(null);
  }

  logout() {
    this.user = null;
    this.removeToken();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.token$.value;
  }
}
