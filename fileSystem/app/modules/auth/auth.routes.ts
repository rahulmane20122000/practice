import { NextFunction, Request, Response, Router } from "express";
import { permit, verifyToken } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import authService from "./auth.service";
import { createUserValidator, loginValidator } from "./auth.validators";

export const authRouter = Router();



authRouter.post("/login", loginValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
       
        const response = await authService.login(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

authRouter.post('/create-user', permit([ROLES.ADMIN]),createUserValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await authService.createUser(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});





authRouter.post('/forgot-password', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await authService.forgotPassword(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});


authRouter.put('/change-password/:token', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = verifyToken(req.params.token) as any;
        console.log(user);
        const response = await authService.resetPassword(user.id, req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

authRouter.delete('/:id',permit([ROLES.ADMIN]), async (req, res, next) => {
    try {
        const response = await authService.deleteAccount(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});




