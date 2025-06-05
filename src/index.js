import './styles/index.css';
import { initialCards } from './components/cards.js';
import { createCard, handleDeleteCard, handleLikeCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';

import logoSrc from './images/logo.svg';
import avatarSrc from './images/avatar.jpg';

const placesList = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const editForm = document.querySelector('form[name="edit-profile"]');
const addForm = document.querySelector('form[name="new-place"]');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_url');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const closeButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');

const logoImg = document.querySelector('.header__logo');
const profileImage = document.querySelector('.profile__image');
logoImg.src = logoSrc;
profileImage.style.backgroundImage = `url(${avatarSrc})`;

function renderCard(cardData) {
  const cardElement = createCard(cardData, handleDeleteCard, handleLikeCard, handleImageClick);
  placesList.append(cardElement);
}

function handleImageClick(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(imagePopup);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editPopup);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
  const cardElement = createCard(newCard, handleDeleteCard, handleLikeCard, handleImageClick);
  placesList.prepend(cardElement);
  addForm.reset();
  closeModal(addPopup);
}

function fillEditForm() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

editButton.addEventListener('click', () => {
  fillEditForm();
  openModal(editPopup);
});

addButton.addEventListener('click', () => {
  openModal(addPopup);
});

editForm.addEventListener('submit', handleEditFormSubmit);
addForm.addEventListener('submit', handleAddFormSubmit);

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(popup));
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeModal(popup);
    }
  });
});

initialCards.forEach(renderCard);
