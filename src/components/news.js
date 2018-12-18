import React  from 'react';
import NewsBlock from './news-block.js';
import '../css/style.css';

class NewsPage extends React.Component {
  render() {
    return(
      <div>
        <div className='header-blog'>
          <p className='page-name'>
            Новости
          </p>
        </div>
        <div className='blog'>
        <NewsBlock />
        </div>
      </div>
    )
  }
}
export default NewsPage;
