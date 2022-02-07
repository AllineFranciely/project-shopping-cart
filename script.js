const sectionItems = document.querySelector('.cart__items');
const itemsScreen = document.querySelector('.items');

// Cria elemento de imagem e adiciona na tela no fornecimento do parâmetro:
function createProductImageElement(imageSource) {
const img = document.createElement('img');
img.className = 'item__image';
img.src = imageSource;
return img;
}

// Cria novos elementos ao receber os parâmetros:
function createCustomElement(element, className, innerText) {
const e = document.createElement(element);
e.className = className;
e.innerText = innerText;
return e;
}

// acessa o valor e cria a soma (requsiito 5):
function sumPrices() {
  const precoItems = document.querySelectorAll('.cart__item');
  let sum = 0;
  precoItems.forEach((preco) => { 
    const prices = preco.innerText.split('$')[1]; // transforma string em array e acessa o primeiro elemento.
      sum += Number(prices); // transforma o price em número.
    }); 
    return sum;
}

// joga a soma no .totalPrice para aparecer na tela (requsito 5):
  function createTotalPrice() {
    const totalPrice = document.querySelector('.total-price');
    totalPrice.innerHTML = sumPrices();
  }

// Elimina item clicado do cart (requisito 3): 
function cartItemClickListener(event) {
event.target.remove();
saveCartItems(sectionItems.innerHTML);
createTotalPrice();
}

// Cria o item da lista:
function createCartItemElement({ sku, name, salePrice }) {
const li = document.createElement('li');
li.className = 'cart__item';
li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
li.addEventListener('click', cartItemClickListener);
return li;
}

// Puxa o parent do botão e encontra o ID na classe item__sku (eequisito 2):
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Requisito 2:
function clickCart(product) {
const itemsCart = createCartItemElement(product);
sectionItems.appendChild(itemsCart);
saveCartItems(sectionItems.innerHTML);
createTotalPrice();
}

// Requisito 2: 
const addProduct = async (event) => {
const items = getSkuFromProductItem(event.target.parentElement); // estudar parentElement
const addData = await fetchItem(items); // traz objeto com atributos do produto.
const infos = {
sku: addData.id,
name: addData.title,
salePrice: addData.price,
};
clickCart(infos);
};

// Ao receber o obj cria e organiza os elementos através dos dados obtidos:
function createProductItemElement({ sku, name, image }) {
const section = document.createElement('section');
section.className = 'item';
section.appendChild(createCustomElement('span', 'item__sku', sku));
section.appendChild(createCustomElement('span', 'item__title', name));
section.appendChild(createProductImageElement(image));
const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
section.appendChild(button);
return section;
}

// Cria a função de carregando (requisito 7): 
const loading = () => {
const loadingAPI = document.createElement('h3');
loadingAPI.className = 'loading';
loadingAPI.innerText = 'carregando...';
itemsScreen.appendChild(loadingAPI);
};

// Adiciona lista de produtos (requisito 1): 
const searchProducts = async (products) => {
loading();
const search = await fetchProducts(products);
// console.log(search);
search.results.forEach((item) => {
const productProject = {
sku: item.id,
name: item.title,
image: item.thumbnail,
};
const productItem = createProductItemElement(productProject);
itemsScreen.appendChild(productItem);
itemsScreen.addEventListener('click', addProduct);
});
const load = document.querySelector('.loading');
load.remove();
};

// Implementa a lógica do botão de esvaziar carrinho (requisito 6):
const buttonCleadCart = document.querySelector('.empty-cart');
buttonCleadCart.addEventListener('click', () => {
sectionItems.innerHTML = '';
saveCartItems(sectionItems.innerHTML);
createTotalPrice();
});

// Restaura os itens no carrinho quando recarrega (requisito 4):
function restoreItems() {
sectionItems.innerHTML = getSavedCartItems();
const cartItem = document.querySelectorAll('.cart__item');
cartItem.forEach((item) => item.addEventListener('click', cartItemClickListener)); // adiciona de novo o evento do requisito 3.
} 
// O colega Davíd Rogér - T19-B, me ajudou na lógica da questão 4. 

// const refresh = getSavedCartItems();
// console.log(typeof refresh);
// const arrayRefresh = refresh.split(''); // o .split transforma minha string refresh em array para que ela possa receber o evento do forEach.
// console.log( arrayRefresh);
// arrayRefresh.forEach((element) => element.addEventListener('click', cartItemClickListener));
// sectionItems.innerHTML = refresh;

window.onload = () => { 
searchProducts('computador');
restoreItems();
createTotalPrice();
};
