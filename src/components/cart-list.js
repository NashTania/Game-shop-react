import React  from 'react';
import '../css/style.css';
import CartProduct from './cart-product.js';

function CartList(props) {
  const list = props.cartProducts.map(product =>
    <CartProduct key={product.id} cartProduct={product} deleteItem={props.deleteItem}
    increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity} modal={props.modal}
    />
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
