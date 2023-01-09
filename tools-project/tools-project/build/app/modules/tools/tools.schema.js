"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_types_1 = require("./tools.types");
class ToolSchema {
    get(searchString) {
        if (!searchString.trim()) {
            return ToolSchema.toolDb;
        }
        return ToolSchema.toolDb.filter(tool => tool.name.includes(searchString));
    }
}
ToolSchema.toolDb = [
    new tools_types_1.Tool(1, "hammer"),
    new tools_types_1.Tool(2, "screw-driver"),
    new tools_types_1.Tool(3, "drilling maching"),
    new tools_types_1.Tool(4, "saw"),
    new tools_types_1.Tool(5, "chain saw"),
];
const toolSchema = new ToolSchema();
exports.default = toolSchema;
//# sourceMappingURL=tools.schema.js.map