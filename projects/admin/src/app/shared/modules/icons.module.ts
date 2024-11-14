import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  Menu,
  Sun,
  Moon,
  User,
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Settings,
  List,
  Tags,
  PlusCircle,
  Users,
  Bell,
  PanelLeft,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-angular';

const icons = {
  Menu,
  Sun,
  Moon,
  User,
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Settings,
  List,
  Tags,
  PlusCircle,
  Users,
  Bell,
  PanelLeft,
  PanelLeftOpen,
  PanelLeftClose,
  PanelRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule],
})
export class IconsModule {}
