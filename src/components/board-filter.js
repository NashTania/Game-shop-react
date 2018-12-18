import React from 'react';
import '../css/style.css';

function BoardFilter (props) {
    return (
      <select name="salutation" id="salutation" onChange={props.filterFunc}>
        <option defaultValue='not-selected'>Выберите категорию</option>
        <option value="board-games">Настольные игры</option>
        <option value="card-games">Карточные игры</option>
        <option value="game-for-kids">Игры для детей</option>
        <option value="gift-baskets">Подарочные наборы</option>
        <option value="star-wars">Star Wars</option>
      </select>
    )
  }

export default BoardFilter;
