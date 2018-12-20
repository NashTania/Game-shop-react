import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import addFetch from '../fetch-function.js'
import {  ADD_PRODUCT_TO_CART, GET_PRODUCTS, DELETE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../constants/active-types.js'

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
      const existigProduct = state.productsCart.find((product) => product.id === action.product.id)
      console.log(existigProduct)
      if (existigProduct === undefined) {
        action.product.quantity =  1
        return {
          productsCart: [
            ...state.productsCart,
            action.product
          ]
        }
      } else {
        console.log(existigProduct.quantity)
          action.product.quantity = existigProduct.quantity + 1
          debugger
            console.log(state.productsCart)
          return {
            productsCart: [...state.productsCart]
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
