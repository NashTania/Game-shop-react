import getUserId from '../make-id.js';
import sendRequest from '../send-request.js';
import { addToCart } from '../actions/actions.js';
import { connect } from 'react-redux';
import React from 'react';
import BoardGames from '../components/board-games-shop.js';
import { store } from '../redux-ex.js';

const boundAddProduct = (dispatch) => {
  const userId = getUserId()
  return {
    addToCart: (product) => {
      dispatch(addToCart(product))
      let cart = store.getState()
      console.log(cart.productsCart)
      sendRequest(sendRequest('tatiana_tkachenko_FD2_game_shop_cart_' + userId, cart.productsCart))
    }
  }
}

export default connect(null,
  boundAddProduct
)(BoardGames)



/*const body = new URLSearchParams();
body.set('f','READ');
body.set('n', 'tatiana_tkachenko_FD2_game_shop_cart_' + userId);
let cartProducts = fetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
  method: "POST",
  body: body
}).then(res => res.json()).then((data) => {
  let cartItems = JSON.parse(data.result);
  cartItems.push(product)
  sendRequest('tatiana_tkachenko_FD2_game_shop_cart_' + userId, cartItems)
  console.log('товар добавлен')
})*/
