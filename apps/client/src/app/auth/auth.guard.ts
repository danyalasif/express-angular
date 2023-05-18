import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);

  return authService.isLoggedIn;
};

export const loggedInAuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return !authService.isLoggedIn;
};
