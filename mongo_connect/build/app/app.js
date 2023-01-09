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
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const routes_register_1 = require("./modules/routes/routes.register");
const mongo_connect_1 = require("./connection/mongo.connect");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = (0, express_1.default)();
        const { PORT } = process.env;
        yield (0, mongo_connect_1.connectToMongo)();
        (0, routes_register_1.registerRoutes)(app);
        app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
exports.startServer = startServer;
//# sourceMappingURL=app.js.map