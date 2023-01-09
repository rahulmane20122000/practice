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
const password_1 = require("../../utility/password");
const user_schema_1 = __importDefault(require("./user.schema"));
const getUsers = () => user_schema_1.default.get();
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const password = yield (0, password_1.createPassword)();
    user_schema_1.default.create(Object.assign(Object.assign({}, user), { password }));
});
exports.default = {
    getUsers,
    createUser
};
//# sourceMappingURL=user.service.js.map