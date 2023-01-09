import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "./user.service";

export const userRouter = Router();


userRouter.get('/',async(req,res,next)=>{
    try {
        const response = await userService.getAllUsers();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

userRouter.get("/accepted-users",async(req,res,next)=>{
    try {
        const response = await userService.getAcceptedUsers();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

userRouter.put('/delete-user/:id',async(req,res,next)=>{
    try {
        const response = await userService.deleteUser(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

userRouter.put('/:id',async(req,res,next)=>{
    try {
        const {...user } = req.body;
        const response = await userService.updateUser(req.params.id, user);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});