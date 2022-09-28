const { Model, DataTypes } = require('sequelize');
import db from ".";

const initRelation = (sequelize: any, DataTypes: any) => {
    class ArtistsProducts extends Model {
        static associate(models: any) {
        }
    }
    ArtistsProducts.init(
        {
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        },
        {
        // options
        sequelize,
        modelName: 'Artists',
        tableName: 'artists',
        underscore: true
        },
    );
    return ArtistsProducts;
};

export default initRelation(db.sequelize, DataTypes)