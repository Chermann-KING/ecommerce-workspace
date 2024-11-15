import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="p-4 ">
      <h1 class="text-2xl font-bold text-black dark:text-white mb-4">
        Paramètres
      </h1>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <p class="text-gray-600 dark:text-gray-300">Contenu des paramètres</p>
      </div>
    </div>
  `,
})
export class SettingsComponent {}
