import React  from 'react';
import '../css/style.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  clickFunction(event) {
    this.props.addToCart(this.props.product);
    this.props.modal()
  }

  render() {
  let src = require('../images/' + this.props.product.src);
    return(
      <div className='product-game'>
        <img className='product-img' src={src} alt='product'/>
        <p className='product-header'>
        {this.props.product.name}
        </p>
        <p className='product-price'>
          {this.props.product.price} руб.
        </p>
        <button className='buy-product-button' data-id={this.props.product.id} onClick={() => this.clickFunction()}>Купить</button>
      </div>
    )
  }
}

export default Product;
