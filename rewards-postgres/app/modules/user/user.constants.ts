import { MessageHandler } from "../../utility/response-handler";

export const userConstants = {
    FAILED_TO_FETCH : new MessageHandler(404,"Failed To Get The Data!!!"),
    FAILED_TO_ADD : new MessageHandler(400,"Some Fields Are Missing or Distributor Already Exists!!!"),
    DISTRIBUTOR_CRATED: new MessageHandler(200,"Distributor Added Sucessfully!!!"),
    DISTRIBUTOR_UPDATED: new MessageHandler(200,"Distributor Updated Sucessfully!!!"),
    DISTRIBUTOR_DELETED: new MessageHandler(200,"Distributor Deleted Sucessfully!!!"),
    FAILED_TO_UPDATE : new MessageHandler(400,"Failed To Update Distributor!!!"),
    FAILED_TO_DELETE : new MessageHandler(400,"Failed ToDelete Distributor!!!"),
    NOTIFICATION_SENT : new MessageHandler(200,"Notification Sent"),
    FAILED_TO_SEND : new MessageHandler(400,"Failed To Send!!!"),
}