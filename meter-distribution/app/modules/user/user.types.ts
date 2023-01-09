export interface IUser {
    name: string;
    year?: string;
    track?: string;
    email: string;
    password: string;
    isAccepted?: boolean;
    role?: string;
}


export interface IUserId{
    id:string;
}