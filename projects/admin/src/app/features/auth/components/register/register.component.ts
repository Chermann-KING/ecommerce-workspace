import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;
  showPassword = false;
  showPasswordConfirm = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('passwordConfirm')?.value
      ? null
      : { mismatch: true };
  }

  togglePasswordVisibility(field: 'password' | 'passwordConfirm') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showPasswordConfirm = !this.showPasswordConfirm;
    }
  }

  showError(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      try {
        await this.authService.register(this.registerForm.value);
        this.toastService.success(
          'Inscription réussie ! Vous pouvez maintenant vous connecter.'
        );
      } catch (error) {
        this.toastService.error(
          "Une erreur est survenue lors de l'inscription."
        );
      } finally {
        this.isLoading = false;
      }
    } else {
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
