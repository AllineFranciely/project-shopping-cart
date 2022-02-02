require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('1- Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('2 - Testa se ao executar a função com o argumento computador o fetch é chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('3- Testa se ao chamar fetchProducts com o argumento computador a função utiliza o endpoint esperado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });
  it('4- Testa se o retorno de fetchProducts com o argumento computador é igual ao objeto computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toBe(computadorSearch);
  });
  it('5- Testa se fetchProducts sem argumento retorna o erro esperado', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error ('You must provide an url'));
    }
  })
});
