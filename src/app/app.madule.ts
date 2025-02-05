import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { registerComponent } from "./register/register.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from "./login/login.component";
import { RouterModule,Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AuthInterceptor } from "./authservice/AuthInterceptor.service";



const routes: Routes = [
  {path: 'register', component: registerComponent },
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' }, 
  {path:'list', component:ListComponent}
];


@NgModule({
  declarations: [AppComponent,registerComponent,LoginComponent,ListComponent],
  imports: [BrowserModule, FormsModule, MatBadgeModule , HttpClientModule,RouterModule.forRoot(routes),MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
