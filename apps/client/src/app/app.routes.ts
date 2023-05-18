import { Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { authGuard, loggedInAuthGuard } from './auth/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponent },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
    canActivate: [loggedInAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [loggedInAuthGuard],
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
    pathMatch: 'full',
    // canActivate: [authGuard],
  },
];
