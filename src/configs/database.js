import { Sequelize } from 'sequelize';
import {
  DATABASE,
  DIALECT,
  HOST,
  PASSWORD,
  USERNAME,
} from '../common/constants.js';

const dbConnection = new Sequelize({
  dialect: DIALECT,
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  logging: false,
  define: {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  },
});

export default dbConnection;
