"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const tools_service_1 = __importDefault(require("./tools.service"));
exports.ToolRouter = (0, express_1.Router)();
exports.ToolRouter.get("/", (0, authorize_1.permit)([roles_constants_1.ROLES.ISSUER]), (req, res, next) => {
    try {
        const result = tools_service_1.default.getTools(req.query.search);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=tools.routes.js.map