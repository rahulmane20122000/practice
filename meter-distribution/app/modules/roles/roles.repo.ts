import { rolesModel } from "./roles.schema";
import { IRole } from "./roles.type";

const getById = (id:string)=> rolesModel.findByPk(id);

const getAll = ()=> rolesModel.findAll();

const add = (role:IRole)=>rolesModel.create({...role});

export default {getById,getAll,add}