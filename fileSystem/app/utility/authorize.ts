import { Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';

type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface IExcludedPaths {
    path: string;
    method: Method
}

export const createToken = (payload: any,secret:string,expiry:string) => {

    const token = sign(payload, secret || '',{expiresIn:expiry});

    return token;
}

export const verifyToken = (token: string) => {
    const { ACCESS_TOKEN_SECRET } = process.env;
    const payload = verify(token, ACCESS_TOKEN_SECRET || '');
    return payload;
}

export const authorize = (excludedPaths: IExcludedPaths[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {

            if (excludedPaths.find(e =>(e.path===req.path && e.method===req.method) || req.path.split("/").includes(e.path.split("/")[2]))) {
                return next();
            }

            const token = req.headers.authorization || '';

            const payload = verifyToken(token);

            res.locals.user = payload;

            next();
        } catch (e) {
            console.log(e);
            next({ statusCode: 403, message: 'UNAUTHORIZED' })
        }
    }
}

export const permit = (permittedRoles: number[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log("role",res.locals.user.role);
        if (permittedRoles.includes(res.locals.user.role)) {
            return next();
        }

        next({ statusCode: 403, message: 'UNAUTHORIZED' });
    }
}