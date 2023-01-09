"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const auth_routes_1 = require("../auth/auth.routes");
const user_routes_1 = require("../user/user.routes");
const routes_types_1 = require("./routes.types");
exports.routes = [
    new routes_types_1.Route('/auth', auth_routes_1.authRouter),
    new routes_types_1.Route('/user', user_routes_1.userRouter)
];
exports.excludedPaths = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/change-password/', method: "PUT" },
];
//# sourceMappingURL=routes.data.js.map