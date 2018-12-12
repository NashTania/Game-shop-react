import getUserId from './make-id.js';

export default function addFetch() {
  let userId = getUserId();
  const body = new URLSearchParams();
  body.set('f','READ');
  body.set('n', 'tatiana_tkachenko_FD2_game_shop_cart_' + userId);

  return fetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
    method: "POST",
    body: body
  }).then(res => res.json())
}
