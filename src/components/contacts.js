import React  from 'react';
import '../css/style.css';

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <div className='header-game-ps'>
          <p className='page-name'>
            Контакты
          </p>
        </div>
        <div className="contacts-paragraph">
          <p className="contacts-header">
            Адрес
          </p>
          <p className="contacts-text">
            Минск, <br /> ул. Острожских, дом 12.
          </p>
        </div>

        <div className="contacts-paragraph">
          <p className="contacts-header">
            Время работы
          </p>
          <p className="contacts-text">
            с 9:00 до 20:00 ежедневно
          </p>
        </div>

        <div className="contacts-paragraph">
          <p className="contacts-header">
            Контакты
          </p>
          <p className="contacts-text">
            <b>e-mail: </b><br /> supertort.by@gmail.com
          </p>
          <p className="contacts-text">
            <b>Телефон: </b><br /> +375 (44) 577-71-77
          </p>
          <p className="contacts-text">
            <b>Мобильный: </b><br /> +375 (29) 538-77-76
          </p>
        </div>
      </div>
    )
  }
}

export default Contacts;
