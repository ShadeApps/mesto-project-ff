const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

import './styles/index.css';
import { initialCards } from './components/cards.js';

function handleDeleteCard(cardElement) {
  cardElement.remove();
}

function createCard(cardData, handleDelete) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  deleteButton.addEventListener('click', () => handleDelete(cardElement));

  return cardElement;
}

initialCards.forEach(cardData => {
  const card = createCard(cardData, handleDeleteCard);
  placesList.append(card);
});
