import { Component } from '@angular/core';
import { ContactModalService } from '../../../core/services/contact-modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  constructor(private contactModalService: ContactModalService) {}

  openContactModal(serviceName = 'General Inquiry'): void {
    this.contactModalService.open(serviceName);
  }

}