import dotenv from 'dotenv';

dotenv.config();

export const DIALECT = process.env.DIALECT;
export const DATABASE = process.env.MYSQL_DATABASE;
export const USERNAME = process.env.MYSQL_USERNAME;
export const PASSWORD = process.env.MYSQL_PASSWORD;
export const HOST = process.env.MYSQL_HOST;
export const PORT = parseInt(process.env.APP_PORT, 10);

export const appPrefix = '/api';
export const usersPrefix = '/users';
export const NOT_ACCEPTED_ID = 'not accepted id';
export const NO_SUCH_RECORD = 'no such record';
export const BODY_IS_EMPTY = 'body is empty';
export const NOTHING_TO_UPDATE = 'nothing to update';
export const NOTHING_TO_DELETE = 'nothing to delete';
export const PAGE_NOT_FOUND = '404: Page Not Found -_-';
const filename = new Date().getDate();
export const logPath = `./${filename}.log`;
