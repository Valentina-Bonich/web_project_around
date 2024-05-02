import "./pages/index.css";
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { Section } from "./scripts/Section.js";
import { Popup } from "./scripts/Popup.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { UserInfo } from "./scripts/UserInfo.js";
import {
  handleOverlayClick,
  handlerScapeClose,
  handleOpenProfileForm,
  handleCloseProfileForm,
  handleProfileSubmit,
  handleOpenCardForm,
  handleCloseCardForm,
  handleCloseImage,
} from "./utils.js";

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

const sectionCard = new Section(
  {
    items: initialCards,
    renderer: function (element) {
      const newCard = new Card(
        element.name,
        element.link,
        templateCard,
        handleCardClick
      );
      sectionCard.addItem(newCard.generateCard());
    },
  },
  "elements"
);

function handleCardClick(title, link) {
  const popUpImage = document.querySelector("#popup-image");
  popUpTitle.textContent = title;
  popUpPicture.src = link;
  popUpImage.classList.add("popup_show");
  document.addEventListener("keydown", handlerScapeClose);
  popUpImage.addEventListener("click", handleOverlayClick);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(
    inputCardTitle.value,
    inputCardLink.value,
    templateCard,
    handleCardClick
  );
  sectionCard.addItem(newCard.generateCard());
  handleCloseCardForm();
}

//eventos
btnProfile.addEventListener("click", handleOpenProfileForm);
btnCloseProfile.addEventListener("click", handleCloseProfileForm);
formProfile.addEventListener("submit", handleProfileSubmit);

btnAddCard.addEventListener("click", handleOpenCardForm);
btnCloseCard.addEventListener("click", handleCloseCardForm);
formCard.addEventListener("submit", handleCardSubmit);

btnCloseImage.addEventListener("click", handleCloseImage);

//instancias de clases para cada tarjeta y para formularios
initialCards.forEach(function (element) {
  const newCard = new Card(
    element.name,
    element.link,
    templateCard,
    handleCardClick
  );
  cardArea.append(newCard.generateCard());
});

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const formProfileValidate = new FormValidator(formProfile, settings);
formProfileValidate.enableValidation();

const formAddCardValidate = new FormValidator(formCard, settings);
formAddCardValidate.enableValidation();

const addCardPopup = new PopupWithForm(() => {
  evt.preventDefault();
  const newCard = new Card(
    inputCardTitle.value,
    inputCardLink.value,
    templateCard,
    handleCardClick
  );
  sectionCard.addItem(newCard.generateCard());
}, "#popup-add-card");

addCardPopup.setEventListeners();
