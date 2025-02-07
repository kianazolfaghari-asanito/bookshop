import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "../../services/httpServices/post.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss"
})
export class registerComponent {
  constructor(private http: HttpClient, private router: Router, private PostService:PostService) {}
  body: { username: string; password: string }
  registerUser() {
    this.PostService.register(this.body);
    this.router.navigate(['/login']);

    }
  }
