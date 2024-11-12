export interface MenuItem {
  iconName: string;
  label: string;
  route?: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    iconName: 'layout-dashboard',
    label: 'Dashboard',
    route: '/dashboard',
  },
  {
    iconName: 'shopping-bag',
    label: 'Produits',
    children: [
      {
        iconName: 'list',
        label: 'Liste des produits',
        route: '/products',
      },
      {
        iconName: 'plus-circle',
        label: 'Ajouter un produit',
        route: '/products/create',
      },
      {
        iconName: 'tags',
        label: 'Catégories',
        route: '/products/categories',
      },
    ],
  },
  {
    iconName: 'shopping-cart',
    label: 'Commandes',
    route: '/orders',
  },
  {
    iconName: 'users',
    label: 'Clients',
    route: '/customers',
  },
  {
    iconName: 'settings',
    label: 'Paramètres',
    route: '/settings',
  },
];
