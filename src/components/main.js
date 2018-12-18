import React  from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/style.css'

class MainPage extends React.Component {
  render() {
    const slider1 = require('../images/slider1.jpg');
    const slider2 = require('../images/slider2.jpg');
    const slider3 = require('../images/slider3.jpg');
    return(
      <div>
      <div id='slider'>
        <figure className='slider'>
          <figure>
            <img alt='slider' src={slider1} />
            <figcaption>
              <p className='figcaption-header'>
                The Witcher 3: Wild Hunt
              </p>
              <p className='figcaption-text'>
                одна из величайших
                ролевых игр последних лет
              </p>
            </figcaption>
          </figure>
          <figure>
            <img alt='slider'src={slider2} />
            <figcaption>
              <p className='figcaption-header'>
                The Last of Us Remastered
              </p>
              <p className='figcaption-text'>
              вторая часть очень популярной приключенческой экшен-игры
              </p>
            </figcaption>
          </figure>
          <figure>
            <img alt='slider'src={slider3} />
            <figcaption>
              <p className='figcaption-header'>
                God of War (2018)
              </p>
              <p className='figcaption-text'>
                расскажет совершенно новую эмоциональную историю
              </p>
            </figcaption>
          </figure>
            <figure>
              <img alt='slider' src={slider1} />
              <figcaption>
                <p className='figcaption-header'>
                  The Witcher 3: Wild Hunt
                </p>
                <p className='figcaption-text'>
                  одна из величайших
                  ролевых игр последних лет
                </p>
              </figcaption>
            </figure>
        </figure>
      </div>

      <div className='three-column-flex'>
        <div className='three-column-game'>
          <div className='three-column-img'>
            <img src={require('../images/BESTSELLER.jpg')} />
          </div>
          <p className='news-header'>
            God of War
          </p>
          <p className='news-text'>
            расскажет совершенно новую эмоциональную историю о путешествии Кратоса и даст
            игрокам переосмысленный геймплей с видом от третьего лица
          </p>
        </div>

        <div className='three-column-game'>
          <div className='three-column-img'>
            <img src={require('../images/MOST POPULAR.jpg')} />
          </div>
          <p className='news-header'>
            Marvel’s Spider-Man
          </p>
          <p className='news-text'>
            вы встретитесь с самым знаменитым супергероем всех времен, который
            обзавелся новыми зрелищными приемами
          </p>
        </div>

        <div className='three-column-game'>
          <div className='three-column-img'>
            <img src={require('../images/COMING SOON.jpg')} />
          </div>
          <p className='news-header'>
            Battlefield 5
          </p>
          <p className='news-text'>
            отправляет игроков на поля боевых действий разрушительной Второй Мировой войны.
             Игра рассказывает ранее неизвестные широкому кругу людей трагические
             военные истории того страшного времени
          </p>
        </div>
      </div>

      <p className='header-block'>
        Популярные товары
      </p>
      <div className='four-column-flex'>
        <div className='product-game'>
          <img className='product-img' src={require('../images/ps1.jpg')} />
          <p className='product-header'>
            Battlefield 1 Революция
          </p>
          <p className='product-price'>
            47 руб.
          </p>
          <button className='buy-product-button'>Купить</button>
        </div>

        <div className='product-game'>
          <img className='product-img' src={require('../images/ps2.jpg')}  />
          <p className='product-header'>
            Destiny 2
          </p>
          <p className='product-price'>
            68 руб.
          </p>
          <button className='buy-product-button'>Купить</button>
        </div>

        <div className='product-game'>
          <img className='product-img' src={require('../images/ps3.jpg')}  />
          <p className='product-header'>
            Need for Speed Payback
          </p>
          <p className='product-price'>
            80 руб.
          </p>
          <button className='buy-product-button'>Купить</button>
        </div>

        <div className='product-game'>
          <img className='product-img' src={require('../images/ps4.jpg')}  />
          <p className='product-header'>
            Middle-earth: Shadow of War
          </p>
          <p className='product-price'>
            47 руб.
          </p>
          <button className='buy-product-button'>Купить</button>
        </div>
      </div>

      <div className='news-main'>
        <p className='header-block-white'>
          Новости
        </p>
        <div className='news-main-block'>
          <div className='news-block'>
            <img src={require('../images/news1.jpg')} />
            <p className='news-block-header'>
              Red Dead Redemption 2 выйдет на iOS и Android в виде мобильного компаньона
            </p>
          </div>
          <div className='news-block'>
            <img src={require('../images/news2.jpg')} />
            <p className='news-block-header'>
              Авторы Battlefield 5 рассказали, когда выйдет королевская битва
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default MainPage;
