import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import CartList from './cart-list.js';
import getUserId from '../make-id.js'
import sendRequest from '../send-request.js';
import { store } from '../redux-ex.js';


class CartPage extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      isLoaded: false,
      items: [],
      total: 0
    }
  }

  componentDidMount() {
    if ( this.props.cartGame === null ) {
    this.props.getProducts().then((data) => {
        this.setState({
          isLoaded: true,
          items: this.props.cartGame,
          total: this.getTotal(this.props.cartGame)
        })
      })
    } else {
      this.setState({
        isLoaded: true,
        items: this.props.cartGame,
        total: this.getTotal(this.props.cartGame)
      })
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.cartGame !== this.props.cartGame) {
      this.setState({
        isLoaded: true,
        items: this.props.cartGame,
        total: this.getTotal(this.props.cartGame)
      })
    }
  }

  getTotal (items) {
    //const {items} = this.state;
    let total = items.reduce((sum, current) => {
      return sum + current.price
    }, 0)
    return total
  }

  render () {
    const { isLoaded, items, filtredItems } = this.state;
    if(isLoaded) {
      return(
        <div>
          <div className='header-cart'>
            <p className='page-name'>
              Корзина
            </p>
          </div>
          <CartList cartProducts = {items} deleteItem={this.props.deleteItem}/>
          <p className='total'>
            Итого: {this.state.total} руб.
          </p>
        </div>
      )
    } else {
      return (
        <div>load</div>
    )}
  }
}

export default CartPage;
/*deleteItem = (cartProduct) => {
  const userId = getUserId();
  const {items} = this.state;
  let result = items.filter((product) => {
    return cartProduct.id != product.id
  })
  sendRequest('tatiana_tkachenko_FD2_game_shop_cart_' + userId, result);
  this.setState({
    items: result,
    total: this.getTotal(result)
  })
}*/

/*let userId = getUserId();
const body = new URLSearchParams();
body.set('f','READ');
body.set('n', 'tatiana_tkachenko_FD2_game_shop_cart_' + userId);

fetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
  method: "POST",
  body: body
})*/
