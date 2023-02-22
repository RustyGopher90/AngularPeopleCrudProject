import { Component, ViewChild, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PeeopleService } from '../services/peeople.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']

})
export class PeopleComponent implements OnInit {
  ngOnInit(): void {
    this.getPeople();
  }
  ngDoCheck() {
    if (this.update) {
      this.getPeople();
    }
    this.update = false;
  }
  displayedColumns: string[] = ['FirstName', 'LastName', 'DOB', 'Email', 'Delete'];

  constructor(private peopleService: PeeopleService) { }

  dataSource = new MatTableDataSource<Person>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  update = false;  

  clickedRows = new Set<Person>();

  person: Person = {
    firstName: "",
    lastName: '',
    dob: '',
    email: '',
    id:0
  };

  getPeople() {
    this.peopleService.getPeople().subscribe(result => {
      this.dataSource.data = result;
    }, error => { console.error(error), alert("Could not load People. An error has occured.") });
  }

  deletePerson(peep: Person) {
    this.peopleService.deletePerson(peep).subscribe(result => {
      alert(peep.firstName + " " + peep.lastName + " has been deleted.")
      this.getPeople();
      this.clearForm();
    }, error => { console.error(error), alert(peep.firstName + " " + peep.lastName + " was not deleted. An error has occured.") }
    );
  };

  setPerson(peep: Person) {
    this.person = {
      firstName: peep.firstName,
      lastName: peep.lastName,
      dob: peep.dob,
      email: peep.email,
      id: peep.id
      }
  };

  clearForm() {
    this.person = {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      id: 0,
    }
  }

}
