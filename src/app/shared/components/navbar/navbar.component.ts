import { Component } from '@angular/core';
import { ContactModalService } from '../../../core/services/contact-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpen = false;

  constructor(private contactModalService: ContactModalService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    this.closeMenu();
  }

  openContactModal(serviceName = 'General Inquiry'): void {
    this.contactModalService.open(serviceName);
    this.closeMenu();
  }
}