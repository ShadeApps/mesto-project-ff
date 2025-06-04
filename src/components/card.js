function handleLikeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

function handleDeleteCard(cardElement) {
  cardElement.remove();
}

function createCard(cardData, handleDelete, handleLike, handleImageClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  
  deleteButton.addEventListener('click', () => handleDelete(cardElement));
  likeButton.addEventListener('click', handleLike);
  cardImage.addEventListener('click', () => handleImageClick(cardData));

  return cardElement;
}

export { createCard, handleDeleteCard, handleLikeCard }; 