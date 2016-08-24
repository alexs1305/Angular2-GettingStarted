import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IPerson } from '../models/person';

@Injectable()
export class PersonService {
    private _personUrl = 'api/people/people.json';

    constructor(private _http: Http) { }

    getPeople(): Promise<IPerson[]> {
        return this._http.get(this._personUrl).toPromise()
            .then((response: Response) => response.json() as IPerson[])
            .catch(this.handleError);
    }

    getPerson(id: number): Promise<IPerson> {
        return this.getPeople()
            .then(people => people.find(p=>p.id == id)); 
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.json().error || 'Server error');
    }
}
