import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IPerson } from '../models/person';
import { PersonService } from './person.service';
import {StarComponent} from '../shared/star.component'

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class PersonDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Person Details';
    person: IPerson;
    errorMessage: string;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _personService: PersonService) {
    }

    ngOnInit(): void {

         this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this._personService.getPerson(id)
            .then(person => this.person = person);
      } 
    });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPerson(id: number) {
        this._personService.getPerson(id)
            .then(
                product => this.person = product)
            .catch
                (error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
