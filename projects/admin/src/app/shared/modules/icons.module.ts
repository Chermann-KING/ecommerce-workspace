import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
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
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule],
})
export class IconsModule {}
