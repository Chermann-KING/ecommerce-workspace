import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IconsModule } from '../../../../shared/modules/icons.module';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [RouterLink, IconsModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto max-w-3xl p-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Changer le mot de passe
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
        [formGroup]="passwordForm"
        (ngSubmit)="onSubmit()"
        class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6"
      >
        <!-- Mot de passe actuel -->
        <div>
          <label
            for="currentPassword"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Mot de passe actuel
          </label>
          <div class="relative">
            <input
              [type]="showCurrentPassword ? 'text' : 'password'"
              id="currentPassword"
              formControlName="currentPassword"
              class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="button"
              (click)="showCurrentPassword = !showCurrentPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              <i-lucide
                [name]="showCurrentPassword ? 'eye-off' : 'eye'"
                class="h-5 w-5"
              />
            </button>
          </div>
          @if (showError('currentPassword')) {
          <p class="mt-1 text-sm text-red-600 dark:text-red-400">
            Le mot de passe actuel est requis
          </p>
          }
        </div>

        <!-- Nouveau mot de passe -->
        <div>
          <label
            for="newPassword"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Nouveau mot de passe
          </label>
          <div class="relative">
            <input
              [type]="showNewPassword ? 'text' : 'password'"
              id="newPassword"
              formControlName="newPassword"
              class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="button"
              (click)="showNewPassword = !showNewPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              <i-lucide
                [name]="showNewPassword ? 'eye-off' : 'eye'"
                class="h-5 w-5"
              />
            </button>
          </div>
          @if (showError('newPassword')) {
          <p class="mt-1 text-sm text-red-600 dark:text-red-400">
            @if (passwordForm.get('newPassword')?.hasError('required')) { Le
            nouveau mot de passe est requis } @else if
            (passwordForm.get('newPassword')?.hasError('minlength')) { Le mot de
            passe doit contenir au moins 6 caractères }
          </p>
          }
        </div>

        <!-- Confirmation du nouveau mot de passe -->
        <div>
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Confirmer le nouveau mot de passe
          </label>
          <div class="relative">
            <input
              [type]="showConfirmPassword ? 'text' : 'password'"
              id="confirmPassword"
              formControlName="confirmPassword"
              class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="button"
              (click)="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              <i-lucide
                [name]="showConfirmPassword ? 'eye-off' : 'eye'"
                class="h-5 w-5"
              />
            </button>
          </div>
          @if (showError('confirmPassword')) {
          <p class="mt-1 text-sm text-red-600 dark:text-red-400">
            @if (passwordForm.get('confirmPassword')?.hasError('required')) { La
            confirmation du mot de passe est requise } @else if
            (passwordForm.hasError('passwordMismatch')) { Les mots de passe ne
            correspondent pas }
          </p>
          }
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end pt-4">
          <button
            type="submit"
            [disabled]="passwordForm.invalid || isLoading"
            class="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors"
          >
            @if(isLoading) {
            <i-lucide name="loader-2" class="h-5 w-5 animate-spin" />
            <span>Modification en cours...</span>
            } @else {
            <i-lucide name="save" class="h-5 w-5" />
            <span>Modifier le mot de passe</span>
            }
          </button>
        </div>
      </form>
    </div>
  `,
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;
  isLoading = false;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [ChangePasswordComponent.passwordMatchValidator], // Référence à la méthode statique
      }
    );
  }

  static passwordMatchValidator(g: AbstractControl): ValidationErrors | null {
    const newPassword = g.get('newPassword')?.value;
    const confirmPassword = g.get('confirmPassword')?.value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  showError(fieldName: string): boolean {
    const field = this.passwordForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  async onSubmit() {
    if (this.passwordForm.valid) {
      this.isLoading = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulation
        await this.router.navigate(['/profile']);
      } catch (error) {
        console.error('Erreur lors du changement de mot de passe:', error);
      } finally {
        this.isLoading = false;
      }
    } else {
      Object.keys(this.passwordForm.controls).forEach((key) => {
        const control = this.passwordForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
