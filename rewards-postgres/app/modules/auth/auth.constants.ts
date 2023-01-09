import { MessageHandler } from "../../utility/response-handler";

export const authConstants = {
    INVALID_CREDENTIALS:new MessageHandler(400,"Invalid Credentials!!!"),
    FAILED_TO_LOGIN: new MessageHandler(400,"Failed To Login User!!!"),
}