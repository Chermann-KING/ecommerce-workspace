import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isSidebarOpenSignal = signal<boolean>(true);
  private isMobileMenuOpenSignal = signal<boolean>(false);
  private themeSignal = signal<'light' | 'dark'>('light');

  constructor() {
    // Écoute les changements de taille d'écran
    window.addEventListener('resize', () => {
      if (this.isResponsive() && this.isSidebarOpenSignal()) {
        this.isSidebarOpenSignal.set(false);
      }
    });

    // Effet pour gérer le thème
    effect(() => {
      document.documentElement.classList.toggle(
        'dark',
        this.themeSignal() === 'dark'
      );
    });
  }

  private isResponsive(): boolean {
    return window.innerWidth < 768; // breakpoint mobile
  }

  get isSidebarOpen() {
    return this.isSidebarOpenSignal();
  }

  get isMobileMenuOpen() {
    return this.isMobileMenuOpenSignal();
  }

  get theme() {
    return this.themeSignal();
  }

  toggleSidebar() {
    if (this.isResponsive()) {
      this.isMobileMenuOpenSignal.update((v) => !v);
    } else {
      this.isSidebarOpenSignal.update((v) => !v);
    }
  }

  toggleTheme() {
    this.themeSignal.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  closeMobileMenu() {
    this.isMobileMenuOpenSignal.set(false);
  }

  // Méthode utile pour le responsive
  subscribeToResize(callback: (isMobile: boolean) => void) {
    const handleResize = () => callback(this.isResponsive());
    window.addEventListener('resize', handleResize);
    // Appel initial
    handleResize();
    // Retourne une fonction de cleanup
    return () => window.removeEventListener('resize', handleResize);
  }
}
