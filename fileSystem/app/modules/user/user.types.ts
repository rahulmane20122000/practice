export interface IUser {
    name: string;
    email: string;
    password: string;
    roleId?: string;
    assignedCustomers:[string];
}


export interface IUserId{
    id:string;
}