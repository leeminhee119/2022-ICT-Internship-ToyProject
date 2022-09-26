import Artist from "./Artists";
import Product from "./Products";

const path = require('path');
const fs = require('fs');
const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))[env];
const db: Record<string, any> = {};

// sequelize 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 각 파일 (model)을 db 객체에 저장 {모델명: 모델}
fs
  .readdirSync(__dirname)
  .filter(function(file: string | string[]) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file: string) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// 각 모델의 association 처리
Object.keys(db).forEach(function(modelName) {
if ("associate" in db[modelName]) {
db[modelName].associate(db);
}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;




export default db;