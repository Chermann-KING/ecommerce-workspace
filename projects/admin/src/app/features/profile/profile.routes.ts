import { Routes } from '@angular/router';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit.component';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileViewComponent,
      },
      {
        path: 'edit',
        component: ProfileEditComponent,
      },
      // {
      //   path: 'change-password',
      //   component: ChangePasswordComponent,
      // },
    ],
  },
];
