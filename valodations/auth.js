import {body} from "express-validator";

export const registerValidation = [
    body('email').isEmail({ min: 5}),
    body('password').isLength({ min: 5}),
    body('fullName').isLength({ min: 3}),
    body('avatarUrl').optional().isURL,
]