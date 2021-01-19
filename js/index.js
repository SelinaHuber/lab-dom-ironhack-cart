// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('#cart > tbody > tr > td.quantity > input[type=number]').value;
  let subtotalPrice = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice
  return subtotalPrice
   //... your code goes here
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let totalSum = 0;
  for (let product of products){
      totalSum += updateSubtotal(product)
  }
  // ITERATION 3
  //const total= document.getElementById('total-value').children[0];
  const total= document.querySelector('#total-value span')
  console.log (total);

  total.innerHTML = totalSum;
}    

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


  };




// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
    for (let button of buttons){
      const buttons = document.getElementsByClassName('.btn.btn-remove');
      buttons.addEventListener('click', removeProduct);
          }
});
