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
const user_constants_1 = require("./user.constants");
const user_repo_1 = __importDefault(require("./user.repo"));
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.add(userDetails);
        return user_constants_1.userConstants.USER_ADDED;
    }
    catch (error) {
        throw error;
    }
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getAll();
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const getAcceptedUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getAccepted();
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.deleteOne(id);
        return user_constants_1.userConstants.USER_DELETED;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const updateUser = (id, updatedUserDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.updateOne(id, updatedUserDetails);
        return user_constants_1.userConstants.USER_UPDATED;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const acceptUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.updateStatus(id);
        return user_constants_1.userConstants.USER_UPDATED;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
exports.default = { createUser, getAllUsers, getAcceptedUsers, deleteUser, updateUser, acceptUser };
// const getAllUsers = async () => {
//     try {
//         return await userRepo.getAll();
//     } catch (error) {
//         throw userConstants.NOT_FOUND
//     }
// }
// const getUser = async (credentials: ILogin) => {
//     try {
//         const user = await userRepo.getByField({ username: credentials.username });
//         const isMatched = await comparePassword(credentials.password, user?.password || '');
//         console.log(isMatched);
//         if (user && isMatched) return user;
//         throw userConstants.NOT_FOUND;
//     } catch (error) {
//         throw userConstants.NOT_FOUND;
//     }
// }
// const getUserByMail = async (email: string) => {
//     try {
//         const user = await userRepo.getByField({ email });
//     if (user) return user;
//     throw userConstants.NOT_FOUND;
//     } catch (error) {
//         throw userConstants.NOT_FOUND;  
//     }
// }
// const createUser = async (userDetails: IUser) => {
//     try {
//         await userRepo.create(userDetails);
//         return userConstants.USER_ADDED;
//     } catch (error) {
//         throw userConstants.UNIQUE_EMAIL;
//     }
// };
// const updateUser = async (id: string, updatedUserDetails: IUser) => {
//     try {
//         await userRepo.update(id, updatedUserDetails);
//         return userConstants.USER_UPDATED;
//     } catch (error) {
//         throw userConstants.NOT_FOUND;
//     }
// };
// const deleteUser = async (id: string) => {
//     try {
//         await userRepo.deleteOne(id);
//         return userConstants.USER_DELETED;
//     } catch (error) {
//         throw userConstants.NOT_FOUND;
//     }
// }
// const updatePassword = async (id: string, newPassword: string, oldPassword?: string) => {
//     try {
//         const user = await userRepo.getByField({ id });
//         let isMatched = true;
//         if (oldPassword) isMatched = await comparePassword(oldPassword, user?.password || '');
//         if (isMatched && user) {
//         await userRepo.updatePassword(id,newPassword);
//         return userConstants.PASSWORD_CHANGED;
//     }
//     } catch (error) {
//         throw userConstants.NOT_FOUND;
//     }
// }
// export default {
//     getAllUsers,
//     getUser,
//     getUserByMail,
//     createUser,
//     deleteUser,
//     updateUser,
//     updatePassword
// }
//# sourceMappingURL=user.service.js.map