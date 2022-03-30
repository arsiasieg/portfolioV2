import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  //Get all projects
  public getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(environment.apiUrl + '/projects');
  }

  //Get one project by id
  public getProjectById(id: number): Observable<Project>{
    return this.http.get<Project>(environment.apiUrl + '/projects/' + id);
  }

  //Create project
  public createProject(project: FormGroup): Observable<Project>{
    return this.http.post<Project>(environment.apiUrl + '/projects', project);
  }

  //Update project
  public updateProject(project: FormGroup, id: number): Observable<Project>{
    return this.http.put<Project>(environment.apiUrl + '/projects' + id, project);
  }

  //Delete project
  public deleteProject(id: number): Observable<any>{
    return this.http.delete<any>(environment.apiUrl + '/projects/' + id);
  }
}
