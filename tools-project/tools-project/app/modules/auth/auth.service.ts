import { createToken } from "../../utility/authorize";
import { comparePassword } from "../../utility/password";
import userService from "../user/user.service";
import { AUTH_ERRORS } from "./auth.responses";
import { ICredentials } from "./auth.types";


const login = (credentials: ICredentials) => {
    const users = userService.getUsers();

    const user = users.find(
        u => 
            u.name === credentials.name && 
            comparePassword(credentials.password, u.password)
    );

    if(!user) {
       throw AUTH_ERRORS.NOT_FOUND
    }

    const token = createToken({ id: user.id, role: user.role });

    return {
        token,
        role: user.role
    };
}

export default {
    login
}