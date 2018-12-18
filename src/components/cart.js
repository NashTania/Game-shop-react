import React from 'react';
import ReactDOM from 'react-dom'
import '../css/style.css';
import CartList from './cart-list.js';
import { store } from '../redux-ex.js';
import Modal from './modal.js'

class CartPage extends React.Component {

  constructor(props){
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state ={
      isLoaded: false,
      items: [],
      total: 0,
      showModal: false
    }
  }

  componentDidMount() {
    console.log(this.props.cartGame)
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

  handleShow() {
    this.setState({showModal: true});
  }

  handleHide() {
    this.setState({showModal: false});
  }

  getTotal (items) {
    let total = items.reduce((sum, current) => {
      return sum + (current.price * current.quantity)
    }, 0)
    return total
  }

  render () {
    const { isLoaded, items, filtredItems } = this.state;
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className='modal-text'>
            Товар удален
          </div>

          <button className='modal-button' onClick={this.handleHide}>Закрыть</button>
        </div>
      </Modal>
    ) : null;
    if(isLoaded) {
      return(
        <div>
          <div className='header-cart'>
            <p className='page-name'>
              Корзина
            </p>
            {modal}
          </div>
          <div id="modal-root"></div>
          <CartList cartProducts = {items} deleteItem={this.props.deleteItem}
            increaseQuantity={this.props.increaseQuantity} decreaseQuantity={this.props.decreaseQuantity} modal={this.handleShow}
            />
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




//modal={this.handleShow}
