
import Artist from './Artist'
import Product from './Product';
import ArtistsProducts from './ArtistsProducts';
import Reviews from './Reviews'

Artist.belongsToMany(Product, {through: ArtistsProducts, foreignKey: 'artist_id'});
Product.belongsToMany(Artist, {through: ArtistsProducts, foreignKey: 'product_id'})


export {Artist, Product, ArtistsProducts, Reviews}