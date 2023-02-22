import { Component } from '@angular/core';
import { Person } from '../models/person';
import { PeeopleService } from '../services/peeople.service'
import { Router } from "@angular/router"



@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  newPerson: Person = {
    firstName: '',
    lastName: '',
    dob: '1968-11-16',
    email: '',
    id: 0
  };

  constructor(private peopleService: PeeopleService, private router: Router) { }

  addPerson(peep: Person) {
    this.peopleService.addPerson(peep).subscribe(result => {
      console.log(result.toString());
      alert(peep.firstName + " " + peep.lastName + " has been added.")
      this.router.navigate([""])
    }, error => { console.error(error), alert(peep.firstName + " " + peep.lastName + " was not added. An error has occured.") }
    );
  };

}
