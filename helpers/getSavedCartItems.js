const getSavedCartItems = () => localStorage.getItem('cartItems'); // getItems acessa a chave passada e retorna seu valor.

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
