import { Component } from '@angular/core';
import { AppUser } from '../_models/app-user';
import { AppUserService } from '../_services/app-user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent{
  appUser:AppUser;
  constructor(userService:AppUserService){
    this.appUser = userService.user!;
  }
}
