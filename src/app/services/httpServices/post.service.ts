import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { Observable } from "rxjs";
import { userData } from "../dataTypes/userdata.service";

@Injectable({
  providedIn: "root"
})
export class PostService {
  getData() {
    throw new Error("Method not implemented.");
  }
  private baseUrl: "http://localhost:3000/auth";

  constructor(private http: HttpClient) {}
  register(body:userData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  login(body: userData): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
//localStorage.setItem("token", response.token);
//this.router.navigate(["/list"]);
