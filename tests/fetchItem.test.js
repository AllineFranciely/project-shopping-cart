require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('1- Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('2- Testa se fetchItem chama a fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('3- Testa se a função utiliza determinado endpoint ao ser chamada com determinado argumento', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('4- Testa se o retorno da função com o argumento MLB1615760527 é igual ao objeto item', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toBe(item);
  });
  it('5 - Testa se a função devolve um erro quando não passado parâmetro', async () => {
    try {
      await fetchItem()
    }catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
