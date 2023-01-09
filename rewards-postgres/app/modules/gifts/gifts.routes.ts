import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import giftsService from "./gifts.service";

export const giftsRouter = Router();


giftsRouter.get("/",async(req,res,next)=>{
    try {
        const {username} = res.locals
        const response =await giftsService.getCurrentGift(username);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

giftsRouter.get("/next",async(req,res,next)=>{
    try {
        const {username} = res.locals
        const response =await giftsService.getNextGift(username);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})


