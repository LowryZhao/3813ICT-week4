import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LoginComponent } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'profile', component: Profile, title: 'Profile' }
];
