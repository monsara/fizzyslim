(function($) {
  $(function() {
    $('.styler').styler();
  });
})(jQuery);

const page = document.querySelector('.page');
const orderForm = document.querySelector('.order-form');
const openModalBtns = document.querySelectorAll(
  '.button[data-action="open-modal"]',
);

openModalBtns.forEach(function(item) {
  item.addEventListener('click', handleOpenModal);
});

function handleOpenModal(evt) {
  evt.preventDefault();

  page.classList.add('show-modal');
  window.addEventListener('keydown', handleModalEscPress);
}
