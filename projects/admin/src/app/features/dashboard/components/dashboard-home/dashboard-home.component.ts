import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  template: `
    <div class="p-4 ">
      <!-- 1f2937 -->
      <h1 class="text-2xl font-bold text-black dark:text-white mb-4">
        Dashboard
      </h1>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <p class="text-black dark:text-white">Contenu du dashboard</p>
      </div>
    </div>
  `,
})
export class DashboardHomeComponent {}
