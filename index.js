const popUpProfile = document.querySelector("#popup-profile");
const btnProfile = document.querySelector(".profile__button");
const btnCloseProfile = document.querySelector("#close-profile-form");
const profileName = document.querySelector(".profile__name");
const profileParagraph = document.querySelector(".profile__paragraph");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const btnSaveProfile = document.querySelector("#profile-form-button");
const formProfile = document.querySelector("#form-profile");
const btnAddCard = document.querySelector(".profile__add-button");
const popUpCard = document.querySelector("#popup-add-card");
const btnCloseCard = document.querySelector("#close-addcard-form");
const templateCard = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");
const formCard = document.querySelector("#form-addcard");
const inputCardTitle = document.querySelector("#input-title");
const inputCardLink = document.querySelector("#input-url");
const popUpImage = document.querySelector("#popup-image");
const btnCloseImage = document.querySelector("#close-image-button");
const popUpTitle = document.querySelector(".popup__picture-name");
const popUpPicture = document.querySelector(".popup__picture");
const overlayEdit = document.querySelector("#popup-overlay-edit");
const overlayAdd = document.querySelector("#popup-overlay-add");
const overlayImage = document.querySelector("popup-overlay-image");

inputProfileName.value = profileName.textContent;
inputProfileAbout.value = profileParagraph.textContent;

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
//fx superposición y esc
function handleOverlayClick(event) {
  if (event.target.classList.contains("popup")) {
    handleCloseCardForm();
    handleCloseProfileForm();
    handleCloseImage();
  }
}

function HandlerScapeClose(evt) {
  if (evt.key === "Escape") {
    handleCloseCardForm();
    handleCloseProfileForm();
    handleCloseImage();
  }
}
//abrir y cerrar profile form
function handleOpenProfileForm() {
  popUpProfile.classList.add("popup_show");
  document.addEventListener("keydown", HandlerScapeClose);
  popUpProfile.addEventListener("click", handleOverlayClick);
}

function handleCloseProfileForm() {
  popUpProfile.classList.remove("popup_show");
  document.removeEventListener("keydown", HandlerScapeClose);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileParagraph.textContent = inputProfileAbout.value;
  handleCloseProfileForm();
}

//abrir y cerrar card form
function handleOpenCardForm() {
  popUpCard.classList.add("popup_show");
}

function handleCloseCardForm() {
  popUpCard.classList.remove("popup_show");
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCard = CardGenerator(inputCardTitle.value, inputCardLink.value);
  cardArea.prepend(newCard);
  handleCloseCardForm();
}
//abrir y cerrar imagen
function handleOpenImage(title, link) {
  popUpTitle.textContent = title;
  popUpPicture.src = link;
  popUpImage.classList.add("popup_show");
}

function handleCloseImage() {
  popUpImage.classList.remove("popup_show");
}

//generar cartas nuevas
function CardGenerator(title, link) {
  const card = templateCard.cloneNode(true).content.querySelector(".element");
  const cardImage = card.querySelector(".element__photo");
  const cardTitle = card.querySelector(".element__photo-name");
  const likeButton = card.querySelector(".element__photo-heart");
  const btnRemoveCard = card.querySelector(".element__photo-trash");

  cardImage.src = link;
  cardTitle.textContent = title;
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("element__photo-heart_active");
  });
  btnRemoveCard.addEventListener("click", function () {
    card.remove();
  });
  cardImage.addEventListener("click", function () {
    handleOpenImage(title, link);
  });
  return card;
}

//eventos
btnProfile.addEventListener("click", handleOpenProfileForm);
btnCloseProfile.addEventListener("click", handleCloseProfileForm);
formProfile.addEventListener("submit", handleProfileSubmit);

btnAddCard.addEventListener("click", handleOpenCardForm);
btnCloseCard.addEventListener("click", handleCloseCardForm);
formCard.addEventListener("submit", handleCardSubmit);

btnCloseImage.addEventListener("click", handleCloseImage);

initialCards.forEach(function (element) {
  const newCard = CardGenerator(element.name, element.link);
  cardArea.append(newCard);
});
