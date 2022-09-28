// import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || 'development';
import { DataTypes, Sequelize } from 'sequelize';
import Artist from "./Artist";
import Product from "./Product";
import ArtistsProducts from "./ArtistsProducts";
import initArtist from './'
import initProduct from './'

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

const db:any = {
  sequelize: sequelize,
}

export default db;