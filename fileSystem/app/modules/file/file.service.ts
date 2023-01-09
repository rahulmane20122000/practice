import { fileConstants } from "./file.constants"
import fileRepo from "./file.repo"


const createFolder = async (fileName: string, roleId: number,parent_id?:number) => {
    try {
       if(parent_id){
        const filePath = await fileRepo.getOne(parent_id);
        const path = filePath?.dataValues.filePath ? `${filePath?.dataValues.filePath}/${fileName}` : `${filePath?.dataValues.name}/${fileName}`;
        await fileRepo.create({ name: fileName, userId: roleId, isFolder: true,parent_id:parent_id,filePath:path});
        return fileConstants.FOLDER_CREATED;
       }
        await fileRepo.create({ name: fileName, userId: roleId, isFolder: true })
        return fileConstants.FOLDER_CREATED
    } catch (error) {
        throw fileConstants.FAILED
    }
}

const fileUpload = async (fileName: string, parentId: string, userId: string, size: number) => {
    try {
        const folderId = Number(parentId);
        const filePath = await fileRepo.getOne(folderId);
        const path = filePath?.dataValues.filePath ? `${filePath?.dataValues.filePath}/${fileName}` : `${filePath?.dataValues.name}/${fileName}`;
        await fileRepo.create({ name: fileName, filePath: path, parent_id: folderId, userId: userId, isFolder: false, size: size });
        return fileConstants.FILE_UPLODED
    } catch (error) {
        throw fileConstants.FAILED;
    }
}


const getAllFiles = async (limit?:any,page?:any) => {
    try {
        limit = Number(limit);
        page=Number(page)
        return await fileRepo.getAll(limit,page);
    } catch (error) {
        throw fileConstants.FAILED
    }
}

const getReports = async(userId:string,startDate:string,endDate:string)=>{
    try {
        return await fileRepo.getReport(userId,startDate,endDate);
    } catch (error) {
        throw fileConstants.FAILED
    }
}

const rename = async(id:string,fileName:string)=>{
    try {
        await fileRepo.updateOne(id,fileName);
        throw fileConstants.RENAMED
    } catch (error) {
        throw fileConstants.FAILED
    }
}

const deleteOne= async(id:string)=>{
    try {
        await fileRepo.deleteOne(id);
        return fileConstants.DELETED;
    } catch (error) {
        throw fileConstants.FAILED
    }
}
export default { createFolder, fileUpload, getAllFiles,getReports,rename,deleteOne}