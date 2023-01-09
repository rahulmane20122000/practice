import { v4 } from "uuid";
import { createHash } from "../../utility/password";
import { ROLES } from "../roles/roles.constants";
import { IUser } from "./user.types";


class UserSchema {
    public static userDb: IUser[] = [
        { id: "1", name: "aniruddha", password: createHash("123"), role: ROLES.ADMIN }
    ];

    get() {
        return UserSchema.userDb;
    }

    create(user: IUser) {
        UserSchema.userDb.push({ ...user, id: v4() });

        return true;
    }
}

const userSchema = new UserSchema();

export default userSchema;