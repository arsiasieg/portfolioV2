import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

   //Get all users
  //Return User[]
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users');
  }

  //Update User by id
  //Return User
  public updateUser(user: User, id: number): Observable<User> {
    return this.http.put<User>(environment.apiUrl + '/users/' + id, user);
  }
}
