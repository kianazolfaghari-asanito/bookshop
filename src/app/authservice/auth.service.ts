import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthSerivce {
  user: any;
  token: string;
  static logout: any;

  constructor(private router: Router) {
    this.token = localStorage.getItem("token");
    if (!this.token) this.router.navigate(["/login"]);
  }

  private setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }
  private removeToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  logout() {
    this.user = null;
    this.removeToken();
    if (!this.token) this.router.navigate(["/login"]);
  }
  intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      if (this.token) {
  
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`
          }
        });
  
      }
      return next.handle(request);
    }
}
