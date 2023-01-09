import { Application, json, NextFunction, Request, Response } from "express";
import { Response as ResponseHandler } from "../../utility/response-handler";
import { routes } from "./routes.data";

export const registerRoutes = (app: Application) => {
    app.use(json());

    for (let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((response: any, req: Request, res: Response, next: NextFunction) => {
        res.status(response.statusCode || 500).send(new ResponseHandler(null, response));
    })

}
