import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { MatterTs } from '../_matter/matter-ts';
import { Technology } from '../_models/technology';
import { Utility } from '../_utility/utility';
import { AppUserService } from '../_services/app-user.service';
import { AppUser } from '../_models/app-user';
import { GenericColor } from '../_models/generic-color';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  @ViewChild('matterContainer', { static: true }) matterContainer!: ElementRef;
  @ViewChild('titleTag', { static: true }) titleCursor!: ElementRef;
  @ViewChild('occupationTag', { static: true }) occupationCursor!: ElementRef;
  colors: string[] = ["purple", "darkBlue", "red", "red", "blue", "orange", "blue", "blue", "yellow", "blue", "blue", "orange"];
  techs: GenericColor<Technology>[] = [];
  appUser: AppUser;
  intro = signal("");
  occupation = signal("");

  //LIFE CYCLES
  constructor(private userService: AppUserService) {
    this.appUser = this.userService.user!;
    this.constructorInit();
  }

  async ngOnInit(): Promise<void> {
    await this.pageInit();
  }

  //UI LOGIC
  constructorInit() {
    // let fullName = this.appUser.name;
    // this.firstName = fullName.substring(0, this.appUser.name.indexOf(" "));
    // this.lastName = fullName.substring(this.appUser.name.indexOf(" "), fullName.length);
  }

  async pageInit(): Promise<void> {
    this.techs = this.appUser.technologies?.map((val) => <GenericColor<Technology>>{ obj: val, color: Utility.listRandom(this.colors) })!;
    let color = '#121212';
    MatterTs.gyro(this.matterContainer.nativeElement, color);
    await this.typeIntro();
  }

  async typeIntro(): Promise<void> {
    let typeSpeed = 110;
    let intro = ["Hi. ", "I'm " + this.appUser.name];

    //Title Cursor
    let titleCursorClasses = this.titleCursor.nativeElement.classList;
    titleCursorClasses.add('cursor');
    for (let i = 0; i < intro.length; i++) {
      for (let j = 0; j < intro[i].length; j++) {
        this.intro.set(this.intro() + intro[i][j]);
        await new Promise(resolve => setTimeout(resolve, typeSpeed));
      }

      for (let j = intro[i].length; j >= 0 && i == 0; j--) {
        this.intro.set(this.intro().substring(j, -1));
        await new Promise(resolve => setTimeout(resolve, typeSpeed));
      }
    }
    this.intro.set(this.intro() + '.');
    titleCursorClasses.remove('cursor');
    titleCursorClasses.add('hidden');

    // Occupation Cursor
    let occupationClasses = this.occupationCursor.nativeElement.classList;
    occupationClasses.remove('hidden');
    occupationClasses.add('cursor');

    let occupationName = this.appUser.occupationName;
    for (let j = 0; j < occupationName!.length; j++) {
      this.occupation.set(this.occupation() + occupationName![j]);
      await new Promise(resolve => setTimeout(resolve, typeSpeed));
    }

    occupationClasses.remove('cursor');
    occupationClasses.add('hidden');
  }

  scrollTo100vh() {
    const viewportHeight = window.innerHeight;
    window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
  }
}
