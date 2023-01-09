import { createToken } from "../../utility/authorize";
import { sendEmail } from "../../utility/email";
import { comparePassword, createHash } from "../../utility/password";
import { ILogin } from "../auth/auth.types";
import rolesService from "../roles/roles.service";
import { IRole } from "../roles/roles.type";
import { userConstants } from "./user.constants";
import userRepo from "./user.repo";
import { IUser, IUserId } from "./user.types";


const createUser = async(userDetails:IUser)=>{
   try {
    await userRepo.add(userDetails as IUser);
    return userConstants.USER_ADDED
   } catch (error) {
      throw error
   }
}

const getAllUsers = async()=>{
try {
    return await userRepo.getAll();
} catch (error) {
    throw userConstants.FAILED
}
}

const getAcceptedUsers = async()=>{
    try {
        return await userRepo.getAccepted();
    } catch (error) {
        throw userConstants.FAILED
    }
}

const deleteUser = async(id:string)=>{
    try {
        await userRepo.deleteOne(id);
        return userConstants.USER_DELETED;
    } catch (error) {
        throw userConstants.FAILED;
    }
}


const updateUser = async(id:string,updatedUserDetails:object)=>{
    try {
        await userRepo.updateOne(id,updatedUserDetails);
        return userConstants.USER_UPDATED
    } catch (error) {
        throw userConstants.FAILED
    }
}

const acceptUser = async(id:string)=>{
    try {
        const user:any = await userRepo.getOne({id:id});
        await userRepo.updateStatus(id);
        await sendEmail(user.email,"Account Accepted!!","Your Account Was Accepted")
        return userConstants.USER_UPDATED
    } catch (error) {
        throw userConstants.FAILED
    }
}


const resetPassword = async (userId: IUserId, newPassword: string, oldPassword?: string)=>{
    try {
        const user:any = await userRepo.getOne(userId);
        let isMatched = true;
        if (oldPassword) isMatched = await comparePassword(oldPassword, user?.password || '');
        if (isMatched && user) {
            newPassword = await createHash(newPassword);
        await userRepo.updateOne(userId.id,{password:newPassword});
        return userConstants.PASSWORD_CHANGED;
        }
        throw userConstants.NOT_FOUND
    } catch (error) {
        userConstants.FAILED;
    }
}

const login = async(loginDetails:ILogin)=>{
    try {
        const user:any=  await userRepo.getOne({email:loginDetails.email});
         if(user){
            const role:any = await rolesService.getRole(user.role);
            console.log(role);
            const token = createToken({ id: user._id, name: user.name, role: user.role });
            return { role: role, token: token };
            
         }
        throw userConstants.INVALID_DETAILS
    } catch (error) {
        throw userConstants.FAILED
    }
}

export default {createUser,getAllUsers,getAcceptedUsers,deleteUser,updateUser,acceptUser,resetPassword,login};




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