import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ServiceRequest } from '../models/service-request.model';
import { ServiceResponse } from '../models/service-response.model';
import { ServicePackageRequest } from '../models/service-package-request.model';
import { ServicePackageResponse } from '../models/service-package-response.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  addService(service: ServiceRequest): Observable<ServiceResponse> {
    return this.http.post<ServiceResponse>(
      this.apiUrl,
      service
    );
  }

  updateService(
    id: number,
    service: ServiceRequest
  ): Observable<ServiceResponse> {
    return this.http.put<ServiceResponse>(
      `${this.apiUrl}/${id}`,
      service
    );
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }

  updatePackagePricing(
    packageId: number,
    servicePackage: ServicePackageRequest
  ): Observable<ServicePackageResponse> {
    return this.http.put<ServicePackageResponse>(
      `${this.apiUrl}/packages/${packageId}/pricing`,
      servicePackage
    );
  }
}