const orderBox = document.querySelectorAll('.order-box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  orderBox.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
};