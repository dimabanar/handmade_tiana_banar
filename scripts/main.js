"use strict"

/* search section */
var searchBtn = document.querySelector("#search-btn");
var searchBox = document.querySelector("#search-box");
var searchClose = document.querySelector(".search-box__label");

searchBtn.addEventListener("click", function() {
  searchBox.classList.toggle("open");
});

searchClose.addEventListener("click", function() {
  searchBox.classList.remove("open");
});


/* search section  */


/* mobile menu */
var backdropBurger = document.querySelector(".backdrop-burger");
var burgerBtn = document.querySelector("#burger-btn");
var mobileNav = document.querySelector(".mobile-nav");
var closeBtn = document.querySelectorAll(".close-btn");

burgerBtn.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdropBurger.classList.add("open");
});

backdropBurger.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  backdropBurger.classList.remove("open");
});
/* mobile menu */
/* close btn on cart section and mobile section  */
for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function() {
    mobileNav.classList.remove("open");
    backdropBurger.classList.remove("open");
    cartBox.classList.remove("open");
    backdropCart.classList.remove("open");
  });
}
/* close btn on cart section and mobile section  */
/* cart section starts */
var cartBtn = document.querySelector("#cart-btn");
var backdropCart = document.querySelector(".backdrop-cart");
var cartBox = document.querySelector(".cart-box");

cartBtn.addEventListener("click", function() {
  backdropCart.classList.add("open");
  cartBox.classList.add("open");
});

backdropCart.addEventListener("click", function() {
  backdropCart.classList.remove("open");
  cartBox.classList.remove("open");
});
/* cart section ends */

/* button UP */
arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
/* button UP */