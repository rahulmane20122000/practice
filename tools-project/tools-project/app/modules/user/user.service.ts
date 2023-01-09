import { createPassword } from "../../utility/password";
import userSchema from "./user.schema";
import { IUser } from "./user.types";


const getUsers = () => userSchema.get();

const createUser = async (user: IUser) => {
    const password = await createPassword();

    userSchema.create({ ...user, password });
}

export default {
    getUsers,
    createUser
}