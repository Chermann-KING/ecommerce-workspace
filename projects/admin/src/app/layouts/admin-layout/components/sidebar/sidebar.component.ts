import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ITEMS, MenuItem } from '../../config/menu.config';
import { LayoutService } from '../../services/layout.service';
import { IconsModule } from '../../../../shared/modules/icons.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconsModule],
  template: `
    <aside class="bg-white dark:bg-gray-800 h-full shadow-lg flex flex-col">
      <nav class="flex-1 p-4">
        <ul class="space-y-2">
          @for(item of menuItems; track item.label) {
          <li>
            @if(item.route) {
            <a
              [routerLink]="item.route"
              routerLinkActive="bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200"
              class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
            >
              <i-lucide [name]="item.iconName" class="h-5 w-5 flex-shrink-0" />
              @if(!layoutService.isSidebarCollapsed) {
              <span>{{ item.label }}</span>
              }
            </a>
            } @else {
            <div
              (click)="toggleSubMenu(item)"
              class="flex items-center gap-3 px-4 py-2 text-gray-500 dark:text-gray-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <i-lucide [name]="item.iconName" class="h-5 w-5 flex-shrink-0" />
              @if(!layoutService.isSidebarCollapsed) {
              <span>{{ item.label }}</span>
              @if(item.children) {
              <i-lucide
                name="chevron-down"
                class="h-4 w-4 ml-auto transition-transform duration-200"
                [class.rotate-180]="isSubMenuOpen(item)"
              />
              } }
            </div>
            @if(item.children && !layoutService.isSidebarCollapsed) {
            <ul
              class="mt-1 ml-4 space-y-1 overflow-hidden transition-all duration-200"
              [class.max-h-0]="!isSubMenuOpen(item)"
              [class.max-h-96]="isSubMenuOpen(item)"
            >
              @for(child of item.children; track child.label) {
              <li>
                <a
                  [routerLink]="child.route"
                  routerLinkActive="text-indigo-600 dark:text-indigo-200"
                  class="flex items-center gap-3 px-4 py-2 text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
                >
                  <i-lucide
                    [name]="child.iconName"
                    class="h-4 w-4 flex-shrink-0"
                  />
                  <span>{{ child.label }}</span>
                </a>
              </li>
              }
            </ul>
            } }
          </li>
          }
        </ul>
      </nav>

      @if(!layoutService.isMobileView) {
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          (click)="layoutService.toggleSidebarCollapse()"
          class="w-full flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-200 transition-all duration-200"
        >
          <i-lucide
            [name]="
              layoutService.isSidebarCollapsed
                ? 'panel-left-open'
                : 'panel-left-close'
            "
            class="h-5 w-5"
          />
          @if(!layoutService.isSidebarCollapsed) {
          <span class="ml-2">Réduire</span>
          }
        </button>
      </div>
      }
    </aside>
  `,
})
export class SidebarComponent {
  menuItems = MENU_ITEMS;
  openMenus = new Set<string>();

  constructor(public layoutService: LayoutService) {}

  toggleSubMenu(item: MenuItem) {
    if (this.openMenus.has(item.label)) {
      this.openMenus.delete(item.label);
    } else {
      this.openMenus.add(item.label);
    }
  }

  isSubMenuOpen(item: MenuItem): boolean {
    return this.openMenus.has(item.label);
  }
}
