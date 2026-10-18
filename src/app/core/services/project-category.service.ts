import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProjectCategoryRequest } from '../models/project-category-request.model';
import { ProjectCategoryResponse } from '../models/project-category-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectCategoryService {

  private apiUrl = `${environment.apiUrl}/project-categories`;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<ProjectCategoryResponse[]> {
    return this.http.get<ProjectCategoryResponse[]>(this.apiUrl);
  }

  addCategory(
    category: ProjectCategoryRequest
  ): Observable<ProjectCategoryResponse> {

    return this.http.post<ProjectCategoryResponse>(
      this.apiUrl,
      category
    );
  }

  deleteCategory(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}