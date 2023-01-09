
import { ILogin } from "../auth/auth.types";
import rolesService from "../roles/roles.service";
import { createToken } from "../../utility/authorize";

import { comparePassword, createHash } from "../../utility/password";
import { userConstants } from "./user.constants";
import userRepo from "./user.repo";
import { IUser } from "./user.types";


const createUser = async (userDetails: IUser) => {
    try {
        await userRepo.add(userDetails as IUser);
        return userConstants.USER_ADDED
    } catch (error) {
        throw error
    }
}

const getAllUsers = async () => {
    try {
        return await userRepo.getAll();
    } catch (error) {
        throw userConstants.FAILED
    }
}



const deleteUser = async (id: string) => {
    try {
        await userRepo.deleteOne(id);
        return userConstants.USER_DELETED;
    } catch (error) {
        throw userConstants.FAILED;
    }
}


const updateUser = async (id: string, updatedUserDetails: object) => {
    try {
        await userRepo.updateOne(id, updatedUserDetails);
        return userConstants.USER_UPDATED
    } catch (error) {
        throw userConstants.FAILED
    }
}


const getUserByMail = async (email: object) => {
    try {
        return await userRepo.getOne(email)
    } catch (error) {
        throw userConstants.FAILED
    }
}



const login = async (loginDetails: ILogin) => {
    try {

        const user: any = await userRepo.getOne({ email: loginDetails.email });
        const isMatched = await comparePassword(loginDetails.password, user.password)
        
        if (user && isMatched) {
            const role: any = await rolesService.getRole(user.roleId);
           
            const accessToken = createToken({ id: user.id, name: user.name, role: user.roleId }, process.env.ACCESS_TOKEN_SECRET || '', '1d');
            const refreshToken = createToken({ id: user.id }, process.env.REFRESH_TOKEN_SECRET || "", '365d');
            return { accessToken: accessToken, role: role.roleName, refreshToken: refreshToken };
        }
        throw userConstants.INVALID_DETAILS
    } catch (error) {
        throw userConstants.FAILED
    }
}

const updatePassword = async (userId: string, newPassword: string) => {
    try {
        
        await userRepo.updateOne(userId, { password: newPassword });
        return userConstants.PASSWORD_CHANGED
    } catch (error) {
        throw userConstants.FAILED
    }
}

export default { createUser, getAllUsers, deleteUser, updateUser, login, getUserByMail, updatePassword };


