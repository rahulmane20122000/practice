"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const auth_routes_1 = require("../auth/auth.routes");
const dummy_routes_1 = require("../dummy/dummy.routes");
const tools_routes_1 = require("../tools/tools.routes");
const routes_types_1 = require("./routes.types");
exports.routes = [
    new routes_types_1.Route("/dummy", dummy_routes_1.DummyRouter),
    new routes_types_1.Route("/tool", tools_routes_1.ToolRouter),
    new routes_types_1.Route("/auth", auth_routes_1.AuthRouter)
];
exports.excludedPaths = [
    { path: '/auth/login', method: "POST" }
];
//# sourceMappingURL=routes.data.js.map