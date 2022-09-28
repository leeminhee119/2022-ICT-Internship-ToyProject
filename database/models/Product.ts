const { Model, DataTypes } = require('sequelize');
import Artist from "./Artist";
import db from ".";

const initProduct = (sequelize: any, DataTypes: any) => {
  class Product extends Model {
    static associate(models: any) {
      Product.belongsToMany(Artist, {through: 'junctionTable'})
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      code: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      type: {
        type: DataTypes.STRING(7),
        allowNull: false
      },
      ranking: DataTypes.INTEGER,
      thumbnail_url: {
        type: DataTypes.STRING(200),
        unique: true
      },
      reservation_url: {
        type: DataTypes.TEXT,
        unique: true
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      // options
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: false,
      underscore: true,
    },
  );
  return Product;
};

export default initProduct(db.sequelize, DataTypes)