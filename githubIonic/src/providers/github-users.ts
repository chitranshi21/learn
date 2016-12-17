import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/users';



/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {
	githubApiUrl = 'https://api.github.com';


  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }

  load(): Observable<User[]> {
  	return this.http.get(`${this.githubApiUrl}/users`)
  			.map(res=> <User[]>res.json());
  }

  loadDetails(login:string): Observable<User>{
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
                .map(res => <User>(res.json()));
  } 

  searchUsers(searchParams: string): Observable<User[]>{
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParams}`)
            .map(res => <User[]>(res.json().items));
  }
}
