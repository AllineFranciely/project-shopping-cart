Projeto realizado para conclusão do bloco 9 do módulo de fundamentos do curso da Trybe.

Nesse projeto foram desenvolvidas as seguinteshabilidades:
- Fazer requisições a uma API *(Application Programming Interface)* do Mercado Livre;
- Utilizar os seus conhecimentos sobre JavaScript, CSS e HTML;
- Trabalhar com funções assíncronas;
- Implementar testes unitários.

Buscou-se atender os seguintes requisitos:
1. Crie uma listagem de produtos
(Este requisito pode ser feito em conjunto com o [requisito 8])(#8-desenvolva-testes-de-no-mínimo-25-de-cobertura-total-e-100-da-função-fetchproducts) se você optar por 
- O elemento com classe `.item` deve exibir a lista de produtos.

2. Adicione o produto ao carrinho de compras
(Este requisito pode ser feito em conjunto com o [requisito 9])
- O elemento com classe `.cart__items` deve adicionar o item escolhido, apresentando corretamente suas informações de id, título e preço.

3. Remova o item do carrinho de compras ao clicar nele.

4. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página
(Este requisito pode ser feito em conjunto com os requisitos [10])(#10-desenvolva-testes-de-no-mínimo-75-de-cobertura-total-e-100-da-função-savecartitems) e [11](#11-desenvolva-testes-para-atingir-100-de-cobertura-total-e-100-da-função-getsavedcartitems), se você optar por aplicar TDD, para isso basta olhar as orientações dos requisitos 10 e 11 e aplicar o que é solicitado em conjunto.

5. Some o valor total dos itens do carrinho de compras.

6. Implemente a lógica no botão `Esvaziar carrinho` para limpar o carrinho de compras.

7. Adicione um texto de "carregando" durante uma requisição à API.

8. Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`
> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.
- Teste se `fetchProducts` é uma função;
- Execute a função `fetchProducts` com o argumento "computador" e teste se `fetch` foi chamada;
- Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";
- Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo.
- Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

9. Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`
> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.
- Teste se `fetchItem` é uma função;
- Execute a função `fetchItem` com o argumento do item "MLB1615760527" e teste se `fetch` foi chamada;
- Teste se, ao chamar a função `fetchItem` com o argumento do item "MLB1615760527", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
- Teste se o retorno da função `fetchItem` com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item` que já está importado no arquivo.
- Teste se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

10. Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`
> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.
- Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado;
- Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para `saveCartItems`.

11. Desenvolva testes para atingir 100% de cobertura total e 100% da função `getSavedCartItems`
> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.
- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado;
- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro.
