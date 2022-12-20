let swiper

let width = window.matchMedia('(max-width: 767px)')
resize(width.matches)
function resize(event) {
  if (event) {
    swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 17,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

let wrapper = document.querySelector('.brend-list__wrapper')
let buttonBrendlist = document.querySelector('.brend-list__btn')
let btnIcon = document.querySelector('#brend-list__icon')
let btnText = document.querySelector('.btn__text-brend-list')

buttonBrendlist.onclick = function () {
  wrapper.classList.toggle('swiper-up')
  btnIcon.classList.toggle('btn__icon_rotate')
  btnText.innerHTML === 'Показать все'
    ? (btnText.innerHTML = 'Скрыть')
    : (btnText.innerHTML = 'Показать все')
}

let wrapperRepair = document.querySelector('.repair-list__wrapper')
let buttonRepairlist = document.querySelector('.btn-repair-list')
let btnIconRepair = document.querySelector('.btn__icon-repair-list')
let btnTextRepair = document.querySelector('.btn__text-repair-list')

buttonRepairlist.onclick = function () {
  wrapperRepair.classList.toggle('swiper-up')
  btnIconRepair.classList.toggle('btn__icon_rotate')
  btnTextRepair.innerHTML === 'Показать все'
    ? (btnTextRepair.innerHTML = 'Скрыть')
    : (btnTextRepair.innerHTML = 'Показать все')
}
/////open/close burger/////
let buttonBurgerOpen = document.querySelector('.button-burger-open')
let burger = document.querySelector('.burger')
let containerMain = document.querySelector('.container-main')
let buttonBurgerClose = document.querySelector('.burger__button-close')
let zoneClose = document.querySelector('.burger__zone-close')
let body = document.querySelector('body')

buttonBurgerOpen.onclick = function () {
  burger.classList.toggle('burger-open')
  containerMain.classList.toggle('container-main-blur')
  body.classList.add('body-overflow-hiden')
}

buttonBurgerClose.onclick = function () {
  burger.classList.remove('burger-open')
  containerMain.classList.remove('container-main-blur')
  body.classList.remove('body-overflow-hiden')
}

zoneClose.onclick = function () {
  burger.classList.remove('burger-open')
  containerMain.classList.remove('container-main-blur')
  body.classList.remove('body-overflow-hiden')
}

/////open/close modalfeedback/////
let burgerButtonChat = document.querySelector('.burger__button-chat')
let headerButtonChat = document.querySelector('.header__button-chat')
let modalFeedback = document.querySelector('.modal-feedback')
let buttonChatClose = document.querySelector('.button-close-feedback')
let zoneCloseFeedback = document.querySelector('.zone-close-feedback')
let focusInputName = document.querySelector('.input-name')

burgerButtonChat.onclick = function () {
  modalFeedback.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
  focusInputName.focus()
}

headerButtonChat.onclick = function () {
  modalFeedback.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
  focusInputName.focus()
}

buttonChatClose.onclick = function () {
  modalFeedback.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
}

zoneCloseFeedback.onclick = function () {
  modalFeedback.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
}

/////open/close modalcall/////
let burgerButtonCall = document.querySelector('.burger__button-call')
let headerButtonCall = document.querySelector('.header__button-call')
let modalCall = document.querySelector('.modal-call')
let buttonCallClose = document.querySelector('.buttom-close-call')
let zoneCloseCall = document.querySelector('.zone-close-call')
let focusInputCall = document.querySelector('.input-call')

burgerButtonCall.onclick = function () {
  modalCall.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
  focusInputCall.focus()
}

headerButtonCall.onclick = function () {
  modalCall.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
  focusInputCall.focus()
}

buttonCallClose.onclick = function () {
  modalCall.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-open')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
}

zoneCloseCall.onclick = function () {
  modalCall.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-open')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
}

/////text-info open/close/////
let btnTobe = document.querySelector('.info__button-tobe')
let textBox = document.querySelector('.info__p')
let btnIconTobe = document.querySelector('.info__btn-icon')
let btnTextTobe = document.querySelector('.info__btn-text')

btnTobe.onclick = function () {
  textBox.classList.toggle('info__p-up')
  btnIconTobe.classList.toggle('info__btn-icon_rotate')
  btnTextTobe.innerHTML === 'Читать далее'
    ? (btnTextTobe.innerHTML = 'Скрыть')
    : (btnTextTobe.innerHTML = 'Читать далее')
}
