import React  from 'react';
import '../css/style.css';
import { Link } from "react-router-dom";
import { store } from '../redux-ex.js';

export default class CartQuantity extends React.Component {
  constructor(props) {
    super()
    this.state={
      quantity: 0
    }
  }

 componentDidMount() {
  this.props.getProducts().then(() => {
    this.setState({
      quantity: this.props.cartGame.length
    })
  })
}

 componentDidUpdate(prevProps) {
   if(prevProps.cartGame !== this.props.cartGame){
     this.setState({
       quantity: this.props.cartGame.length
     })
   }
 }

  render() {
    const cartImg = require('../images/cart.png');
    return(
      <div className='menu-full-cart'>
        <div className='cart-number'>
          <p>
            {this.state.quantity}
          </p>
        </div>
        <Link to='/cart'><img className='menu-cart' src={cartImg} alt='cart' /></Link>
      </div>
    )
  }
}
