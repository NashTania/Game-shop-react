import React  from 'react';
import '../css/style.css';
import BoardFilter from './board-filter.js';
import BoardList from './board-productList.js';
import Modal from './modal.js'

class BoardGames extends React.Component {

  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.state = {
      isLoaded: false,
      items: [],
      filtredItems: [],
      showModal: false
    }
  }

  componentDidMount() {
    const body = new URLSearchParams();
    body.set('f', 'READ');
    body.set('n', 'tatiana_tkachenko_FD2_gameShop_productsBoard');

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

  filterProduct = (event) => {
    console.log(event.target.value);

    const { isLoaded, items, filtredItems} = this.state;
    const itemsForFilter = items;
    if(event.target.value === 'not-selected'){
      this.setState({
        filtredItems: itemsForFilter
      })
    } else {
      const result = itemsForFilter.filter((product) => {
        return product.type === event.target.value
      })
      this.setState({
        filtredItems: result
      })
      console.log(result)
    }
  }

  handleShow() {
    this.setState({showModal: true});
  }

  handleHide() {
    this.setState({showModal: false});
  }

  /*addToCart = (event) => {
    const items = this.state.items;
    addProductToCart(event, items)
  };*/

  render() {
    const { isLoaded, items, filtredItems } = this.state;
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className='modal-text'>
            Товар добавлен
          </div>
          <button className='modal-button' onClick={this.handleHide}>Закрыть</button>
        </div>
      </Modal>
    ) : null;
    if (isLoaded) {
      return (
        <div>
          <div className='header-board-game'>
            <p className='page-name'>
              Настольные игры
            </p>
            {modal}
          </div>
          <div id="modal-root"></div>
          <div className='shop-content'>
            <BoardFilter filterFunc={this.filterProduct}/>
            <BoardList products={filtredItems} addToCart={this.props.addToCart} modal={this.handleShow}/>
          </div>
        </div>
      )
    } else {
      return (
        <div>load</div>
      )
    }
  }

}

export default BoardGames;
