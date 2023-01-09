import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const SendNotificationValidator = [
    body("ids").notEmpty().withMessage("At least One Id Required"),
    body("message").isString().notEmpty().withMessage("message Requrired"),
    validate,

]