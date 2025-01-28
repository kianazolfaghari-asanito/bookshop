import { ChangeDetectorRef, Component } from "@angular/core";
import { registerComponent } from "./register/register.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title: string = "kiana";
  fullName: string = "";
  fullNames: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  addName() {
    if (this.fullName.trim()) {
      this.fullNames.push(this.fullName);
      this.fullName = "";
      this.cdr.detectChanges();
    }
  }

  removeName(index: number) {
    this.fullNames.splice(index, 1);
  }
}
