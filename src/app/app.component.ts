import { Component } from '@angular/core';
import { ContactModalService } from './core/services/contact-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  isContactModalOpen = false;
  selectedService = 'General Inquiry';
  fullName = '';
  phone = '';
  email = '';
  request = '';

  constructor(private contactModalService: ContactModalService) {
    this.contactModalService.modalState$.subscribe((state: { open: boolean; serviceName?: string }) => {
      this.isContactModalOpen = state.open;
      this.selectedService = state.serviceName || 'General Inquiry';
    });
  }

  closeContactModal(): void {
    this.contactModalService.close();
  }

  submitContactForm(): void {
    const requestData = {
      fullName: this.fullName.trim(),
      phone: this.phone.trim(),
      email: this.email.trim(),
      service: this.selectedService,
      request: this.request.trim(),
      submittedAt: new Date().toISOString()
    };

    if (!requestData.fullName || !requestData.phone || !requestData.email || !requestData.request) {
      alert('Please fill in your name, phone number, email and request before submitting.');
      return;
    }

    const existingRequests = JSON.parse(localStorage.getItem('portfolio-contact-requests') || '[]');
    existingRequests.push(requestData);
    localStorage.setItem('portfolio-contact-requests', JSON.stringify(existingRequests));

    console.log('Contact request submitted:', requestData);
    alert('Thank you! Your request has been received. I will contact you soon.');

    this.fullName = '';
    this.phone = '';
    this.email = '';
    this.request = '';
    this.closeContactModal();
  }
}