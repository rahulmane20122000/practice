"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../user/user.service"));
const password_1 = require("../../utility/password");
const authorize_1 = require("../../utility/authorize");
const email_1 = require("../../utility/email");
const auth_constants_1 = require("./auth.constants");
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        userDetails.password = yield (0, password_1.createHash)(userDetails.password);
        const response = yield user_service_1.default.createUser(userDetails);
        return response;
    }
    catch (error) {
        throw error;
    }
});
const deleteAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.deleteUser(id);
        return response;
    }
    catch (error) {
        throw error;
    }
});
const login = (loginDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.login(loginDetails);
        return response;
    }
    catch (error) {
        throw error;
    }
});
const forgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDetails = yield user_service_1.default.getUserByMail(email);
        console.log(userDetails.id);
        const token = (0, authorize_1.createToken)({ id: userDetails.id }, process.env.JWT_SECRET || "", '1d');
        const { URL } = process.env;
        const link = `${URL}/${token}`;
        yield (0, email_1.sendEmail)(userDetails.email, "FORGOT PASSWORD", `
            Hi, ${userDetails.name},
            Your password reset link is here ${link}
        `);
        return auth_constants_1.authConstants.PASSWORD_LINK;
    }
    catch (error) {
        throw error;
    }
});
const resetPassword = (userId, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        newPassword = yield (0, password_1.createHash)(newPassword);
        const response = yield user_service_1.default.updatePassword(userId, newPassword);
        return response;
    }
    catch (error) {
        throw error;
    }
});
exports.default = { createUser, deleteAccount, login, forgotPassword, resetPassword };
//# sourceMappingURL=auth.service.js.map