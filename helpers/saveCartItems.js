const saveCartItems = (item) => localStorage.setItem('cartItems', item); // setItem recebe chave e valor e addiciona no storage.

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
