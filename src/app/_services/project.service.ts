import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    {
      id:'1',
      title: 'Frameworx',
      description: "Worked on a web application(Frameworx) for a company's business project, streamlining assets management. It enables efficient issue tracking and resolution, assigning maintenance tasks for faulty assets, and facilitates seamless handovers between engineers and inspectors for thorough quality control.",
      technologies: [{ id: '1', title: 'DOTNET Core', projectId: '1' }, { id: '1', title: 'EF Core', projectId: '1' },  { id: '1', title: 'JS', projectId: '1' }, { id: '1', title: 'jQuery', projectId: '1' }, { id: '1', title: 'MS SQL Server', projectId: '1' }],
      images: [{ id: '1', path: 'images/frameworx.png' }],
      link: 'www.google.com',
      userId: '1'
    },
    {
      id:'3',
      title: 'HRMS',
      description: "Designed and developed a Leave Management Module for Stallions’ HR Portal, empowering HR to effortlessly manage employee and public holidays, streamlining leave management for a seamless HR experience.",
      technologies: [{ id: '1', title: 'DOTNET Core', projectId: '1' }, { id: '1', title: 'Linq2db', projectId: '1' }, { id: '1', title: 'Angular', projectId: '1' }, { id: '1', title: 'NG-Zorro', projectId: '1' }, { id: '1', title: 'MS SQL Server', projectId: '1' }],
      images: [{ id: '1', path: 'images/hrms.png' }],
      link: 'www.google.com',
      userId: '1'
    },
    {
      id:'2',
      title: 'Service Near You',
      description: "Created a mobile app providing daily essential services like cleaning, painting, and repairing at your doorstep to simplify people's lives. Added Google Maps to help users to get worker available near them. Set up Cloud Messaging notifications to keep users updated about their service requests. Added communication module, so users can communicate with eachother. Also, added rating system, helping users to identify correct worker for their problem.",
      technologies: [{ id: '1', title: 'Flutter', projectId: '1' }, { id: '1', title: 'Firebase', projectId: '1' }, { id: '1', title: 'Google Maps', projectId: '1' }, { id:'2', title: 'GetX', 'projectId':'1' }, { id:'2', title: 'Notifications', 'projectId':'1' }],
      images: [{ id:"1", path: 'images/Service-Near-You.png' }],
      link: 'www.google.com',
      userId:"2"
    },
    {
      id: '4',
      title: 'LMS',
      description: "Designed and developed a robust LMS to streamline the management of teachers, students, courses, classes, and events. The system allows admins to assign courses and classes to teachers and students, as well as manage teacher assignments. Teachers can track student attendance, create and grade assignments, design quizzes, and send notifications to students. Students can attempt quizzes, submit assignments, monitor their attendance, and view academic results, ensuring a seamless and efficient learning experience for all users.",
      technologies: [{ id:'1', title: 'Flutter', projectId:'1' }, { id:'2', title: 'Firebase', 'projectId':'1' }, { id:'2', title: 'Notifications', 'projectId':'1' }, { id:'2', title: 'GetX', 'projectId':'1' }],
      images: [{ id:'1', path: 'images/LMS-Portal.png' }],
      link: 'www.google.com',
      userId:"1"
    },    
    {
      id:'2',
      title: 'Elena App',
      description: "Developed a black-and-white themed user interface tailored for older adults, designed to bridge the gap between loved ones regardless of distance or technological expertise. The intuitive UI features automatic video calls, the freedom to connect at any time, and secure access granted exclusively to authorized individuals, ensuring a simple and secure way to stay connected.",
      technologies: [{ id: '1', title: 'Flutter', projectId: '1' }, { id: '1', title: 'Firebase', projectId: '1' }, { id:'2', title: 'Bloq', 'projectId':'1' }],
      images: [{ id:"1", path: 'images/elena-app.png' }],
      link: 'www.google.com',
      userId:"2"
    },
  ];
  constructor() { }

  getUserProjects = () => this.projects;
}
