import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  getData() {
    throw new Error("Method not implemented.");
  }
  private baseUrl: "http://localhost:3000/auth";

  constructor(private http: HttpClient) {}
  register(body: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  login(body: { username: String; password: String }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
//localStorage.setItem("token", response.token);
//this.router.navigate(["/list"]);
