import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navBar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { UserSideBarComponent } from './components/user-side-bar/user-side-bar.component';

export const routes: Routes = [
  {path: 'userSideBar', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nav', component: NavbarComponent},
  {path: '', component: UserSideBarComponent}
];
