import { where } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { fileModel } from "./file.schema";

const create = (data: any) => fileModel.create({ ...data });

const getAll = (limit?: any, page?: any) => fileModel.findAll({ attributes: ["userId", [sequelize.fn('COUNT', sequelize.col('userId')), "totalFiles"], [sequelize.fn('SUM', sequelize.col('size')), "totalSize"]], group: ["userId"], limit: limit || 5, offset: (page || 0) * (limit || 5) });

const getOne = (parentId: number) => fileModel.findOne({ where: { id: parentId }, attributes: ['name', 'filePath'] });


const getReport = (userId: string, startDate?: string, endDate?: string) => fileModel.findAll({
    where: {
        userId: userId,
        // date: {
        //      [Op.between]: [startDate || fileConstants.DEFAULT_STARTDATE, endDate || fileConstants.DEFAULT_ENDdATE] 
        // }
    },
    attributes: [
         [sequelize.fn("SUM", sequelize.col("size")), "totlaSize"]
    ],
  
});

const updateOne = (id:string,fileName:string)=> fileModel.update({name:fileName},{where:{id:id}});
const deleteOne = (id:string)=> fileModel.destroy({where:{id:id}});

export default { create, getAll, getOne, getReport,updateOne,deleteOne }