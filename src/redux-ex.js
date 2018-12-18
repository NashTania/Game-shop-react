import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import addFetch from './fetch-function.js'

const initalState = {
  productsCart: null
}

export function productsApp(state = initalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        productsCart: action.arr
      }

    case ADD_PRODUCT_TO_CART:
      if (state.productsCart.indexOf(action.product) === -1) {
        action.product.quantity = (action.product.quantity || 0) + 1
        return {
          productsCart: [
            ...state.productsCart,
            action.product
          ]
        }
      } else {
          action.product.quantity = action.product.quantity + 1
          return {
            productsCart: state.productsCart
          }
      }

    case DELETE_PRODUCT:
      return {
        productsCart:
          state.productsCart.filter((item) => {
            return item !== action.product
          })
      }

    case INCREASE_QUANTITY:
      action.product.quantity = action.product.quantity + 1
        return {
          productsCart: [
            ...state.productsCart
          ]
        }

    case DECREASE_QUANTITY:
      action.product.quantity = action.product.quantity - 1
        return {
          productsCart: [
            ...state.productsCart
          ]
        }


    default:
      return state
  }
}

export const store = createStore(productsApp, applyMiddleware(thunk))

export function addToCart(product) {
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
        data => dispatch({
          type: GET_PRODUCTS,
          arr: JSON.parse(data.result)
        })
      )
    }
  } else {
    return {
      type: GET_PRODUCTS,
      arr: store.productsCart
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


const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const GET_PRODUCTS = 'GET_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
