//deleteItemimport { getProducts } from '../actions/actions.js';
import { connect } from 'react-redux';
import CartPage from '../components/cart.js';
//import { deleteItem } from '../actions/actions.js';
import { store } from '../redux-ex.js';
import sendRequest from '../send-request.js';
import getUserId from '../make-id.js';
import { increaseQuantity, getProducts, deleteItem } from '../actions/actions.js';
import {  decreaseQuantity } from '../actions/actions.js';

  const mapStateToProps = (store) => {
    return {
      cartGame: store.productsCart,
      productQuantity: store.quantityById
    }
  }

  const boundGetProducts = (dispatch) => {
    const userId = getUserId()
    return {
      getProducts: () => {
        return dispatch(getProducts())
      },
      deleteItem: (product) => {
        dispatch(deleteItem(product));
        let cart = store.getState();
        sendRequest(sendRequest('tatiana_tkachenko_FD2_game_shop_cart_' + userId, cart.productsCart))
      },
      increaseQuantity: (product) => {
        dispatch(increaseQuantity(product));
        let cart = store.getState();
        console.log(cart.productsCart)
      },
      decreaseQuantity: (product) => {
        dispatch(decreaseQuantity(product))
        let cart = store.getState();
        console.log(cart.productsCart)
        if(product.quantity === 0) {
          dispatch(deleteItem(product))
        }
      }
    }
  }


 export default connect(
   mapStateToProps,
   boundGetProducts
 )(CartPage)
