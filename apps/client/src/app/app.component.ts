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

@Component({
  standalone: true,
  imports: [
    RouterLinkWithHref,
    RouterOutlet,
    RouterModule,
    ProductListComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
  ],
  selector: 'express-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Productify';
}
