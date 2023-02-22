import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person';
import { PeeopleService } from '../services/peeople.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() person!: Person | Person;
  @Output() personChange = new EventEmitter<Person>();
  @Input() update!: boolean | boolean;
  @Output() updateChange = new EventEmitter<boolean>();

  constructor(private peopleService: PeeopleService) { }

  updatePerson(peep: Person) {
    this.peopleService.updatePerson(peep).subscribe(result => {
      this.updateChange.emit(true);      
      alert(peep.firstName + " " + peep.lastName + " has been updated.")
    }, error => { console.error(error), alert(peep.firstName + " " + peep.lastName + " was not updated. An error has occured.") }
    );
  };

}
