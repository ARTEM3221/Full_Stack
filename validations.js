import {body} from "express-validator";

export const loginValidation = [
    body('email', "Невірна почта").isEmail({ min: 5}),
    body('password', "Пароль повинен бути мінімум з 5 символів").isLength({ min: 5}),
];

export const registerValidation = [
    body('email', "Невірна почта").isEmail({ min: 5}),
    body('password', "Пароль повинен бути мінімум з 5 символів").isLength({ min: 5}),
    body('fullName', "Вкажіть ім'я").isLength({ min: 3}),
    body('avatarUrl', "Невірне посилання на аватарку").optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
    body('tags', 'Неверный формат тэгов').optional().isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  ];