"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const response_handler_1 = require("../utility/response-handler");
const routes_data_1 = require("./routes.data");
const registerRoutes = (app) => {
    app.use((0, express_1.json)());
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((response, req, res, next) => {
        res.status(response.statusCode || 500).send(new response_handler_1.Response(null, response));
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.register.js.map