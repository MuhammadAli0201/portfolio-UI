import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../_services/email.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AppUser } from '../_models/app-user';
import { AppUserService } from '../_services/app-user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  appUser: AppUser;
  isLoading: boolean = false;

  //LIFE CYCLE
  constructor(private fb: FormBuilder, private emailService: EmailService, private modal: NzModalService, appUserService: AppUserService) {
    this.contactForm = this.fb.group({
      user_name: ['', Validators.required],
      user_message: ['', Validators.required],
      user_subject: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
    });
    this.appUser = appUserService.user!;
  }

  validateForm(): boolean {
    let isValid = true;
    for (const val of Object.values(this.contactForm.controls)) {
      if (val.invalid) {
        val.markAllAsTouched();
        val.updateValueAndValidity({ onlySelf: true });
        isValid=false;
      }
    }
    return isValid;
  }
  

  //LOGIC
  async sendEmail(): Promise<void> {
    if (!this.validateForm()) return;

    this.isLoading=true;
    let result = await this.emailService.send(this.contactForm.value);
    this.isLoading=false;
    if (result) {
      this.contactForm.reset();
      this.modal.success({
        nzTitle: "Yes! Email Sent Successfully.",
        nzContent: "Thank you for your time! We'll be in touch with you shortly.",
        nzCentered: true
      });
    }
    else {
      this.modal.success({
        nzTitle: "OOPs! Something went wrong.",
        nzContent: `Sorry for inconvenience. Please mail at '${this.appUser.email}'. Thanks.`,
        nzCentered: true
      });
    }
  }
}
