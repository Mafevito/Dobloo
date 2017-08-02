import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service';
import { SolicitudService } from '../services/solicitud.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
