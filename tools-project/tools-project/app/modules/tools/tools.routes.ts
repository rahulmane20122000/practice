import  {Request, Response, NextFunction, Router} from 'express';
import { permit } from '../../utility/authorize';
import { ResponseHandler } from '../../utility/response-handler';
import { ROLES } from '../roles/roles.constants';
import toolService from './tools.service';

export const ToolRouter = Router();

ToolRouter.get("/", permit([ROLES.ISSUER]), (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = toolService.getTools((req.query.search as string));
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})