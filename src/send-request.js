import { store } from './redux-ex.js';
//import addFetch from './fetch-function.js'

function sendRequest(key, value) {
  let cart = store.getState()
  console.log(cart.productsCart)
    if (cart.productsCart !== null){
      const body = new URLSearchParams();
      body.set('f', 'LOCKGET');
      body.set('n', key);
      body.set('p', '111');

      fetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
        method: "POST",
        body: body
      }).then(res => res.json()).then((data) => {
        const body = new URLSearchParams();
        body.set('f', 'UPDATE');
        body.set('n', key);
        body.set('p', '111');
        body.set('v', JSON.stringify(value));

        fetch("https://fe.it-academy.by/AjaxStringStorage2.php",{
          method: "POST",
          body: body
        })
      })
    } else {
      const body = new URLSearchParams();
      body.set('f', 'INSERT');
      body.set('n', key);
      body.set('v', JSON.stringify(value));

    fetch("https://fe.it-academy.by/AjaxStringStorage2.php",{
      method: "POST",
      body: body
    })
  }
}



export default sendRequest;
