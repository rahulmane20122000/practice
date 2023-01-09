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
exports.fileRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const file_upload_1 = require("../../utility/file-upload");
const response_handler_1 = require("../../utility/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const file_service_1 = __importDefault(require("./file.service"));
exports.fileRouter = (0, express_1.Router)();
exports.fileRouter.post("/:parentId?", (0, authorize_1.permit)([roles_constants_1.ROLES.USER]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { parentId } = req.params;
        const { id } = res.locals.user;
        console.log(res.locals.user);
        const response = yield file_service_1.default.createFolder(req.body.fileName, id, Number(parentId));
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.fileRouter.post("/file-upload/:parentId", (0, authorize_1.permit)([roles_constants_1.ROLES.USER]), file_upload_1.upload, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { originalname, size } = req.file;
        const { parentId } = req.params;
        const { id } = res.locals.user;
        const response = yield file_service_1.default.fileUpload(originalname, parentId, id, size);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.fileRouter.get('/', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield file_service_1.default.getAllFiles();
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=file.routes.js.map