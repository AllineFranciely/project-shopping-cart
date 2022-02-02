const fetchProducts = async (query) => {
  try {
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return result.json();
  } catch(error) {
  throw new Error ('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
