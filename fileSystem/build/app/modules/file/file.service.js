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
const file_constants_1 = require("./file.constants");
const file_repo_1 = __importDefault(require("./file.repo"));
const createFolder = (fileName, roleId, parent_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (parent_id) {
            const filePath = yield file_repo_1.default.getOne(parent_id);
            const path = (filePath === null || filePath === void 0 ? void 0 : filePath.dataValues.filePath) ? `${filePath === null || filePath === void 0 ? void 0 : filePath.dataValues.filePath}/${fileName}` : `${filePath === null || filePath === void 0 ? void 0 : filePath.dataValues.name}/${fileName}`;
            yield file_repo_1.default.create({ name: fileName, userId: roleId, isFolder: true, parent_id: parent_id, filePath: path });
            return file_constants_1.fileConstants.FOLDER_CREATED;
        }
        yield file_repo_1.default.create({ name: fileName, userId: roleId, isFolder: true });
        return file_constants_1.fileConstants.FOLDER_CREATED;
    }
    catch (error) {
        throw file_constants_1.fileConstants.FAILED;
    }
});
const fileUpload = (fileName, parentId, userId, size) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const folderId = Number(parentId);
        const filePath = yield file_repo_1.default.getOne(folderId);
        const path = (filePath === null || filePath === void 0 ? void 0 : filePath.dataValues.filePath) ? `${filePath === null || filePath === void 0 ? void 0 : filePath.dataValues.filePath}/${fileName}` : `${filePath === null || filePath === void 0 ? void 0 : filePath.dataValues.name}/${fileName}`;
        yield file_repo_1.default.create({ name: fileName, filePath: path, parent_id: folderId, userId: userId, isFolder: false, size: size });
        return file_constants_1.fileConstants.FILE_UPLODED;
    }
    catch (error) {
        throw file_constants_1.fileConstants.FAILED;
    }
});
const getAllFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield file_repo_1.default.getAll();
    }
    catch (error) {
        throw file_constants_1.fileConstants.FAILED;
    }
});
exports.default = { createFolder, fileUpload, getAllFiles };
//# sourceMappingURL=file.service.js.map