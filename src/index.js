import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './css/style.css';
import MainPage from './components/main.js';
import NewsPage from './components/news.js';
import ShopPage from './shop-container.js';
import BoardGames from './board-game-container.js';
import CartPage from './cart-container.js';
import Contacts from './components/contacts.js';
import App from './components/app.js';
import Footer from './components/footer.js';
import { Provider } from 'react-redux';
import { store } from './redux-ex.js'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
          <Route exact path="/" component={MainPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/board-games-shop" component={BoardGames} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/cart" component={CartPage} />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
