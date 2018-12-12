import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Route, Link} from "react-router-dom";
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/style.css';

class MobileMenu extends React.Component {
  render() {
    return (
      <div className='mobile-menu'>
        <input rel='hamburger' className='hamburger' type='checkbox'/>
        <label htmlFor='hamburger' className='hamburger'>
          <i></i>
        </label>

        <ul className='menu-list'>
          <li>
            <Link to='/news'>новости</Link>
          </li>
          <li>
            <Link to='/shop'>игры PS</Link>
          </li>
          <li>
            <Link to='/board-games-shop'>настольные игры</Link>
          </li>
          <li>
            <Link to='/contacts'>контакты</Link>
          </li>
          <li>
            <Link to='/cart'>корзина</Link>
          </li>

        </ul>

      </div>
    )
  }
}
export default MobileMenu;
