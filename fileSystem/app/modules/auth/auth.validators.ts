import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const createUserValidator = [
    body('name').isString().notEmpty().withMessage('Name is required!'),
    body('email').isEmail().withMessage('email is required!'),
    body('password').isString().withMessage('password is required!'),
    validate
]

export const loginValidator = [
    body('email').isEmail().notEmpty().withMessage('email is required!'),
    body('password').isString().notEmpty().withMessage('Password is required!'),
    validate
]