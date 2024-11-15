import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IconsModule } from '../../shared/modules/icons.module';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterLink, IconsModule, ReactiveFormsModule],
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

      <form
        [formGroup]="profileForm"
        (ngSubmit)="onSubmit()"
        class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6"
      >
        <!-- Prénom -->
        <div>
          <label
            for="firstName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Prénom
          </label>
          <input
            id="firstName"
            type="text"
            formControlName="firstName"
            class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          @if (showError('firstName')) {
          <p class="mt-1 text-sm text-red-600 dark:text-red-400">
            Le prénom est requis
          </p>
          }
        </div>

        <!-- Nom -->
        <div>
          <label
            for="lastName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Nom
          </label>
          <input
            id="lastName"
            type="text"
            formControlName="lastName"
            class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          @if (showError('lastName')) {
          <p class="mt-1 text-sm text-red-600 dark:text-red-400">
            Le nom est requis
          </p>
          }
        </div>

        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            formControlName="email"
            class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          @if (showError('email')) {
          <p class="mt-1 text-sm text-red-600 dark:text-red-400">
            @if (profileForm.get('email')?.hasError('required')) { L'email est
            requis } @else if (profileForm.get('email')?.hasError('email')) {
            L'email n'est pas valide }
          </p>
          }
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end pt-4">
          <button
            type="submit"
            [disabled]="profileForm.invalid || isLoading"
            class="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors"
          >
            @if(isLoading) {
            <i-lucide name="loader-2" class="h-5 w-5 animate-spin" />
            <span>Enregistrement...</span>
            } @else {
            <i-lucide name="save" class="h-5 w-5" />
            <span>Enregistrer</span>
            }
          </button>
        </div>
      </form>
    </div>
  `,
})
export class ProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    // TODO: Charger les données actuelles de l'utilisateur
    this.profileForm.patchValue({
      firstName: 'Chermann',
      lastName: 'KING',
      email: 'admin@test.com',
    });
  }

  showError(fieldName: string): boolean {
    const field = this.profileForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  async onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      try {
        // TODO: Sauvegarder les modifications
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulation
        await this.router.navigate(['/profile']);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
      } finally {
        this.isLoading = false;
      }
    } else {
      Object.keys(this.profileForm.controls).forEach((key) => {
        const control = this.profileForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
