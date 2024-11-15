import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LayoutService } from '../../services/layout.service';
import { IconsModule } from '../../../../shared/modules/icons.module';
import { UserMenuComponent } from '../user-menu/user-menu.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, IconsModule, UserMenuComponent],
  template: `
    <nav
      class="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 h-16"
    >
      <div class="px-4 h-full flex items-center justify-between">
        <!-- Left side -->
        <div class="flex items-center gap-4">
          <button
            (click)="layoutService.toggleSidebar()"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-200"
          >
            <i-lucide name="menu" class="h-6 w-6" />
          </button>
          <app-logo></app-logo>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <!-- Theme toggle -->
          <button
            (click)="layoutService.toggleTheme()"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-200"
          >
            <i-lucide
              [name]="layoutService.theme === 'dark' ? 'sun' : 'moon'"
              class="h-6 w-6"
            />
          </button>

          <!-- Simple Profile button -->
          <!-- <button
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-200"
          >
            <i-lucide name="user" class="h-6 w-6" />
          </button> -->

          <app-user-menu></app-user-menu>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  constructor(public layoutService: LayoutService) {}
}
