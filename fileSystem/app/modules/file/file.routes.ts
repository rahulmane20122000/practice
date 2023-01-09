import { NextFunction, Request, Response, Router } from "express";
import { permit } from "../../utility/authorize";
import { upload } from "../../utility/file-upload";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import fileService from "./file.service";
import { createFolderValidator } from "./file.validator";

export const fileRouter = Router();

fileRouter.post("/:parentId?",createFolderValidator, permit([ROLES.USER]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { parentId } = req.params;
        const { id } = res.locals.user
        console.log(res.locals.user);
        const response = await fileService.createFolder(req.body.fileName, id, Number(parentId));
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

fileRouter.post("/file-upload/:parentId", permit([ROLES.USER]), upload, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { originalname, size } = req.file as any;
        const { parentId } = req.params;
        const { id } = res.locals.user
        const response = await fileService.fileUpload(originalname, parentId, id, size)
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

fileRouter.get('/', permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {limit,page} = req.query;
        const response = await fileService.getAllFiles(limit as string,page as string);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

fileRouter.put("/rename/:id",permit([ROLES.USER]),async (req: Request, res: Response, next: NextFunction)=>{
try {
    const{id} = req.params;
    const response = await fileService.rename(id,req.body.filelName);
    res.send(new ResponseHandler(response));
} catch (error) {
    next(error);
}
});

fileRouter.delete("/delete/:id",permit([ROLES.USER]),async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const response = await fileService.deleteOne(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});


fileRouter.get("/report/:userId",permit([ROLES.ADMIN]),async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const{startDate,endDate}= req.query;
       const response = await fileService.getReports(req.params.userId,startDate as string,endDate as string);
       res.send(new ResponseHandler(response)); 
    } catch (error) {
        next(error);
    }
});

