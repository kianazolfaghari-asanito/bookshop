import { ChangeDetectorRef, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { bookData } from "../dataTypes/bookdata.service";
export interface search {
  id:string
}
@Injectable({
  providedIn: "root"
})
export class GetService {
  isloading = new BehaviorSubject<boolean>(false);
  data: bookData[] = [];
  private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  fetchBooks() {
    this.isloading.next(true);
    const queryParams = {
      page: 1,
      limit: 10,
      Title: "",
      minPrice: 0,
      maxPrice: 0
    };
    this.http
      .get<any>(`${this.baseUrl}/book`, { params: queryParams })
      .subscribe({
        next: (response: any) => {
          this.isloading.next(false);
          this.data.push(...response.data);
        },
        error: (error: any) => {
          this.isloading.next(false);
        }
      });
  }

  searchBooks(id: string = "") {
    let params = new HttpParams();
    
   
    if (id) {
      params = params.append('id', id);
    }
  
    this.http
      .get(`${this.baseUrl}/book`, { params:{id} }) 
      .subscribe({
        next: (response) => console.log(response),
        error: (err) => console.error('Error:', err), 
      });
  }
}
