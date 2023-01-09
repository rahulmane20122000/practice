import { rolesModel } from "./roles.schema";

const getById = (id:number)=>rolesModel.findByPk(id);

export default {getById}