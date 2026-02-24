import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Check if running in browser
  if (isPlatformBrowser(platformId)) {

    const isLoggedIn = localStorage.getItem('pinVerified');

    if (isLoggedIn === 'true') {
      return true;
    }
  }

  return router.createUrlTree(['']);
};