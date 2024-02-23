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

//abrir y cerrar profile form
function handleOpenProfileForm() {
  popUpProfile.classList.add("popup_show");
}

function handleCloseProfileForm() {
  popUpProfile.classList.remove("popup_show");
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

function CardGenerator(title, url) {
  const cardClone = templateCard.textContent.querySelector(".element");
  const cardImage = cardClone.querySelector(".element__photo");
  const cardTitle = cardClone.querySelector(".element__photo-name");
  cardImage.src = link;
  cardTitle.textContent = title;
}

btnProfile.addEventListener("click", handleOpenProfileForm);
btnCloseProfile.addEventListener("click", handleCloseProfileForm);
formProfile.addEventListener("submit", handleProfileSubmit);

btnAddCard.addEventListener("click", handleOpenCardForm);
btnCloseCard.addEventListener("click", handleCloseCardForm);
