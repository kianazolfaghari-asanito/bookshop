import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, inject, model, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { AuthService } from "../../authservice/auth.service";
import { LibraryService } from "../../services/library.service";
import { HttpService } from "../../services/httpServices/get.service";
import { PostService } from "../../services/httpServices/post.service";
import { bookData } from "../../services/dataTypes/bookdata.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss"
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
        quantity: 0
      }
    ]
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private library: LibraryService,
    private httpService: HttpService,
    private postService: PostService
  ) {}
  data: bookData[] = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      title: "",
      summary: "",
      author: "",
      price: 0,
      quantity: 0
    }
  ];

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.isLoading = true;
    const queryParams = {
      page: 1,
      limit: 10,
      Title: "",
      minPrice: 0,
      maxPrice: 0
    };

    this.http
      .get("http://localhost:3000/book", { params: queryParams })
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
        },
        error: (error: any) => {
          this.isLoading = false;
        }
      });
  }
  openDialog() {
    this.library.openDialog();
  }

  exit() {
    this.authService.logout();
  }
  apiUrl = "http://localhost:3000/book";
  deleteBook(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log(`Book ${id} deleted`);
        this.books = this.books.filter(book => book.id !== id);
      }
    });
  }
}
