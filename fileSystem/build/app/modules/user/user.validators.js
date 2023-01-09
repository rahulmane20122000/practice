"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.updateUserValidator = [
    (0, express_validator_1.body)('name').isString().withMessage('name is required!'),
    (0, express_validator_1.body)('email').isString().withMessage('email is required!'),
    validate_1.validate
];
//# sourceMappingURL=user.validators.js.map