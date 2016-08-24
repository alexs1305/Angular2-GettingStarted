import { Component, OnInit }  from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { IPerson } from '../models/person';
import { PersonFilterPipe } from './person-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { PersonService } from './person.service';

@Component({
    selector: 'person-list',
    templateUrl: 'app/people/person-list.component.html',
    styleUrls: ['app/people/person-list.component.css'],
    pipes: [PersonFilterPipe],

})
export class PersonListComponent implements OnInit {
    pageTitle: string = 'People';
    listFilter: string = '';
    errorMessage: string;
    people: IPerson[];

    constructor(private router: Router,
                private _personService : PersonService) {

    }

    ngOnInit(): void {
           this._personService.getPeople()
                    .then(
                       people => this.people = people)
                    .catch(
                       error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'People: ' + message;
    }

    goToPerson(id : number) : void {
        this.router.navigate(['/', id]);
    } 
}
