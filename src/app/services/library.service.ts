import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }
  async openDialog() {
    const { value: formValues } = await Swal.fire({
      title: "ایجاد محصول جدید",
      html: `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">نام کتاب</label>
      <input  type="text" id="swal-input1" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="نام کتاب">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">خلاصه</label>
      <input  type="text" id="swal-input2" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="خلاصه">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">نویسنده</label>
      <input  type="text" id="swal-input3" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="نویسنده">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">قیمت</label>
      <input  type="number" id="swal-input4" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="قیمت">
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <label style="font-size: 14px; font-weight: bold;">تعداد موجودی</label>
      <input type="number" id="swal-input5" style="height: 32px; font-size: 14px; border-radius: 8px; padding: 4px 8px; border: 1px solid #ddd;" placeholder="تعداد موجودی">
    </div>
  </div>
      `,
      showCancelButton: true,
      confirmButtonText: "ایجاد",
      cancelButtonText: "انصراف",
      customClass: {
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button"
      },
      focusConfirm: false,
      preConfirm: () => {
        return {
          title: (document.getElementById("swal-input1") as HTMLInputElement)
            .value,
          summary: (document.getElementById("swal-input2") as HTMLInputElement)
            .value,
          author: (document.getElementById("swal-input3") as HTMLInputElement)
            .value,
          price: Number(
            (document.getElementById("swal-input4") as HTMLInputElement).value
          ),
          quantity: Number(
            (document.getElementById("swal-input5") as HTMLInputElement).value
          )
        };
      }
    });
  }
}
