import { Router,Request,Response,NextFunction } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import authService from "./auth.service";
import { addDistributorValidator, LoginValidator } from "./auth.validate";

export const authRouter = Router();

authRouter.post("/",LoginValidator,async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await authService.login(req.body);
        res.send(new ResponseHandler(response))
    } catch (error) {
        next(error);
    }
});


authRouter.post("/addDistributor",permit([ROLES.ADMIN]),addDistributorValidator,async (req:Request,res:Response,next:NextFunction) => {
    try {
        const {username} = res.locals;
        const response = await authService.addDistributor(req.body,username)
        res.send(new ResponseHandler(response))
    } catch (error) {
        next(error);
    }
});



authRouter.put("/:id",permit([ROLES.ADMIN]), async (req, res, next) => {
    try {
        const response = await authService.deleteDistributor(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

