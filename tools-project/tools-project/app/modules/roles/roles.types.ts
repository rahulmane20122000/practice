export type RoleName = "ISSUER" | "OPERATOR" | "ADMIN";

export class Role {
    constructor (
        public id: string,
        public name: RoleName
    ) {}
}