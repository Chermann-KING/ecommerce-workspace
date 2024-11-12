import {
  LayoutDashboard,
  ShoppingBag,
  List,
  PlusCircle,
  Tags,
  ShoppingCart,
  Users,
  Settings,
} from 'lucide-angular';

import { MenuItem } from '../types/layout.types';

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    route: '/dashboard',
  },
  {
    icon: ShoppingBag,
    label: 'Produits',
    children: [
      {
        icon: List,
        label: 'Liste des produits',
        route: '/products',
      },
      {
        icon: PlusCircle,
        label: 'Ajouter un produit',
        route: '/products/create',
      },
      {
        icon: Tags,
        label: 'Catégories',
        route: '/products/categories',
      },
    ],
  },
  {
    icon: ShoppingCart,
    label: 'Commandes',
    route: '/orders',
  },
  {
    icon: Users,
    label: 'Clients',
    route: '/customers',
  },
  {
    icon: Settings,
    label: 'Paramètres',
    route: '/settings',
  },
];
