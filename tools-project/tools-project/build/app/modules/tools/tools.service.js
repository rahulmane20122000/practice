"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_schema_1 = __importDefault(require("./tools.schema"));
const getTools = (searchString) => {
    return tools_schema_1.default.get(searchString);
};
exports.default = {
    getTools
};
//# sourceMappingURL=tools.service.js.map