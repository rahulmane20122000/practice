"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_schema_1 = require("./roles.schema");
const getById = (id) => roles_schema_1.rolesModel.findByPk(id);
exports.default = { getById };
//# sourceMappingURL=roles.repo.js.map