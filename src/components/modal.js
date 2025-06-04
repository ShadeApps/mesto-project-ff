function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalByEscape);
}

function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalByEscape);
}

function closeModalByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

export { openModal, closeModal }; 