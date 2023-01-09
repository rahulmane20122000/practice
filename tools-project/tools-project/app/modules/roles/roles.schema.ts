import { ROLES } from "./roles.constants";
import { Role } from "./roles.types";


class RoleSchema {
    public static roleDb: Role[] = [
        new Role(ROLES.ADMIN, "ADMIN"),
        new Role(ROLES.ISSUER, "ISSUER"),
        new Role(ROLES.OPERATOR, "OPERATOR"),
    ];

    get() {
        return RoleSchema.roleDb;
    }

    getById(id: string) {
        return RoleSchema.roleDb.find(r => r.id === id);
    }
}

const roleSchema = new RoleSchema();

export default roleSchema;