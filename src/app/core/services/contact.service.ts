import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ContactRequest } from '../models/contact-request.model';
import { ContactResponse } from '../models/contact-response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  submitContact(contact: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(
      this.apiUrl,
      contact
    );
  }
}