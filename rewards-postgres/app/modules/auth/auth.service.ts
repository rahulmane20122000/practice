import { createToken } from "../../utility/authorize";
import { comparePassword, createHash } from "../../utility/password";
import { userConstants } from "../user/user.constants";
import userRepo from "../user/user.repo";
import userService from "../user/user.service";
import { IDistributor } from "../user/user.types";
import { authConstants } from "./auth.constants";
import { ILogin } from "./auth.types";

const login = async(userDetails:ILogin)=>{
    try {
        const {username,password} = userDetails;
        const user:any = await userRepo.login(username);
        const userData = user.toJSON();
        if(userData && comparePassword(password,userData.password)) return createToken(userData); 
        throw authConstants.INVALID_CREDENTIALS
    } catch (error) {
        throw authConstants.FAILED_TO_LOGIN;
    }
}

const addDistributor = async(userDetails:IDistributor,createdBy:string)=>{
  try {
    return await userService.addDistributor(userDetails,createdBy);
  } catch (error) {
    throw userConstants.FAILED_TO_ADD
  }
}

const deleteDistributor = async (id:string)=>{
    try {
        return await userService.deleteDistributor(id);
    } catch (error) {
        throw userConstants.FAILED_TO_DELETE
    }
}

export default {login,addDistributor,deleteDistributor}