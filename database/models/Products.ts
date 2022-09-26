import Artist from "./Artists";

const { Model } = require('sequelize');
export class Products extends Model {

  static associate(models: any) {
    Products.belongsToMany(Artist, {through: 'junctionTable'})
  }
}
export default (sequelize: any, DataTypes: any) => {
  Products.init(
  {
    idproduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING(45),
    thumbnailUrl: DataTypes.STRING(200),
    reservationUrl: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  },
  {
    // options
    sequelize,
    modelName: 'Products',
    tableName: 'products',
    underscore: true,
  },
);
return Products;
};

const product = Products.build({
    title: 
})