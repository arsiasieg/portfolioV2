import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

    
  //Get all languages
  //Return Language[]
  public getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(environment.apiUrl + '/languages');
  }

  //Get language by id
  //Return Language
  public getLanguageById(id: number): Observable<Language> {
    return this.http.get<Language>(environment.apiUrl + '/languages/' + id);
  }

  //Create language
  //Return Language
  public createLanguage(hobby: Language): Observable<Language> {
    return this.http.post<Language>(environment.apiUrl + '/languages', hobby);
  }

  //Update language by id
  //Return Language
  public updateLanguage(hobby: Language, id: number): Observable<Language> {
    return this.http.put<Language>(environment.apiUrl + '/languages/' + id, hobby);
  }

  //Delete language by id
  public deleteLanguage(id: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + '/languages/' + id);
  }
}
