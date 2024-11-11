import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User, LoginCredentials, AuthResponse } from '../../types/auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Utilisation des signals
  private currentUserSignal = signal<User | null>(null);
  private isLoadingSignal = signal<boolean>(false);

  constructor(private router: Router) {
    // Vérifie si un utilisateur est déjà connecté
    this.checkStoredAuth();
  }

  // Getters pour les signals
  get currentUser() {
    return this.currentUserSignal();
  }

  get isLoading() {
    return this.isLoadingSignal();
  }

  async login(credentials: LoginCredentials) {
    try {
      this.isLoadingSignal.set(true);

      // TODO: Remplacer par un vrai appel API
      const mockResponse: AuthResponse = {
        user: {
          id: '1',
          email: credentials.email,
          firstName: 'John',
          lastName: 'Doe',
          role: 'ADMIN',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        token: 'mock-jwt-token',
      };

      // Stockage des données d'auth
      localStorage.setItem('auth_token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockResponse.user));

      this.currentUserSignal.set(mockResponse.user);
      await this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      this.isLoadingSignal.set(false);
    }
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.currentUserSignal.set(null);
    this.router.navigate(['/auth/login']);
  }

  private checkStoredAuth() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUserSignal.set(JSON.parse(storedUser));
    }
  }
}
