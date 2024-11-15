import { Component, OnDestroy } from '@angular/core';
import { IconsModule } from '../../../../shared/modules/icons.module';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [IconsModule, RouterLink],
  template: `
    <button
      (click)="isOpen = !isOpen"
      class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-200"
    >
      <i-lucide name="user" class="h-6 w-6" />
    </button>

    @if (isOpen) {
    <div
      class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700"
    >
      <div class="p-4 border-b dark:border-gray-700">
        <p class="font-medium text-gray-900 dark:text-white">Chermann KING</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          admin&#64;test.com
        </p>
      </div>

      <div class="p-2">
        <a
          routerLink="/profile"
          class="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <i-lucide name="user" class="h-4 w-4" />
          <span>Mon profil</span>
        </a>
        <a
          routerLink="/settings"
          class="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <i-lucide name="settings" class="h-4 w-4" />
          <span>Paramètres</span>
        </a>
        <button
          (click)="logout()"
          class="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <i-lucide name="log-out" class="h-4 w-4" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
    }
  `,
})
export class UserMenuComponent implements OnDestroy {
  isOpen = false;
  private routerSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isOpen = false;
      });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
