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
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.createUser(userDetails);
        return response;
    }
    catch (error) {
        throw error;
    }
});
const acceptAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.acceptUser(id);
        return response;
    }
    catch (error) {
        throw error;
    }
});
exports.default = { acceptAccount, createUser };
// const login = async (loginCredentials: ILogin) => {
//     try {
//         const user = await userService.getUser(loginCredentials);
//         if (user) {
//             const role = await rolesService.getRole(user.role);
//             const token = createToken({ id: user._id, name: user.name, role: user.role });
//             return { role: role?.name, token: token };
//         }
//         throw authConstants.INVALID_DETAILS
//     } catch (error) {
//         throw error
//         // throw authConstants.FAILED;
//     }
// }
// const createUser = async (userDetails: IUser) => {
//     try {
//         const hashedPassword = await createHash(userDetails.password);
//         const normalPassword = userDetails.password
//         userDetails.password = hashedPassword;
//         const response = await userService.createUser(userDetails);
//         await sendEmail(userDetails.email, "ACCOUNT CREATED", `
//             Hi, ${userDetails.name},
//             Login Details,
//             username:- ${userDetails.username},
//             password:- ${normalPassword}
//         `)
//         return authConstants.USER_CREATED;
//     } catch (error) {
//         throw error
//         // throw authConstants.FAILED;
//     }
// }
// const resetPassword = async (userId: string, newPassword: string, oldPassword?: string) => {
//     try {
//         newPassword = await createHash(newPassword);
//         await userService.updatePassword(userId, newPassword, oldPassword);
//         return authConstants.PASSWORD_UPDATED;
//     } catch (error) {
//         throw authConstants.INVALID_PASSWORD;
//     }
// }
// const forgotPassword = async (email: string) => {
//     try {
//         const userDetails = await userService.getUserByMail(email);
//         const token = createToken(userDetails._id.toString());
//         const { URL } = process.env;
//         const link = `${URL}/${token}`;
//         await sendEmail(userDetails.email, "FORGOT PASSWORD", `
//         Hi, ${userDetails.name},
//         Your password reset link is here ${link}
//     `)
//         return authConstants.PASSWORD_LINK;
//     } catch (error) {
//       console.log(error);
//         throw authConstants.INVALID_EMAIL;
//     }
// }
// export default {
//     login,
//     createUser,
//     resetPassword,
//     forgotPassword
// }
//# sourceMappingURL=auth.service.js.map