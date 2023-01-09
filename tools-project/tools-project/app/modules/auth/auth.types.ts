export interface ICredentials {
    name: string;
    password: string;
}

export class AuthResponses {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}