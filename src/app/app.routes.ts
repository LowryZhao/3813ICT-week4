import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LoginComponent } from './login/login';
import { ProfileComponent } from './profile/profile';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'profile', component: ProfileComponent, title: 'Profile', canActivate: [AuthGuard] }
];