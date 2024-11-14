import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isSidebarOpenSignal = signal<boolean>(true);
  private isSidebarCollapsedSignal = signal<boolean>(false);
  private isMobileMenuOpenSignal = signal<boolean>(false);
  private themeSignal = signal<'light' | 'dark'>('light');

  constructor() {
    // Restaurer les états sauvegardés
    const savedSidebarOpen = localStorage.getItem('sidebarOpen') === 'true';
    const savedSidebarCollapsed =
      localStorage.getItem('sidebarCollapsed') === 'true';
    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

    this.isSidebarOpenSignal.set(savedSidebarOpen);
    this.isSidebarCollapsedSignal.set(savedSidebarCollapsed);
    this.themeSignal.set(savedTheme);

    // Observer les changements et les sauvegarder
    effect(() => {
      localStorage.setItem(
        'sidebarOpen',
        this.isSidebarOpenSignal().toString()
      );
      localStorage.setItem(
        'sidebarCollapsed',
        this.isSidebarCollapsedSignal().toString()
      );
      localStorage.setItem('theme', this.themeSignal());
      document.documentElement.classList.toggle(
        'dark',
        this.themeSignal() === 'dark'
      );
    });

    window.addEventListener('resize', () => {
      if (this.isResponsive() && this.isSidebarOpenSignal()) {
        this.isSidebarOpenSignal.set(false);
      }
    });
  }

  private isResponsive(): boolean {
    return window.innerWidth < 768;
  }

  get isMobileView() {
    return this.isResponsive();
  }

  get isSidebarOpen() {
    return this.isSidebarOpenSignal();
  }

  get isSidebarCollapsed() {
    return this.isSidebarCollapsedSignal();
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
      this.isSidebarOpenSignal.update((v) => !v);
    } else {
      this.isSidebarOpenSignal.update((v) => !v);
    }
  }

  toggleSidebarCollapse() {
    if (!this.isResponsive()) {
      this.isSidebarCollapsedSignal.update((v) => !v);
    }
  }

  toggleTheme() {
    this.themeSignal.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  closeMobileMenu() {
    this.isMobileMenuOpenSignal.set(false);
    this.isSidebarOpenSignal.set(false);
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
