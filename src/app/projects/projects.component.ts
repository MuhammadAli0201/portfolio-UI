import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Project } from '../_models/project';
import { ProjectService } from '../_services/project.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent implements OnInit {
  screenWidth!: number;
  projects:Project[] = [];

  //LIFE CYCLE
  constructor(private projectService: ProjectService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.projects = projectService.getUserProjects();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  shouldInvert(index: number): boolean {
    return this.screenWidth > 786 ? index % 2 !== 0 : false;
  }
}