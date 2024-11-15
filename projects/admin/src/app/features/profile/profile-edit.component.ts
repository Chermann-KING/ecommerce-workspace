import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsModule } from '../../shared/modules/icons.module';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterLink, IconsModule],
  template: `
    <div class="container mx-auto max-w-3xl p-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Modifier le profil
        </h1>
        <button
          routerLink="/profile"
          class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <i-lucide name="x" class="h-4 w-4" />
          <span>Annuler</span>
        </button>
      </div>
      <!-- Formulaire à venir -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p class="text-gray-600 dark:text-gray-300">
          Formulaire d'édition à venir...
        </p>
      </div>
    </div>
  `,
})
export class ProfileEditComponent {}
