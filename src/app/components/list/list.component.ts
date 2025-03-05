import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, inject, model, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { AuthService } from "../../authservice/auth.service";
import { LibraryService } from "../../services/library.service";
import { PostService } from "../../services/httpServices/post.service";
import { bookData } from "../../services/dataTypes/bookdata.service";
import { Title } from "@angular/platform-browser";
import { GetService, search } from "../../services/httpServices/get.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss"
})
export class ListComponent implements OnInit {
  data: bookData[] | undefined = [];
  loader: any;
  id: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private library: LibraryService,
    public getService: GetService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getService.fetchBooks();
    this.data = this.getService.data;
    this.loader = this.getService.isloading;
  }
  openDialog() {
    this.library.openDialog();
  }

  exit() {
    this.authService.logout();
  }
  searchById() {
    this.getService.searchBooks(this.id);
  }
  // apiUrl = "http://localhost:3000/book";
  // deleteBook(id: string) {
  //   this.http.delete(`${this.apiUrl}/${id}`).subscribe({
  //     next: () => {
  //       console.log(`Book ${id} deleted`);
  //       this.books = this.books.filter(book => book.id !== id);
  //     }
  //   });
  // }
}
