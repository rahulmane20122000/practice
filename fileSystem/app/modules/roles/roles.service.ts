import rolesRepo from "./roles.repo";


const getRole=async(role:string)=>{
   try {
      const roleId = Number(role);
    return await rolesRepo.getById(roleId);
   } catch (error) {
      throw "Failed";
   }
}

export default {
    getRole
}