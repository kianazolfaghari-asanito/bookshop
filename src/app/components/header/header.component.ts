import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { userData } from "../../services/dataTypes/userdata.service";
import { ListComponent } from "../list/list.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent implements OnInit {
  customerName: string = "";
  navType: string = "defult";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem("user") && val.url.includes("login") || val.url.includes("register")) {
          let storedUser = localStorage.getItem("user");
          let customerData = JSON.parse(storedUser);
          this.customerName = customerData.user;
          this.navType = "login";
        }
       else {
          this.navType = "defult";
        }
      }
    });
  }
}
