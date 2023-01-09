import { userConstants } from "../user/user.constants";
import { rolesConstants } from "./roles.constants";
import rolesRepo from "./roles.repo";
import {IRole} from "./roles.type"

const getRole=async(role:string)=>{
   try {
    return await rolesRepo.getById(role);
   } catch (error) {
      throw rolesConstants.FAILED;
   }
}

const getAllRoles = async()=>{
   try {
      return await rolesRepo.getAll();
   } catch (error) {
      throw rolesConstants.FAILED;
   }
}

const createRole=async(role:IRole)=>{
   try {
      await rolesRepo.add(role);
      return rolesConstants.ROLES_ADDED
   } catch (error) {
      throw rolesConstants.FAILED
   }
}

export default {
    getRole,
    getAllRoles,
    createRole
}