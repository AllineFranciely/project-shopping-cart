const fetchItem = async (id) => {
  try {
    const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const item = request.json();
    return item;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
