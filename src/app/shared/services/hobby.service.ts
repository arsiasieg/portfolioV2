import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hobby } from '../models/hobby.model';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private http: HttpClient) { }

  
   //Get all hobbies
  //Return Hobby[]
  public getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(environment.apiUrl + '/hobbies');
  }

  //Get hobby by id
  //Return Hobby
  public getHobbyById(id: number): Observable<Hobby> {
    return this.http.get<Hobby>(environment.apiUrl + '/hobbies/' + id);
  }

  //Create hobby
  //Return Hobby
  public createHobby(hobby: Hobby): Observable<Hobby> {
    return this.http.post<Hobby>(environment.apiUrl + '/hobbies', hobby);
  }

  //Update hobby by id
  //Return Hobby
  public updateHobby(hobby: Hobby, id: number): Observable<Hobby> {
    return this.http.put<Hobby>(environment.apiUrl + '/hobbies/' + id, hobby);
  }

  //Delete hobby by id
  public deleteHobby(id: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + '/hobbies/' + id);
  }
}
