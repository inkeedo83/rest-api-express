import Sequelize from 'sequelize';
import sequelize from '../../configs/database.js';
const Model = Sequelize.Model;

class User extends Model { }

User.init(
  {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'users',
  }
);

export default User