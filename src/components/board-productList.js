import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
//import productsBoard from '../product-board-game.js';
import Product from './shop-product.js';

function BoardList(props) {
  const productList = props.products.map(product =>
    <Product key={product.id} product={product} addToCart={props.addToCart}/>
  )
  return(
    <div className='board-shop-flex-row'>
      {productList}
    </div>
  )
}
export default BoardList;
