import Router from 'express'
import usersRouter from "../modules/users/users.router.js";

const router = new Router()

router.use(usersRouter)


export default router;