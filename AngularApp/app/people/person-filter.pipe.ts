import {  PipeTransform, Pipe } from '@angular/core';
import { IPerson } from '../models/person';

@Pipe({
    name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

    transform(value: IPerson[], filter: string): IPerson[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((person : IPerson) =>(
            person.FirstName.toLocaleLowerCase().indexOf(filter) !== -1) 
            || person.LastName.toLocaleLowerCase().indexOf(filter) != -1)  
            : value;
    }
}
