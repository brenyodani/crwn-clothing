import { useContext } from 'react';
import SHOP_DATA from '../../shop-data.json';
import { ProductContext } from '../../contexts/products.contexts';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';


const Shop = () => {

    const { products } = useContext(ProductContext);

    return (

        <div className="products-container">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}


export default Shop;