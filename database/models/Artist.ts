const { Model, DataTypes } = require('sequelize');
import sequelize from "..";
// import Product from './Product';
// import ArtistsProducts from './ArtistsProducts';

const Artist = (sequelize: any, DataTypes: any) => {
  class Artist extends Model {
    static associate(models: any) {
      // Artist.belongsToMany(Product, {through: ArtistsProducts, foreignKey: 'id'});
    }
  }
  Artist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      thumbnail_url: {
        type: DataTypes.STRING(200),
        unique: true
      }
    },
    {
      // options
      sequelize,
      modelName: 'Artist',
      tableName: 'artists',
      timestamps: false,
      underscore: true
    },
  );
  return Artist;
};

export default Artist(sequelize, DataTypes)