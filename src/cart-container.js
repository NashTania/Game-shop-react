import { getProducts } from './redux-ex.js';
import { connect } from 'react-redux';
import CartPage from './components/cart.js';
import { deleteItem } from './redux-ex.js';
import { store } from './redux-ex.js';
import sendRequest from './send-request.js';
import getUserId from './make-id.js';

  const mapStateToProps = (store) => {
    return {
      cartGame: store.productsCart
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
      }
    }
  }


 export default connect(
   mapStateToProps,
   boundGetProducts
 )(CartPage)
