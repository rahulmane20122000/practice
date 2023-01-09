import { MessageHandler } from "../../utility/response-handler";

export const giftConstants = {
    FAILED_TO_FETCH : new MessageHandler(400,"Failed To Fetch Gifts!!!"),
    FAILED_TO_CLAIMED: new MessageHandler(400,"Cannot Claim Gift!!!"),
    GIFT_CLAIMED : new MessageHandler(200,"Gift Claimed Sucessfully"),
}