import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const add = (userDetails:IUser)=> userModel.create({...userDetails});

const getAll =()=> userModel.findAll();

const getOne = (field:object)=> userModel.findAll({...field});

const getAccepted=()=> userModel.findAll({where:{isAccepted:true}});

const deleteOne=(id:string)=>userModel.destroy({where:{id:id}});

const updateStatus = (id:string)=> userModel.update({isAccepted:true},{where:{id:id}});

const updateOne=(id:string,updatedUserDetails:object)=> userModel.update(updatedUserDetails,{where:{id:id}});





export default{add,getAll,getAccepted,updateOne,deleteOne,updateStatus,getOne}