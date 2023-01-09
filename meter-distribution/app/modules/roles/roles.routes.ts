import { NextFunction, Request, Router ,Response} from "express";
import { ResponseHandler } from "../../utility/response-handler";
import rolesService from "./roles.service";
import { rolesValidator } from "./roles.validator";

export const rolesRouter = Router();


rolesRouter.post("/",rolesValidator,async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await rolesService.createRole(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})