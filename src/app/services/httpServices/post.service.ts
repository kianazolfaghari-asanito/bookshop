import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { userData } from '../dataTypes/userdata.service';
import { bookData } from '../dataTypes/bookdata.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../authservice/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  isCustomerLoggedIn = new BehaviorSubject<boolean>(false);
  getData() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
  register(body: userData) {
    this.http
      .post(`${this.baseUrl}/auth/register`, body)
      .subscribe((result) => {
        if (result) {
          // this.isCustomerLoggedIn.next(true);
          this.router.navigate(['/login']);
        }
      });
  }

  login(body: userData) {
    this.http
      .post<any>(`${this.baseUrl}/auth/login`, body)
      .subscribe((result) => {
        if (result) {
          // this.isCustomerLoggedIn.next(true);
          this.router.navigate(['/list']);
          this.authService.setToken(result.token);
        }
      });
  }

  addBooks(body: bookData) {
    this.http.post(`${this.baseUrl}/book`, body).subscribe({
      next: (Response) => {
        Swal.fire({
          icon: 'success',
          title: 'کتاب با موفقیت ایجاد شد',
          // text: 'اطلاعات ذخیره شد',
          confirmButtonText: 'باشه',
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'ایجاد کتاب ناموفق بود',
          // text: 'مشکلی رخ داده است. لطفاً دوباره تلاش کنید',
          confirmButtonText: 'باشه',
        });
      },
    });
  }
}
