import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const rolesValidator = [
    body('roleName').isString().notEmpty().withMessage('roleName is required!'),
    validate
]