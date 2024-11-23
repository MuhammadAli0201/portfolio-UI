import { Component, Input } from '@angular/core';
import { AppUserService } from '../_services/app-user.service';
import { Social } from '../_models/social';
import { AppUser } from '../_models/app-user';
import { EmailService } from '../_services/email.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css'
})
export class SocialsComponent {
  @Input() class: string = 'white-color';
  appUser: AppUser;
  constructor(appUserService: AppUserService, private emailService:EmailService) {
    this.appUser = appUserService.user!;
  }

  get linkedIn(): string { return this.appUser.social.linkedIn!; };
  get gmail(): string { 
    return this.emailService.getOpenEmailUrl(this.appUser.email!); 
  };
  get github(): string { return this.appUser.social.github!; };
  get location(): string { return this.appUser.social.location!; };
}
