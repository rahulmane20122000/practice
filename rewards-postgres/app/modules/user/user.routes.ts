import { Router,Request,Response,NextFunction } from "express";
import { permit } from "../../utility/authorize";
import { upload } from "../../utility/file-upload";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import userService from "./user.service";
import { SendNotificationValidator } from "./user.validator";



export const userRouter = Router();


userRouter.get("/",permit([ROLES.ADMIN]), async (req, res, next) => {
    try {
        const data = await userService.getAllDistributorsPoints();
        res.send(new ResponseHandler(data));
    } catch (error) {
        next(error)
    }
});



userRouter.get("/notifications", async (req, res, next) => {
    try {
        const { _id } = res.locals
        const response = await userService.getNotificationById(_id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error)
    }
});

userRouter.put("/send-notification",permit([ROLES.ADMIN]),SendNotificationValidator, async (req:Request,res:Response,next:NextFunction) => {
    try {
        const { ids, message } = req.body;
        const response = await userService.sendNotification(ids, message);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

userRouter.get("/myPoints", async (req, res, next) => {
    try {
        const { _id } = res.locals
        const response = await userService.getMyPoints(_id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

userRouter.post("/fileUpload",permit([ROLES.ADMIN]), upload.single('file'), async (req, res, next) => {
    try {
        const response = await userService.fileRead(req.file?.path as any);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

userRouter.put("/claim/:id",async(req,res,next)=>{
    try {
        const {_id} = res.locals
        const {id} = req.params
        const response = await userService.claimGift(id,_id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})


userRouter.put("/:id", permit([ROLES.ADMIN]),async (req, res, next) => {
    try {
        const response = await userService.editDistributor(req.body, req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

