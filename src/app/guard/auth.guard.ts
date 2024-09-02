import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn()){
    return true
  }

  return false;
};
