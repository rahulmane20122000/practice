"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorize_1 = require("../../utility/authorize");
const password_1 = require("../../utility/password");
const user_service_1 = __importDefault(require("../user/user.service"));
const auth_responses_1 = require("./auth.responses");
const login = (credentials) => {
    const users = user_service_1.default.getUsers();
    const user = users.find(u => u.name === credentials.name &&
        (0, password_1.comparePassword)(credentials.password, u.password));
    if (!user) {
        throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
    }
    const token = (0, authorize_1.createToken)({ id: user.id, role: user.role });
    return {
        token,
        role: user.role
    };
};
exports.default = {
    login
};
//# sourceMappingURL=auth.service.js.map