import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "../../services/httpServices/post.service";
import { userData } from "../../services/dataTypes/userdata.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss"
})
export class registerComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private PostService: PostService
  ) {}
  registerUser(body: userData) {
    this.PostService.register(body).subscribe(Response => {
      if (Response) {
        this.router.navigate(["/login"]);
      }
    });
  }
}
