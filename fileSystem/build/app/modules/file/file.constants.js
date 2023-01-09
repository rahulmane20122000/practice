"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.fileConstants = {
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!"),
    FOLDER_CREATED: new response_handler_1.MessageHandler(200, "Folder Created!!!"),
    FILE_UPLODED: new response_handler_1.MessageHandler(200, "File uploaded!!!"),
    FOLDER_RENAMED: new response_handler_1.MessageHandler(200, "Folder Renamed!!!"),
    FILE_RENAMED: new response_handler_1.MessageHandler(200, "File Renamed!!!"),
    FOLDER_DELETED: new response_handler_1.MessageHandler(200, "Folder DELETED!!!"),
    FILE_DELETED: new response_handler_1.MessageHandler(200, "File DELETED!!!"),
};
//# sourceMappingURL=file.constants.js.map