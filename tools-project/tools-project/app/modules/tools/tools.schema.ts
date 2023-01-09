import { Tool } from "./tools.types";


class ToolSchema {
    public static toolDb: Tool[] = [
        new Tool(1, "hammer"),
        new Tool(2, "screw-driver"),
        new Tool(3, "drilling maching"),
        new Tool(4, "saw"),
        new Tool(5, "chain saw"),
    ];

    get(searchString: string) {
        if(!searchString.trim()) {
            return ToolSchema.toolDb;
        }

        return ToolSchema.toolDb.filter(
            tool => tool.name.includes(searchString)
        )
    }
}

const toolSchema = new ToolSchema();

export default toolSchema;