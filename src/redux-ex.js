import {connect} from 'react-redux';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app.js';
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
      return {
        productsCart: [
          ...state.productsCart,
          action.product
        ]
      }

    case DELETE_PRODUCT:
      return {
        productsCart:
          state.productsCart.filter((item) => {
            console.log(item)
            return item !== action.product
          })
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
  console.log(cart)

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

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const GET_PRODUCTS = 'GET_PRODUCTS';
//const RETURN_PRODUCTS = 'RETURN_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT'
