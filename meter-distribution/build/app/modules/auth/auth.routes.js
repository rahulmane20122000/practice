"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const auth_service_1 = __importDefault(require("./auth.service"));
exports.authRouter = (0, express_1.Router)();
// authRouter.post('/login',loginValidator,async(req:Request,res:Response,next:NextFunction)=>{
// try {
//     const response = await authService.login(req.body);
//     res.send(new ResponseHandler(response)); 
// } catch (error) {
//     next(error);
// }
// });
exports.authRouter.post('/create-user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.createUser(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.post('/accept-allumni/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.acceptAccount(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
// authRouter.put('/reset-password',permit([ROLES.ADMIN, ROLES.ACCOUNTANT, ROLES.CLERK]),async(req:Request,res:Response,next:NextFunction)=>{
//     try {
//         const { newPassword, oldPassword } = req.body;
//         const response = await authService.resetPassword(res.locals.user.id, newPassword, oldPassword);
//         res.send(new ResponseHandler(response));
//     } catch (error) {
//         next(error);
//     }
// });
// authRouter.put('/change-password/:id',async(req:Request,res:Response,next:NextFunction)=>{
//     try {
//         const id = verifyToken(req.params.token) as string;
//         const response = await authService.resetPassword(id, req.body.newPassword);
//         res.send(new ResponseHandler(response));
//     } catch (error) {
//         next(error);
//     }
// });
// authRouter.post('/forgot-password',permit([ROLES.ADMIN, ROLES.ACCOUNTANT, ROLES.CLERK]),async(req:Request,res:Response,next:NextFunction)=>{
//     try {
//         const response = await authService.forgotPassword(req.body.email);
//         res.send(new ResponseHandler(response));
//     } catch (error) {
//         next(error);
//     }
// })
//# sourceMappingURL=auth.routes.js.map