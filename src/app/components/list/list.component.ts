import { HttpClient } from '@angular/common/http';
import { Component, inject, model, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../authservice/auth.service';
import { LibraryService } from '../../services/library.service';
import { HttpService } from '../../services/httpServices/get.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  books: any[] = [];
  isLoading: boolean = false;
  bookData = {
    totalBooks: 0,
    page: 0,
    limit: 0,
    totalPages: 0,
    data: [
      {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        title: '',
        summary: '',
        author: '',
        price: 0,
        quantity: 0,
      },
    ],
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private library: LibraryService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.isLoading = true;
    const queryParams = {
      page: 1,
      limit: 10,
      title: '',
      minPrice: 0,
    };

    this.http
      .get('http://localhost:3000/book', { params: queryParams })
      .subscribe(
        (response: any) => {
          this.books = response.data;
          this.isLoading = false;
        },
        (error: any) => {
          this.isLoading = false;
        }
      );
  }
  openDialog() {
    this.library.openDialog();
  }

  createBook(bookData: any) {
    const url = 'http://localhost:3000/book';
    let token = localStorage.getItem('token');
    this.http
      .post(url, bookData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: 'کتاب با موفقیت ایجاد شد',
            text: 'اطلاعات ذخیره شد.',
            confirmButtonText: 'باشه',
          });
          console.log('Response from server:', response);
          this.books.push(this.bookData);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'ایجاد کتاب ناموفق بود',
            text: 'مشکلی رخ داده است. لطفاً دوباره تلاش کنید.',
            confirmButtonText: 'باشه',
          });
          console.error('Error:', err);
        },
      });
  }
  exit() {
    this.authService.logout();
  }
  apiUrl = 'http://localhost:3000/book';
  deleteBook(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log(`Book ${id} deleted`);
        this.books = this.books.filter((book) => book.id !== id);
      },
    });
  }
}
