import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";

import userService from "./user.service";

export const userRouter = Router();


userRouter.get('/', permit([ROLES.ADMIN]),async (req, res, next) => {
    try {
        const response = await userService.getAllUsers();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});


userRouter.put('/:id', permit([ROLES.USER]),async (req, res, next) => {
    try {
        const response = await userService.updateUser(req.params.id, req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});