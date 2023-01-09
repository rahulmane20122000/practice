export type RoleName = "USER" | "ADMIN" 


export class Role {
  constructor(public id: string, public name: RoleName) {}
}


export interface IRole{
  roleName:string;
}