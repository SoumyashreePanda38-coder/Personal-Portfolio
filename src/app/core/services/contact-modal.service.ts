import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ContactModalState {
  open: boolean;
  serviceName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactModalService {
  private modalState = new BehaviorSubject<ContactModalState>({
    open: false,
    serviceName: 'General Inquiry'
  });

  modalState$ = this.modalState.asObservable();

  open(serviceName = 'General Inquiry'): void {
    this.modalState.next({
      open: true,
      serviceName
    });
  }

  close(): void {
    this.modalState.next({
      open: false,
      serviceName: 'General Inquiry'
    });
  }
}
