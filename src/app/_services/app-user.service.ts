import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { AppUser } from '../_models/app-user';
import { firstValueFrom } from 'rxjs';
import { LoginDTO } from '../_dtos/login-dto';
import { LoginResponse } from '../_dtos/login-response';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  private url: string = `${environment.apiUrl}/Auth`;
  user?: AppUser;
  constructor(private http: HttpClient) {
    this.user = {
      id: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
      name: "Muhammad Ali",
      userName: "muhammadali0201",
      email: 'aliawan0201@gmail.com',
      occupationName: "Software Engineer",
      displayDescription: `I am a software engineer with 1+ year of industrial experience who focuses on creating both websites and
                    mobile apps. I am skilled in building web APIs and integrating them with mobile and web applications. I work with a
                    variety of modern technologies, enabling me to provide creative solutions that meet my clients' needs and improve user
                    experiences.`,
      refreshToken: '',
      password: 'string',
      social: {
        id: '27a68921-19c1-4d7c-a911-09714d4c19f4',
        linkedIn: 'https://www.linkedin.com/in/muhammad-ali-b9838b240/',
        github: 'https://github.com/MuhammadAli0201',
        location: 'https://www.google.com/maps/place/Panwan,+Nankana+Sahib,+Punjab/data=!4m2!3m1!1s0x3918990ff2b7c1a5:0xdadd62bb426b8420?sa=X&ved=1t:242&ictx=111',
        phoneNo: "0307-3401167",
        userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb'
      },
      technologies: [
        {
          id: '6d4718c8-bf55-46a7-89a6-e44d02a97cd7',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "ASP.NET Core",
        },
        {
          id: 'f023544b-1a29-4ecb-bc8d-8d2e274e06c9',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "EF Core"
        },
        {
          id: '4d2549c8-d19a-48d0-b51a-052b6b6a9257',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "Angular",
        },
        {
          id: '6d0a3c6e-34d5-4e6c-855e-81924475f251',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "MS SQL Server",
        },
        {
          id: 'd3340cf5-b67e-4b49-b02f-3129f810e4d6',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "NG-Zorro"
        },
        {
          id: 'ee3e0a3e-17e1-4e3a-bf71-cce977a24967',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "Html"
        },
        {
          id: 'db53d80d-eac6-4a3f-80d2-00d003c2c7ae',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "CSS",
        },
        {
          id: 'b14f9b83-51d7-48d8-b370-c1fba1c3a2fd',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "JavaScript"
        },
        {
          id: '5c03354b-d050-43d4-bef8-bb08a6a241f3',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "TypeScript"
        },
        {
          id: '9d070bc3-3425-433d-928b-0e86cfc50460',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "Flutter"
        },
        {
          id: 'd06756c8-46f0-4a78-b416-eaff6f77e312',
          userId: 'f82b93f9-bc7a-42b3-bf69-02e0b62be7bb',
          title: "Firebase"
        }
      ]
    };
  }

  login = async (credentials: LoginDTO): Promise<LoginResponse> => await firstValueFrom(this.http.post<LoginResponse>(`${this.url}/login`, credentials));
  signup = async (appUser: AppUser): Promise<AppUser> => await firstValueFrom(this.http.post<AppUser>(`${this.url}/signup`, appUser));
  isUserAlreadyExist = async (username: string): Promise<boolean> => await firstValueFrom(this.http.get<boolean>(`${this.url}/username/${username}`));
}
