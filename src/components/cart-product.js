import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

function CartProduct(props) {
  const src = require('../images/' + props.cartProduct.src);
  return(
    <div className='flex-row'>
      <div className='flex-1'>
        <img className='cart-img' src={src} />
      </div>
      <div className='flex-2'>
        <p className='cart-product-name'>
          {props.cartProduct.name}
        </p>
      </div>
      <div className='flex-2'>
        <p className='cart-product-price'>
          {props.cartProduct.price} руб.
        </p>
      </div>
      <div className='flex-2'>
        
      </div>
      <div className='flex-2'>
        <button className='cart-delete' data-id={props.cartProduct.id} onClick={() => props.deleteItem(props.cartProduct)}>x</button>
      </div>
    </div>
  )
}

export default CartProduct
