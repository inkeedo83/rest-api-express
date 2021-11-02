import express from 'express'
import { logger } from './common/logger.js';
import router from "./common/router.js";
import { appPrefix, PAGE_NOT_FOUND } from './common/constants.js';

const app = express();

//middleware
app.use(express.json());
app.use(logger);

//router
app.use(appPrefix, router);

app.use((req, res) => {
    res.status(404);
    res.send(PAGE_NOT_FOUND);
});

export default app