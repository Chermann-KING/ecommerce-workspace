// guards/admin-layout.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

export const adminLayoutGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.currentUser) {
    return router.createUrlTree(['/auth/login']);
  }

  // TODO: Implémenter la vérification du rôle admin
  return true;
};
