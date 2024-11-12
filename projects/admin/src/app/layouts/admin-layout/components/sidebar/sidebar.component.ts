import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconsModule } from '../../../../shared/modules/icons.module';
import { MENU_ITEMS } from '../../config/menu.config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconsModule],
  template: `
    <aside class="bg-white dark:bg-gray-800 h-full shadow-lg">
      <nav class="p-4">
        <ul class="space-y-2">
          @for(item of menuItems; track item.label) {
          <li>
            @if(item.route) {
            <a
              [routerLink]="item.route"
              routerLinkActive="bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200"
              class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
            >
              <i-lucide [name]="item.iconName" class="h-5 w-5" />
              <span>{{ item.label }}</span>
            </a>
            } @else {
            <div
              class="flex items-center gap-3 px-4 py-2 text-gray-500 dark:text-gray-400"
            >
              <i-lucide [name]="item.iconName" class="h-5 w-5" />
              <span>{{ item.label }}</span>
              @if(item.children) {
              <span class="ml-auto">
                <i-lucide name="chevron-down" class="h-4 w-4" />
              </span>
              }
            </div>
            @if(item.children) {
            <ul class="mt-1 ml-4 space-y-1">
              @for(child of item.children; track child.label) {
              <li>
                <a
                  [routerLink]="child.route"
                  routerLinkActive="text-indigo-600 dark:text-indigo-200"
                  class="flex items-center gap-3 px-4 py-2 text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
                >
                  <i-lucide [name]="child.iconName" class="h-4 w-4" />
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
    </aside>
  `,
})
export class SidebarComponent {
  menuItems = MENU_ITEMS;
}
