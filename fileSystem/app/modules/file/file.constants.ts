import { MessageHandler } from "../../utility/response-handler";

export const fileConstants = {
    FAILED: new MessageHandler(400,"Failed To Process Request!!!"),
    FOLDER_CREATED: new MessageHandler(200,"Folder Created!!!"),
    FILE_UPLODED: new MessageHandler(200,"File uploaded!!!"),
    FOLDER_RENAMED: new MessageHandler(200,"Folder Renamed!!!"),
    FILE_RENAMED: new MessageHandler(200,"File Renamed!!!"),
    FOLDER_DELETED: new MessageHandler(200,"Folder DELETED!!!"),
    FILE_DELETED: new MessageHandler(200,"File DELETED!!!"),
    DEFAULT_STARTDATE:"2020-11-17",
    DEFAULT_ENDdATE:"2022-11-17",
    RENAMED: new MessageHandler(200,"Renamed!!!"),
    DELETED: new MessageHandler(200,"DELETED!!!"),
}