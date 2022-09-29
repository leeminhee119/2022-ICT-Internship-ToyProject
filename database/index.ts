import { Sequelize } from 'sequelize';
// sequelize 객체 생성
const sequelize = new Sequelize(
  {
    username: 'root',
    password: '077100Lee!w',
    database: 'mucon_db',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

export default sequelize;