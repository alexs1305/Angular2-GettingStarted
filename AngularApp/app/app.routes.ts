import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import {PersonListComponent} from './people/person-list.component'
import {PersonDetailComponent} from './people/person-detail.component'

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'people', component: PersonListComponent  },
  { path: 'people/:id', component: PersonDetailComponent  }
];

export const routing = RouterModule.forRoot(routes);
