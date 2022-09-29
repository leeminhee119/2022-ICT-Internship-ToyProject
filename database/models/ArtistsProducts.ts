// import db from ".";
const { Model, DataTypes} = require('sequelize');
import sequelize from "..";
import {Artist, Product} from '.'

const ArtistsProducts = (sequelize: any, DataTypes: any) => {
    class ArtistsProducts extends Model {
        static associate(models: any) {
            // ArtistsProducts.belongsTo(Artist, {
            //     foreignKey: 'artist_id'
            // });
            // ArtistsProducts.belongsTo(Product, {
            //     foreignKey: 'product_id'
            // })
        }
    }
    ArtistsProducts.init(
        {
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Artist,
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        }
        },
        {
        // options
        sequelize,
        modelName: 'ArtistsProducts',
        tableName: 'artists_products',
        timestamps: false,
        underscore: true
        },
    );
    return ArtistsProducts;
};

export default ArtistsProducts(sequelize, DataTypes)