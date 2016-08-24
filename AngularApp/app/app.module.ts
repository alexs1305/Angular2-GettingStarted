import { routing }        from './app.routes';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent } from './app.component'
import { PersonService } from './people/person.service'
import { PersonListComponent } from './people/person-list.component'
import { PersonDetailComponent } from './people/person-detail.component'
import { StarComponent } from './shared/star.component'

@NgModule({
  imports: [
       routing,
    
  ],
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    StarComponent
      ],
  providers: [
    PersonService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}