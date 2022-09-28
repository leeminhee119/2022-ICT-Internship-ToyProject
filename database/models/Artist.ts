const { Model, DataTypes } = require('sequelize');
import Product from './Product';
import db from '.';

const initArtist = (sequelize: any, DataTypes: any) => {
  class Artist extends Model {
    static associate(models: any) {
      Artist.belongsToMany(Product, {through: 'junctionTable'})
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

export default initArtist(db.sequelize, DataTypes)