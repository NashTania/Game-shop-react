import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import MobileMenu from './mobile-menu.js';
import '../css/style.css';
import CartQuantity from '../cart-quantity-container.js'


class App extends React.Component {
  render() {
    return(
    <div className='menu'>
      <Link to='/' className='logo'>
        GAMES
      </Link>
      <div className='flex-menu'>
        <div className='menu-full'>
          <Link to='/news' className='menu-item'>новости</Link>
          <Link to='/shop' className='menu-item'>игры PS</Link>
          <Link to='/board-games-shop' className='menu-item'>настольные игры</Link>
          <Link to='/contacts' className='menu-item'>контакты</Link>
        </div>
        </div>

        <CartQuantity />

        <MobileMenu />

    </div>
    )
  }
}
export default App;
