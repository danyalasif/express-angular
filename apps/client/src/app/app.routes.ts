import { Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { loggedInAuthGuard } from './auth/auth.guard';

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
];
