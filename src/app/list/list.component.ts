import { HttpClient } from '@angular/common/http';
import { Component, inject, model, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';




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
 
  constructor(private http: HttpClient,private AuthService: AuthService) {}

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
  async openDialog() {
    const { value: formValues } = await Swal.fire({
      title: 'ایجاد محصول جدید',
      html: `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">نام کتاب</label>
      <input id="swal-input1" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="نام کتاب">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">خلاصه</label>
      <input id="swal-input2" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="خلاصه">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">نویسنده</label>
      <input id="swal-input3" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="نویسنده">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">قیمت</label>
      <input id="swal-input4" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="قیمت">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">تعداد موجودی</label>
      <input id="swal-input5" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="تعداد موجودی">
    </div>
  </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'ایجاد',
      cancelButtonText: 'انصراف',
      customClass: {
        confirmButton: 'custom-confirm-button',      
        cancelButton: 'custom-cancel-button',
      },
      focusConfirm: false,
      preConfirm: () => {
        return {
          title: (document.getElementById('swal-input1') as HTMLInputElement).value,
          summary: (document.getElementById('swal-input2') as HTMLInputElement).value,
          author: (document.getElementById('swal-input3') as HTMLInputElement).value,
          price: Number((document.getElementById('swal-input4') as HTMLInputElement).value),
          quantity: Number((document.getElementById('swal-input5') as HTMLInputElement).value),
        };
      }
    });

    if (formValues.author) {
      this.createBook(formValues);
    }
  }
  
  createBook(bookData: any) {
    const url = 'http://localhost:3000/book'
this.http.post(url, bookData).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'کتاب با موفقیت ایجاد شد!',
          text: 'اطلاعات ذخیره شد.',
          confirmButtonText: 'باشه'
        });
        console.log('Response from server:', response);
        this.books.push(this.bookData);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'ایجاد کتاب ناموفق بود!',
          text: 'مشکلی رخ داده است. لطفاً دوباره تلاش کنید.',
          confirmButtonText: 'باشه'
        });
        console.error('Error:', err);
      }
    });
  }
  exit(){
    this.AuthService.logout();
  }

}

  
