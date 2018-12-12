import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import CartProduct from './cart-product.js';
import productsCart from '../products-cart.js';

function CartList(props) {
  const list = props.cartProducts.map(product =>
    <CartProduct key={product.id} cartProduct={product} deleteItem={props.deleteItem}/>
  )
  return (
    <div className='cart-content'>
      <div className='flex-column'>
        {list}
      </div>
    </div>
  )
}
export default CartList;
