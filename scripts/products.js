const listItems = [];
var product = document.querySelectorAll(".wrap__item");
var basketIcon = document.querySelectorAll(".basket");
var cartBox = document.querySelector(".cart-box");

for (let i = 0; i < product.length; i++) {
  console.log(product[i]);
  console.log(basketIcon[i]);

  basketIcon[i].addEventListener("click", function() {
    alert("Товар добавлен в корзину");
  })
}