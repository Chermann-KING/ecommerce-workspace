import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { LayoutService } from './services/layout.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, NgClass, NavbarComponent, SidebarComponent],
  template: `
    <div
      class="min-h-screen  bg-gray-50 dark:bg-gray-900 transition-colors duration-150"
    >
      <app-navbar class="fixed top-0 left-0 right-0 z-10"></app-navbar>

      <!-- Sidebar -->
      <app-sidebar
        [class.translate-x-0]="layoutService.isSidebarOpen"
        [class.-translate-x-full]="!layoutService.isSidebarOpen"
        [class.w-64]="!layoutService.isSidebarCollapsed"
        [class.w-20]="layoutService.isSidebarCollapsed"
        class="fixed left-0 top-[64px] bottom-0 transition-all duration-300 ease-in-out z-20"
      >
      </app-sidebar>

      <!-- Main Content -->
      <main
        [class.ml-64]="
          layoutService.isSidebarOpen && !layoutService.isSidebarCollapsed
        "
        [class.ml-20]="
          layoutService.isSidebarOpen && layoutService.isSidebarCollapsed
        "
        class="pt-[64px] min-h-screen transition-all duration-300 ease-in-out"
      >
        <div class="p-4">
          <router-outlet></router-outlet>
        </div>
      </main>

      <!-- Overlay pour mobile -->
      @if (layoutService.isMobileMenuOpen) {
      <div
        class="fixed inset-0 bg-black bg-opacity-50 z-10"
        (click)="layoutService.closeMobileMenu()"
      ></div>
      }
    </div>
  `,
})
export class AdminLayoutComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    // Initial setup si nécessaire
  }
}
