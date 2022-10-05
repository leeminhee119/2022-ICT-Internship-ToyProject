const { Model, DataTypes } = require('sequelize');
import sequelize from "..";
import { Sequelize } from "sequelize";
// import Product from './Product';
// import ArtistsProducts from './ArtistsProducts';

const Reviews = (sequelize: any, DataTypes: any) => {
  class Reviews extends Model {}
  Reviews.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(200),
        defaultValue: '제목이 없습니다.'
      },
      article: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      // options
      sequelize,
      modelName: 'Reviews',
      tableName: 'reviews',
      updatedAt: false,
      createdAt: false,
      underscore: true
    },
  );
  return Reviews;
};

export default Reviews(sequelize, DataTypes)