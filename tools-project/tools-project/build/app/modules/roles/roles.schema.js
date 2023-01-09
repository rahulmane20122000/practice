"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_constants_1 = require("./roles.constants");
const roles_types_1 = require("./roles.types");
class RoleSchema {
    get() {
        return RoleSchema.roleDb;
    }
    getById(id) {
        return RoleSchema.roleDb.find(r => r.id === id);
    }
}
RoleSchema.roleDb = [
    new roles_types_1.Role(roles_constants_1.ROLES.ADMIN, "ADMIN"),
    new roles_types_1.Role(roles_constants_1.ROLES.ISSUER, "ISSUER"),
    new roles_types_1.Role(roles_constants_1.ROLES.OPERATOR, "OPERATOR"),
];
const roleSchema = new RoleSchema();
exports.default = roleSchema;
//# sourceMappingURL=roles.schema.js.map