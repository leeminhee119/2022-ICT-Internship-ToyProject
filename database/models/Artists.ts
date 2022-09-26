import Product from "./Products";

const { Model } = require('sequelize');

export class Artists extends Model {

  static associate(models: any) {
    Artists.belongsToMany(Product, {through: 'junctionTable'})
  }
}
export default (sequelize: any, DataTypes: any) => {
  Artists.init(
  {
    idartist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING(45),
    thumbnailUrl: DataTypes.STRING(200),
    history: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'idartist',
      }
    }
  },
  {
    // options
    sequelize,
    modelName: 'Artists',
    tableName: 'artist',
    underscore: true,
  },
);
return Artists;
};

const artist1 = Artists.create({
  idartist: 220,
  name: "이민희",
  thumbnailUrl: 'https://sequelize.org/img/logo.svg',
  history: 39399
})