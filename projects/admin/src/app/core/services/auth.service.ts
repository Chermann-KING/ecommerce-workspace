import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  User,
  LoginCredentials,
  RegisterCredentials,
  AuthResponse,
} from '../../types/auth.types';

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

  async register(credentials: RegisterCredentials): Promise<void> {
    try {
      this.isLoadingSignal.set(true);

      // Simulons un délai d'appel API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Vérification simple de l'email (simulation)
      if (credentials.email === 'admin@test.com') {
        throw new Error('Cet email est déjà utilisé');
      }

      // Dans un vrai service, on ferait un appel API ici
      const mockUser: User = {
        id: Date.now().toString(),
        email: credentials.email,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Simulons le stockage (dans un vrai cas, ce serait fait côté serveur)
      console.log('Nouvel utilisateur créé:', mockUser);

      // Redirection vers la page de connexion
      await this.router.navigate(['/auth/login']);
    } catch (error) {
      throw error;
    } finally {
      this.isLoadingSignal.set(false);
    }
  }

  // async login(credentials: LoginCredentials) {
  //   try {
  //     this.isLoadingSignal.set(true);

  //     // TODO: Remplacer par un vrai appel API
  //     const mockResponse: AuthResponse = {
  //       user: {
  //         id: '1',
  //         email: credentials.email,
  //         firstName: 'John',
  //         lastName: 'Doe',
  //         role: 'ADMIN',
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       token: 'mock-jwt-token',
  //     };

  //     // Stockage des données d'auth
  //     localStorage.setItem('auth_token', mockResponse.token);
  //     localStorage.setItem('user', JSON.stringify(mockResponse.user));

  //     this.currentUserSignal.set(mockResponse.user);
  //     await this.router.navigate(['/dashboard']);
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     throw error;
  //   } finally {
  //     this.isLoadingSignal.set(false);
  //   }
  // }

  async login(credentials: LoginCredentials) {
    try {
      this.isLoadingSignal.set(true);

      // Simulons une vérification basique de l'email
      if (credentials.email === 'admin@test.com') {
        // Connexion réussie
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

        localStorage.setItem('auth_token', mockResponse.token);
        localStorage.setItem('user', JSON.stringify(mockResponse.user));

        this.currentUserSignal.set(mockResponse.user);
        await this.router.navigate(['/dashboard']);
      } else {
        // Simulons une erreur
        throw new Error('Email ou mot de passe incorrect');
      }
    } catch (error) {
      // Faire remonter l'erreur pour que le composant puisse la gérer
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

  async requestPasswordReset(email: string): Promise<void> {
    // Simulation de la requête
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // TODO: faire un appel API
  }

  private checkStoredAuth() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUserSignal.set(JSON.parse(storedUser));
    }
  }
}
