import { Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { MatterTs } from '../_matter/matter-ts';
import { Technology } from '../_models/technology';
import { Utility } from '../_utility/utility';
import { AppUserService } from '../_services/app-user.service';
import { AppUser } from '../_models/app-user';
import { GenericColor } from '../_models/generic-color';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AboutTechnologyComponent } from './about-technology/about-technology.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  @ViewChild('matterContainer', { static: true }) matterContainer!: ElementRef;
  @ViewChild('titleTag', { static: true }) titleCursor!: ElementRef;
  @ViewChild('occupationTag', { static: true }) occupationCursor!: ElementRef;
  @ViewChild('aboutBtn', { static: true }) aboutBtn!: ElementRef;
  @ViewChild('scrollToTopBtn', { static: true }) scrollToTopBtn!: ElementRef;
  appUser: AppUser;
  intro = signal("");
  occupation = signal("");

  //LIFE CYCLES
  constructor(private userService: AppUserService, private modal: NzModalService) {
    this.appUser = this.userService.user!;
  }

  async ngOnInit(): Promise<void> {
    await this.pageInit();
  }

  //UI LOGIC
  async pageInit(): Promise<void> {
    let color = '#121212';
    MatterTs.gyro(this.matterContainer.nativeElement, color);
    await this.typeIntro();
  }

  async typeIntro(): Promise<void> {
    let typeSpeed = 100;
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
    let aboutBtnClasses = this.aboutBtn.nativeElement.classList;
    occupationClasses.remove('hidden');
    occupationClasses.add('cursor');

    let occupationName = this.appUser.occupationName;
    for (let j = 0; j < occupationName!.length; j++) {
      this.occupation.set(this.occupation() + occupationName![j]);
      await new Promise(resolve => setTimeout(resolve, typeSpeed));
    }

    occupationClasses.remove('cursor');
    aboutBtnClasses.remove('hidden');
    occupationClasses.add('hidden');
  }

  createAboutTechComponent(): void {
    const modal = this.modal.create({
      nzTitle: '',
      nzContent: AboutTechnologyComponent,
      nzWidth: "80%",
      nzStyle: { top: '15px' },
      nzFooter: null,
    });
    const instance = modal.getContentComponent();
    instance.technologies = this.appUser.technologies!;
    instance.description = this.appUser.displayDescription!;
  }

  scrollTo100vh() {
    const viewportHeight = window.innerHeight;
    window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (this.scrollToTopBtn) {
      const scrollToTopBtnClasses = this.scrollToTopBtn.nativeElement.classList;

      if (Math.ceil(scrolled) >= Math.ceil(viewportHeight)) {
        scrollToTopBtnClasses.remove('hidden');
      } else if (scrolled == 0) {
        scrollToTopBtnClasses.add('hidden');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
