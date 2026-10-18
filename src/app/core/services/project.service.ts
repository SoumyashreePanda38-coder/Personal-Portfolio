import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProjectRequest } from '../models/project-request.model';
import { ProjectResponse } from '../models/project-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  addProject(project: ProjectRequest): Observable<ProjectResponse> {
    return this.http.post<ProjectResponse>(
      this.apiUrl,
      project
    );
  }

  getAllProjects(): Observable<ProjectResponse[]> {
    return this.http.get<ProjectResponse[]>(
      this.apiUrl
    );
  }

  getProjectById(id: number): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(
      `${this.apiUrl}/${id}`
    );
  }

  updateProject(
    id: number,
    project: ProjectRequest
  ): Observable<ProjectResponse> {
    return this.http.put<ProjectResponse>(
      `${this.apiUrl}/${id}`,
      project
    );
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}