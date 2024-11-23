import { AppUser } from "./app-user";

export interface Social {
    id: string,
    linkedIn?: string,
    github?:string,
    location?: string,
    phoneNo?: string,
    userId: string,
    user?: AppUser
}