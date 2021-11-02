import usersService from "./users.service.js";
import { BODY_IS_EMPTY, NOTHING_TO_DELETE, NOTHING_TO_UPDATE, NOT_ACCEPTED_ID, NO_SUCH_RECORD } from "../../common/constants.js";

class UsersController {
    async create(req, res) {
        const { name, email, age } = req.body;
        try {
            const user = await usersService.create(name, email, age);
            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const users = await usersService.getAll();
            return res.json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getUser(req, res) {
        const id = req.params.id;

        if (isNaN(id)) res.status(406).json({ message: NOT_ACCEPTED_ID });

        try {
            const user = await usersService.getUser(id);

            if (!user) return res.json({ message: NO_SUCH_RECORD });
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateUser(req, res) {
        const id = req.params.id;

        if (isNaN(id)) res.status(406).json({ message: NOT_ACCEPTED_ID });

        const body = req.body;

        if (!body) res.status(406).json({ message: BODY_IS_EMPTY });

        try {
            const updatedUser = await usersService.updateUser(id, body);

            if (!updatedUser) res.json({ message: NOTHING_TO_UPDATE })
            return res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        if (isNaN(id)) res.status(406).json({ message: NOT_ACCEPTED_ID });

        try {
            const result = await usersService.deleteUser(id);
            const message = result ? `user with id: ${id} deleted` : NOTHING_TO_DELETE;

            return res.json(message);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}


export default new UsersController();