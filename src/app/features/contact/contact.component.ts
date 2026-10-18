import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactRequest } from '../../core/models/contact-request.model';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() isOpen: boolean = false;

  @Output() closed = new EventEmitter<void>();

  contactForm: FormGroup;

  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {

    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],

      serviceRequested: ['', Validators.required],

      projectDetails: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get phone() {
    return this.contactForm.get('phone')!;
  }

  get serviceRequested() {
    return this.contactForm.get('serviceRequested')!;
  }

  get projectDetails() {
    return this.contactForm.get('projectDetails')!;
  }

  submitForm(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const contactRequest: ContactRequest = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      serviceRequested: this.contactForm.value.serviceRequested,
      projectDetails: this.contactForm.value.projectDetails
    };

    this.contactService.submitContact(contactRequest).subscribe({

      next: () => {

        this.isSubmitting = false;
        this.submitSuccess = true;

        this.contactForm.reset();

        setTimeout(() => {
          this.closeModal();
        }, 2000);
      },

      error: () => {

        this.isSubmitting = false;
        this.submitError = true;
      }
    });
  }

  closeModal(): void {

    if (this.isSubmitting) {
      return;
    }

    this.contactForm.reset();
    this.submitSuccess = false;
    this.submitError = false;

    this.closed.emit();
  }

  preventClose(event: MouseEvent): void {
    event.stopPropagation();
  }
}