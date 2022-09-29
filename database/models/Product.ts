const { Model, DataTypes } = require('sequelize');
import sequelize from "..";
// import Artist from "./Artist";
// import ArtistsProducts from "./ArtistsProducts";

const Product = (sequelize: any, DataTypes: any) => {
  class Product extends Model {
    static associate(models: any) {
      // Product.belongsToMany(Artist, {through: ArtistsProducts})
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

export default Product(sequelize, DataTypes)