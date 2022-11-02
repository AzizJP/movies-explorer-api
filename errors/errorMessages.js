const BAD_REQUEST = 400;
const BAD_REQUEST_MESSAGE_ID = 'Передан некорректный _id';
const UNAUTHORIZED = 401;
const UNAUTHORIZED_MESSAGE = 'Неправильные почта или пароль';
const UNAUTHORIZED_MESSAGE_AUTH = 'Необходима авторизация';
const FORBIDDEN = 403;
const FORBIDDEN_MESSAGE_MOVIE = 'Добавленный фильм принадлежит другому пользователю';
const NOT_FOUND = 404;
const NOT_FOUND_MESSAGE_ROUTE = 'Запрашиваемый ресурс не найден';
const NOT_FOUND_MESSAGE_USER = 'Пользователь по указанному _id не найден';
const CONFLICT = 409;
const CONFLICT_MESSAGE_USER = 'Пользователь с таким email уже существует';
const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = 'Неизвестная ошибка сервера';

module.exports = {
  BAD_REQUEST,
  BAD_REQUEST_MESSAGE_ID,
  UNAUTHORIZED,
  UNAUTHORIZED_MESSAGE,
  UNAUTHORIZED_MESSAGE_AUTH,
  NOT_FOUND,
  NOT_FOUND_MESSAGE_ROUTE,
  NOT_FOUND_MESSAGE_USER,
  FORBIDDEN,
  FORBIDDEN_MESSAGE_MOVIE,
  CONFLICT,
  CONFLICT_MESSAGE_USER,
  SERVER_ERROR,
  SERVER_ERROR_MESSAGE,
};
