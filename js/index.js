// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let subTotal = Number(price) * Number(quantity);

  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0;

  let products = document.querySelectorAll('.product');

  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  document.getElementById('total-value').innerHTML = `Total: $${totalPrice}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode;
  const grandParent = parent.parentNode;
  const greatGrandParent = grandParent.parentNode;

  console.log(grandParent);

  greatGrandParent.removeChild(grandParent);
}

// ITERATION 5

function createProduct() {
  const newProductName = document.getElementById("new-product-name");
  const newProductPrice = document.getElementById("new-product-price");

  const productList = document.getElementById("product-list");
  productList.innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  newProductName.value = "";
  newProductPrice.value = 0;
  removeProduct();
  
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const addButton = document.getElementById("create");
  addButton.onclick = createProduct;
  
  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);
  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  
  });
});
