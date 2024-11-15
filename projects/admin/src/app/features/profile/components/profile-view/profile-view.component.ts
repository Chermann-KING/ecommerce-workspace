import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsModule } from '../../../../shared/modules/icons.module';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [RouterLink, IconsModule],
  template: `
    <div class="container mx-auto max-w-3xl p-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Mon Profil
        </h1>
        <button
          routerLink="edit"
          class="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <i-lucide name="edit" class="h-4 w-4" />
          <span>Modifier le profil</span>
        </button>
      </div>

      <!-- Informations Profil -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div class="flex items-center gap-4 pb-6 border-b dark:border-gray-700">
          <!-- Avatar/Initiales -->
          <div
            class="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center"
          >
            <span
              class="text-2xl font-bold text-indigo-600 dark:text-indigo-300"
              >CK</span
            >
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Chermann KING
            </h2>
            <p class="text-gray-500 dark:text-gray-400">admin&#64;test.com</p>
            <span
              class="inline-block mt-1 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded"
            >
              Administrateur
            </span>
          </div>
        </div>

        <!-- Détails -->
        <div class="mt-6 space-y-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 text-gray-500 dark:text-gray-400">
              Prénom
            </div>
            <div class="col-span-2 text-gray-900 dark:text-white font-medium">
              Chermann
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 text-gray-500 dark:text-gray-400">Nom</div>
            <div class="col-span-2 text-gray-900 dark:text-white font-medium">
              KING
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 text-gray-500 dark:text-gray-400">Email</div>
            <div class="col-span-2 text-gray-900 dark:text-white font-medium">
              admin&#64;test.com
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 text-gray-500 dark:text-gray-400">Rôle</div>
            <div class="col-span-2 text-gray-900 dark:text-white font-medium">
              Administrateur
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 text-gray-500 dark:text-gray-400">
              Membre depuis
            </div>
            <div class="col-span-2 text-gray-900 dark:text-white font-medium">
              01 janvier 2024
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="mt-6 pt-6 border-t dark:border-gray-700">
          <button
            routerLink="change-password"
            class="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <i-lucide name="key" class="h-4 w-4" />
            <span>Changer le mot de passe</span>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ProfileViewComponent {
  // TODO: injecter un service pour récupérer les infos utilisateur
}
