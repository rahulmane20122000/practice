import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const updateUserValidator = [
    body('name').isString().withMessage('name is required!'),
    body('email').isString().withMessage('email is required!'),
    validate
]