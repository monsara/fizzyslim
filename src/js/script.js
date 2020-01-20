(function($) {
  $(function() {
    $('.styler').styler();
  });
})(jQuery);

const page = document.querySelector('.page');
const modalBackdrop = document.querySelector('.modal-backdrop');
const orderForm = document.querySelector('.order-form');
const openModalBtns = document.querySelectorAll(
  '.button[data-action="open-modal"]',
);
const closeModalBtn = orderForm.querySelector(
  '.button[data-action="close-modal"]',
);

openModalBtns.forEach(function(item) {
  item.addEventListener('click', handleOpenModal);
});
closeModalBtn.addEventListener('click', handleCloseModalBtnClick);
modalBackdrop.addEventListener('click', handleModalBackdropClick);

function handleOpenModal(evt) {
  evt.preventDefault();

  page.classList.add('show-modal');
  window.addEventListener('keydown', handleModalEscPress);
}

function handleModalBackdropClick(evt) {
  const target = evt.target;
  const nodeName = target.nodeName;

  const parent = this.closest('.modal-backdrop');

  if (nodeName !== 'DIV') return;

  handleCloseModal(nodeName);
}

function handleCloseModalBtnClick(evt) {
  evt.preventDefault();

  const target = evt.target;
  const nodeName = target.nodeName;

  handleCloseModal(nodeName);
}

function handleCloseModal() {
  // remove show-madal class from page
  page.classList.remove('show-modal');
  // remove event listener handleModalEscPress from window
  window.removeEventListener('keydown', handleModalEscPress);
}

function handleModalEscPress(evt) {
  // determine the code of the pressed button and
  const key = evt.code;
  // close madal if the escape key was pressed
  if (key !== 'Escape') return;

  handleCloseModal();
}
