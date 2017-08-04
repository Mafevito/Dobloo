import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service';
import { SolicitudeService } from '../services/solicitude.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SolicitudeComponent } from './solicitude/solicitude.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudeDetailsComponent } from './solicitude-details/solicitude-details.component';
import { EditSolicitudeComponent } from './edit-solicitude/edit-solicitude.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'solicitude', component: SolicitudeComponent },
  { path: 'solicitudes', component: SolicitudesComponent},
  { path: 'solicitudes/:id', component: SolicitudeDetailsComponent},
  { path: 'update/:id', component: EditSolicitudeComponent},
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
