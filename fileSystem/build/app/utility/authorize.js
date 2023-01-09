"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permit = exports.authorize = exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createToken = (payload, secret, expiry) => {
    const token = (0, jsonwebtoken_1.sign)(payload, secret || '', { expiresIn: expiry });
    return token;
};
exports.createToken = createToken;
const verifyToken = (token) => {
    const { ACCESS_TOKEN_SECRET } = process.env;
    const payload = (0, jsonwebtoken_1.verify)(token, ACCESS_TOKEN_SECRET || '');
    return payload;
};
exports.verifyToken = verifyToken;
const authorize = (excludedPaths) => {
    return (req, res, next) => {
        try {
            if (excludedPaths.find(e => (e.path === req.path && e.method === req.method) || req.path.split("/").includes(e.path.split("/")[2]))) {
                return next();
            }
            const token = req.headers.authorization || '';
            const payload = (0, exports.verifyToken)(token);
            res.locals.user = payload;
            next();
        }
        catch (e) {
            console.log(e);
            next({ statusCode: 403, message: 'UNAUTHORIZED' });
        }
    };
};
exports.authorize = authorize;
const permit = (permittedRoles) => {
    return (req, res, next) => {
        console.log("role", res.locals.user.role);
        if (permittedRoles.includes(res.locals.user.role)) {
            return next();
        }
        next({ statusCode: 403, message: 'UNAUTHORIZED' });
    };
};
exports.permit = permit;
//# sourceMappingURL=authorize.js.map