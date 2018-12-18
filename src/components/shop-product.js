import React  from 'react';
import '../css/style.css';

function Product (props) {
  let src = require('../images/' + props.product.src);
    return(
      <div className='product-game'>
        <img className='product-img' src={src} alt='product'/>
        <p className='product-header'>
        {props.product.name}
        </p>
        <p className='product-price'>
          {props.product.price} руб.
        </p>
        <button className='buy-product-button' data-id={props.product.id} onClick={() =>  props.addToCart(props.product)}>Купить</button>
      </div>
    )

}

export default Product;
