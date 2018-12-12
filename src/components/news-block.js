import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/style.css';

class NewsBlock extends React.Component {
  render() {
    return(
      <div className='blog-news-block'>
        <p className='blog-date'>
          05.08.2017
        </p>
        <p className='blog-header-news'>
          Вы еще не играли в Soulcalibur IV? Семь причин сделать это прямо сейчас
        </p>
        <img className='blog-img' src={require('../images/blog-1.jpg')}/>
        <p className='blog-text'>
          Не так давно состоялся выход Soulcalibur VI. VGTimes.RU разузнал, какие
          фишки выделяют игру на фоне конкурентов, и стоит ли ради них обратить
          внимание на экзотический файтинг из Японии.
        </p>
      </div>
    )
  }
}

export default NewsBlock;
