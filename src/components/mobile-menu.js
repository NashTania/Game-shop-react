import React from 'react';
import { Link} from "react-router-dom";
import '../css/style.css';


class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { visible: false }
  }

  handleClick() {
    this.setState(prev => ({ visible: !prev.visible }))
  }

  render() {
    return (
      <div className='mobile-menu'>
        <input id='hamburger' className='hamburger' type='checkbox' onClick={this.handleClick}/>
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
