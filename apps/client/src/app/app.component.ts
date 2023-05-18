import { Component } from '@angular/core';
import {
  RouterLinkWithHref,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {
  HttpRequestInterceptor,
  httpInterceptorProviders,
} from './helpers/http.interceptor';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  standalone: true,
  imports: [
    RouterLinkWithHref,
    RouterOutlet,
    RouterModule,
    ProductListComponent,
    AddProductComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HttpClientModule,
  ],
  selector: 'express-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Productify';
  private roles: string[] = [];
  isLoggedIn = false;
  email?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    console.log({ isLogged: this.isLoggedIn });
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.email = user.email;
    }
  }
}
