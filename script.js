// const sectionItems = document.querySelector('.items');
// const cartItems = document.getElementsByClassName('cart__items');
const emptyCart = document.querySelector('.empty-cart');
const cart = document.querySelector('.cart');
const itemsScreen = document.querySelector('.items');

function createProductImageElement(imageSource) {
const img = document.createElement('img');
img.className = 'item__image';
img.src = imageSource;
return img;
}
function createCustomElement(element, className, innerText) {
const e = document.createElement(element);
e.className = className;
e.innerText = innerText;
return e;
}

function cartItemClickListener(event) {
cartItems = document.querySelector('.cart__items');
cartItems.removeChild(event.target);
saveCartItems(cartItems.innerHTML);
}

function createCartItemElement({ sku, name, salePrice }) {
const li = document.createElement('li');
li.className = 'cart__item';
li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
li.addEventListener('click', cartItemClickListener);
return li;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function clickCart(product) {
  const sectionItems = document.querySelector('.cart__items');
  const itemsCart = createCartItemElement(product);
  sectionItems.appendChild(itemsCart);
}

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

/* sectionItems.addEventListener('click', async (event) => {
const itemID = event.target.parentNode.firstChild.innerText;
const addItem = await addProduct(id);
cartItems.appendChild(addItem);
saveCartItems(cartItems.innerHTML);
}); 

function productsButtonCart() {
const buttons = document.querySelectorAll('.item_add');
buttons.forEach((button) => {
button.addEventListener('click', addProduct);
});
} */

function createProductItemElement({ sku, name, image }) {
const section = document.createElement('section');
section.className = 'item';
section.appendChild(createCustomElement('span', 'item__sku', sku));
section.appendChild(createCustomElement('span', 'item__title', name));
section.appendChild(createProductImageElement(image));

const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
section.appendChild(button);
// button.addEventListener('click', () => addProduct(id));
return section;
}

// Cria a função de carregando: 
const loading = () => {
const loadingAPI = document.createElement('h3');
loadingAPI.className = 'loading';
loadingAPI.innerText = 'carregando...';
itemsScreen.appendChild(loadingAPI);
};

// Adiciona lista de produtos: 
const searchProducts = async (product) => {
loading();
const search = await fetchProducts(product);
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

function clear() {
emptyCart.addEventListener('click', () => {
cartItems.innerHTML = '';
localStorage.clear();
document.querySelector('.price').innerText = 0;
});
}

/* function restoreItems() {
  sectionItems.innerHTML = getSavedCartItems();
const cartItem = document.querySelectorAll('.cart__item');
cartItem.forEach((item) => item.addEventListener('click', cartItemCLickListener));
} */ 

window.onload = () => { 
searchProducts('computador');
// restoreItems();
}; 
