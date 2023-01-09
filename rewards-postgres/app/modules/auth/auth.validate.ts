import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const LoginValidator = [
    body("username").isString().notEmpty().withMessage("username is required"),
    body("password").isString().notEmpty().withMessage("password is invalid"),
    validate,
];

export const addDistributorValidator = [
    body("username").isString().notEmpty().withMessage("username is required"),
    body("email").isEmail().withMessage("required email"),
    validate,
]
