import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
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
            <!-- Menu Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
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
            @if(layoutService.theme === 'dark') {
            <!-- Sun Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            } @else {
            <!-- Moon Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            }
          </button>

          <!-- Profile -->
          <button
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-200"
          >
            <!-- User Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  constructor(public layoutService: LayoutService) {}
}
