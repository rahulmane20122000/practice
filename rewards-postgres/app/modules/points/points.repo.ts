import { userModel } from "../user/user.schema";



const get = (id:string)=>  userModel.find({_id:id}).select('points');



export default {get}