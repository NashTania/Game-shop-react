import React from 'react';
import '../css/style.css';
import { store } from '../redux-ex.js';

class CartProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productQuantity: props.productQuantity
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.productQuantity !== this.props.productQuantity) {
      this.setState({
        product: this.props.productQuantity
      })
    }
  }

  /*clickFunction(event) {
    this.props.deleteItem(this.props.cartProduct);
    this.props.modal()
  }*/

  render() {
    const cart = store.getState();
    const src = require('../images/' + this.props.cartProduct.src);
      return(
        <div className='flex-row'>
          <div className='flex-1'>
            <img className='cart-img' alt='product' src={src} />
          </div>
          <div className='flex-2'>
            <p className='cart-product-name'>
              {this.props.cartProduct.name}
            </p>
          </div>
          <div className='flex-2'>
            <p className='cart-product-price'>
              {this.props.cartProduct.price} руб.
            </p>
          </div>
          <div className='flex-2'>
            <div className='quantity-block'>
              <button className='quantity-counter' onClick={()=>this.props.decreaseQuantity(this.props.cartProduct)}>-</button>
                <p id='product-quantity'>{this.props.cartProduct.quantity}</p>
              <button className='quantity-counter' onClick={()=>this.props.increaseQuantity(this.props.cartProduct)}>+</button>
            </div>
          </div>
          <div className='flex-2'>
            <button className='cart-delete' onClick={() => this.props.deleteItem(this.props.cartProduct)}>x</button>
            {this.props.modalWindow}
          </div>
        </div>
      )
    }
  }

export default CartProduct
