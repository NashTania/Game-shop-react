import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import FilterPs from './shop-filter-ps.js';
import ProductsListPs from './shop-productsList-ps.js';
import sendRequest from '../send-request.js';

class ShopPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      filtredItems: [],
      filterId: []
    }
  }

  componentDidMount() {
    const body = new URLSearchParams();
    body.set('f', 'READ');
    body.set('n', 'tatiana_tkachenko_FD2_gameShop_products');

    fetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
      method: "POST",
      body: body
    }).then(res => res.json()).then((data) => {
      this.setState({
        isLoaded: true,
        items: JSON.parse(data.result),
        filtredItems: JSON.parse(data.result)
      })
    })
  }

  filterProducts = (event) => {
    if (event.currentTarget.checked === true) {
      this.state.filterId.push(event.currentTarget.id);
      this.filterRender()
    }
    if(event.currentTarget.checked === false) {
      const filterId = this.state.filterId.filter(item =>
        item != event.currentTarget.id
      )
      this.state.filterId = filterId;
      console.log()
      this.filterRender()
    }
  }

  filterRender() {
    if( this.state.filterId.length === 0) {
      this.setState ({
        filtredItems: this.state.items
      })
    } else {
      const result = this.state.items.filter((item) => {
        return this.state.filterId.indexOf(item.type) !== -1
      })
      this.setState({
        filtredItems: result
      })
    }
  }

  /*addToCart = (event) => {
    const items = this.state.items;
    addProductToCart(event, items)
  };*/

  render() {
    const { isLoaded, items, filtredItems } = this.state;
    if (isLoaded) {
      return (
        <div>
        <div className='header-game-ps'>
          <p className='page-name'>
            Игры для PS
          </p>
        </div>
        <div className='shop-content'>
          <FilterPs filterItems={this.filterProducts}/>
          <ProductsListPs products={filtredItems} addToCart={this.props.addToCart}/>
        </div>
      </div>
    )} else {
      return(
        <div>load</div>
      )
    }
  }
}

export default ShopPage;
