import { getProducts } from '../actions/actions.js';
import { connect } from 'react-redux';
import CartQuantity from '../components/cart-quantity.js';
import { store } from '../reducers/reducer.js';
import { productsApp } from '../reducers/reducer.js'


  const mapStateToProps = (store) => {
    return {
      cartGame: store.productsCart
    }
  }
  const boundGetProducts = (dispatch) => {
    return {
      getProducts: () => {
        return dispatch(getProducts())
      }
    }
  }

 export default connect(
   mapStateToProps,
   boundGetProducts
 )(CartQuantity)
