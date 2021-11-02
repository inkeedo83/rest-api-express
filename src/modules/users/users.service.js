import User from "./user.model.js";

class UsresService {
    async create(name, email, age) {
        const createdUser = await User.create({ name, email, age });
        return createdUser;
    }

    async getAll() {
        const users = await User.findAll();
        return users;
    }

    async getUser(id) {
        const user = await User.findByPk(id);

        if (!user) return null;

        return { name: user.name, emai: user.email, age: user.age };
    }

    async updateUser(id, body) {
        const { name, email, age } = body;
        const [_, result] = await User.update({ name, email, age }, { where: { id: id } });
        if (!result) return false;

        const user = await User.findByPk(id);

        return user
    }

    async deleteUser(id) {
        const result = await User.destroy({ where: { id: id } });

        return result;
    }
}


export default new UsresService();

