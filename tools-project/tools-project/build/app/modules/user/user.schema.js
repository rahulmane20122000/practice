"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const password_1 = require("../../utility/password");
const roles_constants_1 = require("../roles/roles.constants");
class UserSchema {
    get() {
        return UserSchema.userDb;
    }
    create(user) {
        UserSchema.userDb.push(Object.assign(Object.assign({}, user), { id: (0, uuid_1.v4)() }));
        return true;
    }
}
UserSchema.userDb = [
    { id: "1", name: "aniruddha", password: (0, password_1.createHash)("123"), role: roles_constants_1.ROLES.ADMIN }
];
const userSchema = new UserSchema();
exports.default = userSchema;
//# sourceMappingURL=user.schema.js.map