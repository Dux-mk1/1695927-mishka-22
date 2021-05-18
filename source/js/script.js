//Header-nav

const navMain = document.querySelectorAll('.header-nav');
const navToggle = document.querySelector('.page-header__toggle');
const logo = document.querySelector('.page-header__logo');

logo.classList.remove('page-header__logo--nojs')
navToggle.classList.add('page-header__toggle--js')


for (let item of navMain) {
  item.classList.remove('header-nav--nojs');

  if (item.classList.contains('header-nav--opened')) {
    item.classList.remove('header-nav--opened');
    item.classList.add('header-nav--closed');
  }
}

for (let item of navMain) {
  navToggle.addEventListener('click', function() {
    if (item.classList.contains('header-nav--closed')) {
      navToggle.classList.add('page-header__toggle--closed')
      item.classList.remove('header-nav--closed');
      item.classList.add('header-nav--opened');
    } else {
      navToggle.classList.remove('page-header__toggle--closed')
      item.classList.add('header-nav--closed');
      item.classList.remove('header-nav--opened');
    }
  });
}

//Modal-buy

const buttonBuy = document.querySelectorAll('.product__buy');
const modalBuy = document.querySelector('.modal');
const modalClick = document.querySelector('.modal__click')

for (let item of buttonBuy) {
  item.addEventListener('click', function () {
    modalBuy.classList.add('modal--open')
  });
}

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modalBuy.classList.remove('modal--open');
  }
});

modalClick.addEventListener('click', function () {
  modalBuy.classList.remove('modal--open')
})
