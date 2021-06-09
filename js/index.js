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

}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  
});
