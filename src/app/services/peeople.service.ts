import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PeeopleService {
  apiUrl = '/api/people';
  constructor(private httpClient: HttpClient) { }

  getPeople() {
    return this.httpClient.get<Person[]>(this.apiUrl);
  }
 
  deletePerson(person: Person): Observable<Person> {
    console.log(person.id)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: person,
    };
    return this.httpClient.delete<Person>(this.apiUrl + '/' + person.id, httpOptions);
  }

  updatePerson(peep: Person): Observable<Person> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.put<Person>(this.apiUrl + '/' +peep.id, peep, httpOptions);
  }

  addPerson(peep: Person): Observable<Person> {
    console.log(peep.firstName);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.post<Person>(this.apiUrl, peep, httpOptions);
  }
}
