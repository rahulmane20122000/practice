import { ROLES } from "../roles/roles.constants";


// type RoleIdType =  ROLES.ADMIN | ROLES.ISSUER | ROLES.OPERATOR;
export interface IUser {
    id: string;
    name: string;
    password: string;
    role: string;
}