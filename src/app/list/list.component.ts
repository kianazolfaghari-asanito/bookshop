import { HttpClient } from '@angular/common/http';
import { Component, inject, model, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
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
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        title: "",
        summary: "",
        author: "",
        price: 0,
        quantity: 0,
      },
    ],
  };
 
  constructor(private http: HttpClient) {}

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

    this.http.get('http://localhost:3000/book', { params: queryParams }).subscribe(
      (response: any) => {
        this.books = response.data; 
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching books:', error);
        this.isLoading = false;
      }
    );
  }
  openDialog() {}

}
  
