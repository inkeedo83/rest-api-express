import fs from 'fs';
import { logPath } from './constants.js';


const getActualRequestDurationInMilliseconds = start => {
    const diff = process.hrtime(start);
    return (diff[0] * 1000) + (diff[1] / 1000000);
};

export const logger = (req, res, next) => {
    const current_datetime = new Date();
    const formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
    const method = req.method;
    const url = req.url;
    const status = res.statusCode;

    const start = process.hrtime();
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);

    const log = `[${formatted_date}] ${method}:${url}, status: ${status}, duration: ${durationInMilliseconds.toLocaleString()} ms.`;

    console.log(log);

    fs.appendFile(logPath, log + "\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
};