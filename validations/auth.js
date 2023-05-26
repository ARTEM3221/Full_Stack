import {body} from "express-validator";

export const registerValidation = [
    body('email', "Невірна почта").isEmail({ min: 5}),
    body('password', "Пароль повинен бути мінімум з 5 символів").isLength({ min: 5}),
    body('fullName', "Вкажіть ім'я").isLength({ min: 3}),
    body('avatarUrl', "Невірне посилання на аватарку").optional().isURL(),
]