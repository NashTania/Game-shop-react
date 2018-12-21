import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import addFetch from '../fetch-function.js'
import {  ADD_PRODUCT_TO_CART, GET_PRODUCTS, DELETE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../constants/active-types.js'
import { store } from '../reducers/reducer.js'

export function addToCart(product) {
  let cart = store.getState();
    return {
      type: ADD_PRODUCT_TO_CART,
      product: product
    }
  }

export function deleteItem(product) {
  return {
    type: DELETE_PRODUCT,
    product: product
  }
}

export function getProducts() {
  let cart = store.getState();
  if (cart.productsCart === null) {
    return (dispatch) => {
      return addFetch().then (
        data => {
          dispatch({
            type: GET_PRODUCTS,
            arr: JSON.parse(data.result)
          })
        }
      )
    }
  } else {
    return {
      type: GET_PRODUCTS,
      arr: cart.productsCart
    }
  }
}

export function increaseQuantity(product) {
  return {
    type: INCREASE_QUANTITY,
    product: product
  }
}

export function decreaseQuantity(product) {
  return {
    type: DECREASE_QUANTITY,
    product: product
  }
}
