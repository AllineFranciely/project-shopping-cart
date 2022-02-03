const sectionItems = document.querySelector('.items');
const cartItems = document.getElementsByClassName('cart_items');
const emptyCart = document.querySelector('.empty-cart');
const cart = document.querySelector('.cart');

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

const addProduct = async (sku) => {
  const addData = await fetchItem(sku);
  const addItem = createCartItemElement(addData); // insere o item no cart
  // cartItems.appendChild(addItem); 
  // addAmount(clickedProduct.price);
  saveCartItems(cartItems.innerHTML);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));

  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(button);
  button.addEventListener('click', () => addProduct(sku));
  return section;
}
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Cria a função de carregando: 
const loading = () => {
  const loadingAPI = document.createElement('h3');
  loadingAPI.className = 'loading';
  loadingAPI.innerText = 'carregando...';
  sectionItems.appendChild(loadingAPI);
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
    sectionItems.appendChild(productItem);
  });
  const load = document.querySelector('.loading');
  load.remove();
};

function clear() {
  emptyCart.addEventListener('click', () => {
    cartItems.innerHTML = '';
  });
}

function restoreItems() {
  cartItems.innerHTML = getSavedCartItems();
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => item.addEventListener('click', cartItemCLickListener));
}

window.onload = () => { 
  searchProducts('computador');
  restoreItems();
}; 