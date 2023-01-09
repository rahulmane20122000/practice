import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const createFolderValidator = [
    body('fileName').isString().notEmpty().withMessage('fileName is required!'),
    validate
]

