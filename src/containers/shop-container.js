import getUserId from '../make-id.js';
import sendRequest from '../send-request.js';
import { addToCart } from '../actions/actions.js';
import { connect } from 'react-redux';
import React from 'react';
import ShopPage from '../components/shop.js';
import { store, addQuantityToCart } from '../reducers/reducer.js';

const boundAddProduct = (dispatch) => {
  const userId = getUserId()
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
      let cart = store.getState()
      sendRequest('tatiana_tkachenko_FD2_game_shop_cart_' + userId, cart.productsCart)
    }
  }
}

export default connect(null,
  boundAddProduct
)(ShopPage)
