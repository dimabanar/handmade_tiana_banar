"use strict"

var buttonReview = document.querySelector(".reviews__button");
var blockReview = document.querySelector(".block-review");
var backdropReview = document.querySelector(".backdrop-review");
var closeReviewBtn = document.querySelector(".close-review-btn");

buttonReview.addEventListener("click", function() {
  blockReview.classList.add("open");
  backdropReview.classList.add("open");
});

closeReviewBtn.addEventListener("click", function() {
  blockReview.classList.remove("open");
  backdropReview.classList.remove("open");
});