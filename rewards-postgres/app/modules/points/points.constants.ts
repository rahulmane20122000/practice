import { MessageHandler } from "../../utility/response-handler";

export const pointsConstants = {
    FAILED_TO_FETCH :new MessageHandler(400,"Failed to Fetch Points!!!"),
    POINTS_CREATED:new MessageHandler(200,"Points Created!!!"),
    FAILED:new MessageHandler(400,"Creating Points Failed"),
    POINTS_UPDATED:new MessageHandler(200,"Points Updated!!!"),
    UPDATE_FAILED: new MessageHandler(400,"Updation Failed!!!")
}