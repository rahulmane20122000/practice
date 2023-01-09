import toolSchema from "./tools.schema"

const getTools = (searchString: string) => {
    return toolSchema.get(searchString);
}

export default {
    getTools
}