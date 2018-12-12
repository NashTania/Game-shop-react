function makeId () {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

function getUserId() {
  let userId = localStorage.getItem('tatiana_tkachenko_FD2_game_cart_products');
    if (!userId) {
      userId = makeId();
      localStorage.setItem('tatiana_tkachenko_FD2_game_cart_products', userId);
    }
    return userId;
}

export default getUserId;
