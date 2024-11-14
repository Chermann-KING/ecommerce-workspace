export interface MenuItem {
  icon: any; // TODO: Penser à mettre le bon type
  label: string;
  route?: string;
  children?: MenuItem[];
  permission?: string; // Pour la gestion des permissions
}

interface LayoutState {
  isSidebarOpen: boolean;
  isSidebarCollapsed: boolean;
  isMobileMenuOpen: boolean;
  theme: 'light' | 'dark';
}
