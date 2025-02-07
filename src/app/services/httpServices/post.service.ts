import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getData() {
    throw new Error('Method not implemented.');
  }
private baseUrl:"http://localhost:3000/auth"

constructor(private http: HttpClient) {}
register(body: { username: string; password: string }): Observable<any> {
return this.http.post(`${this.baseUrl}/register`, body);
}
}
