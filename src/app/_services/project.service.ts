import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 'd3c1a5c2-1e4b-4c3b-b7f2-1c6a9c4e4c7b', 
      title: 'Frameworx',
      description: "Worked on a web application(Frameworx) for a company's business project, streamlining assets management. It enables efficient issue tracking and resolution, assigning maintenance tasks for faulty assets, and facilitates seamless handovers between engineers and inspectors for thorough quality control.",
      technologies: [
        { id: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c6', title: 'DOTNET Core', projectId: 'd3c1a5c2-1e4b-4c3b-b7f2-1c6a9c4e4c7b' },
        { id: 'f7e2d5b8-3b0b-4c4a-b9b6-0b1c9f2e8c3a', title: 'EF Core', projectId: 'd3c1a5c2-1e4b-4c3b-b7f2-1c6a9c4e4c7b' },
        { id: 'a3f4e5b1-2c3d-4e4e-b9b6-0b1c9f2e8c3b', title: 'JS', projectId: 'd3c1a5c2-1e4b-4c3b-b7f2-1c6a9c4e4c7b' },
        { id: 'e5f6d7a8-4b4c-4d4d-b8b9-1c6a9c4e4c7c', title: 'jQuery', projectId: 'd3c1a5c2-1e4b-4c3b-b7f2-1c6a9c4e4c7b' },
        { id: 'f7e2d5b8-3b0b-4c4a-b9b6-0b1c9f2e8c3d', title: 'MS SQL Server', projectId: 'd3c1a5c2-1e4b-4c3b-b7f2-1c6a9c4e4c7b' }
      ],
      images: [{ id: 'd3c1a5c2-1e4b-4c3b-b7f2-1c6a9c4e4c7e', path: 'images/frameworx.png' }],
      link: 'https://uat.frameworx.pro/',
      userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb' 
    },
    {
      id: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c6f', 
      title: 'HRMS',
      description: `Designed and developed a Leave Management Module for Stallions’ HR Portal, empowering HR to effortlessly manage employee and public holidays, streamlining leave management for a seamless HR experience.`,
      technologies: [
        { id: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c70', title: 'DOTNET Core', projectId: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c6f' },
        { id: 'f7e2d5b8-3b0b-4c4a-b9b6-0b1c9f2e8c71', title: 'Linq2db', projectId: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6 e2-ef12-4f36-bc72-3b5e5e6c6c6f' },
        { id: 'a3f4e5b1-2c3d-4e4e-b9b6-0b1c9f2e8c3b', title: 'Angular', projectId: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c6f' },
        { id: 'e5f6d7a8-4b4c-4d4d-b8b9-1c6a9c4e4c7c', title: 'NG-Zorro', projectId: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c6f' },
        { id: 'f7e2d5b8-3b0b-4c4a-b9b6-0b1c9f2e8c3d', title: 'MS SQL Server', projectId: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c6f' }
      ],
      images: [{ id: 'c0b4e3e2-ef12-4f36-bc72-3b5e5e6c6c6g', path: 'images/hrms.png' }],
      link: 'https://hrms.stallions.tech/',
      userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb'
    },
    {
      id: 'd06756c8-46f0-4a78-b416-eaff6f77e312', 
      title: 'Service Near You',
      description: "Created a mobile app providing daily essential services like cleaning, painting, and repairing at your doorstep to simplify people's lives. Added Google Maps to help users to get worker available near them. Set up Cloud Messaging notifications to keep users updated about their service requests. Added communication module, so users can communicate with eachother. Also, added rating system, helping users to identify correct worker for their problem.",
      technologies: [
        { id: '9d070bc3-3425-433d-928b-0e86cfc50460', title: 'Flutter', projectId: 'd06756c8-46f0-4a78-b416-eaff6f77e312' },
        { id: 'd3340cf5-b67e-4b49-b02f-3129f810e4d6', title: 'Firebase', projectId: 'd06756c8-46f0-4a78-b416-eaff6f77e312' },
        { id: 'ee3e0a3e-17e1-4e3a-bf71-cce977a24967', title: 'Google Maps', projectId: 'd06756c8-46f0-4a78-b416-eaff6f77e312' },
        { id: 'b14f9b83-51d7-48d8-b370-c1fba1c3a2fd', title: 'GetX', projectId: 'd06756c8-46f0-4a78-b416-eaff6f77e312' },
        { id: '5c03354b-d050-43d4-bef8-bb08a6a241f3', title: 'Notifications', projectId: 'd06756c8-46f0-4a78-b416-eaff6f77e312' }
      ],
      images: [{ id: 'd06756c8-46f0-4a78-b416-eaff6f77e313', path: 'images/Service-Near-You.png' }],
      userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb'
    },
    {
      id: '4d2549c8-d19a-48d0-b51a-052b6b6a9257', 
      title: 'LMS',
      description: "Designed and developed a robust LMS to streamline the management of teachers, students, courses, classes, and events. The system allows admins to assign courses and classes to teachers and students, as well as manage teacher assignments. Teachers can track student attendance, create and grade assignments, design quizzes, and send notifications to students. Students can attempt quizzes, submit assignments, monitor their attendance, and view academic results, ensuring a seamless and efficient learning experience for all users.",
      technologies: [
        { id: '9d070bc3-3425-433d-928b-0e86cfc50460', title: 'Flutter', projectId: '4d2549c8-d19a-48d0-b51a-052b6b6a9257' },
        { id: 'd3340cf5-b67e-4b49-b02f-3129f810e4d6', title: 'Firebase', projectId: '4d2549c8-d19a-48d0-b51a-052b6b6a9257' },
        { id: 'ee3e0a3e-17e1-4e3a-bf71-cce977a24967', title: 'GetX', projectId: '4d2549c8-d19a-48d0-b51a-052b6b6a9257' },
        { id: 'b14f9b83-51d7-48d8-b370-c1fba1c3a2fd', title: 'Notifications', projectId: '4d2549c8-d19a-48d0-b51a-052b6b6a9257' }
      ],
      images: [{ id: '4d2549c8-d19a-48d0-b51a-052b6b6a9258', path: 'images/LMS-Portal.png' }],
      userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb' 
    },
    {
      id: '6d4718c8-bf55-46a7-89a6-e44d02a97cd7',
      title: 'Elena App',
      description: "Developed a black-and-white themed user interface tailored for older adults, designed to bridge the gap between loved ones regardless of distance or technological expertise. The intuitive UI features automatic video calls, the freedom to connect at any time, and secure access granted exclusively to authorized individuals, ensuring a simple and secure way to stay connected.",
      technologies: [
        { id: '9d070bc3-3425-433d-928b-0e86cfc50460', title: 'Flutter', projectId: '6d4718c8-bf55-46a7-89a6-e44d02a97cd7' },
        { id: 'd3340cf5-b67e-4b49-b02f-3129f810e4d6', title: 'Firebase', projectId: '6d4718c8-bf55-46a7-89a6-e44d02a97cd7' },
        { id: 'ee3e0a3e-17e1-4e3a-bf71-cce977a24967', title: 'Bloq', projectId: '6d4718c8-bf55-46a7-89a6-e44d02a97cd7' }
      ],
      images: [{ id: '6d4718c8-bf55-46a7-89a6-e44d02a97cd8', path: 'images/elena-app.png' }],
      link: 'https://www.elena-app.com/',
      userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb' 
    }
  ];
  constructor() { }

  getUserProjects = () => this.projects;
}