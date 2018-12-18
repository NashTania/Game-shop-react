import React from 'react';
import '../css/style.css';
import Product from './shop-product.js';

function ProductsListPs(props) {
  const listProducts = props.products.map(product =>
    <Product key={product.id} product={product} addToCart={props.addToCart}/>
  )

  return (
    <div id='product-list'>
    <div className='shop-flex-row'>
      {listProducts}
    </div>
  </div>
  )
}

export default ProductsListPs;
