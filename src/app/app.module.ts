import { importProvidersFrom, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerComponent } from './components/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthInterceptor } from './authservice/AuthInterceptor.service';
import { LibraryService } from './services/library.service';
// import { authGuard } from './guard/auth.guard';
import { PostService } from './services/httpServices/post.service';
const routes: Routes = [
  { path: 'register', component: registerComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'list', component: ListComponent, 
    // canActivate:[authGuard]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    registerComponent,
    LoginComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
