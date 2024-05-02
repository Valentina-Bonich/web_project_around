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

//fx superposición y esc
export function handleOverlayClick(event) {
  if (event.target.classList.contains("popup")) {
    handleCloseCardForm();
    handleCloseProfileForm();
    handleCloseImage();
  }
}

export function handlerScapeClose(evt) {
  if (evt.key === "Escape") {
    handleCloseCardForm();
    handleCloseProfileForm();
    handleCloseImage();
  }
}

//abrir y cerrar profile form
export function handleOpenProfileForm() {
  popUpProfile.classList.add("popup_show");
  document.addEventListener("keydown", handlerScapeClose);
  popUpProfile.addEventListener("click", handleOverlayClick);
}

export function handleCloseProfileForm() {
  popUpProfile.classList.remove("popup_show");
  document.removeEventListener("keydown", handlerScapeClose);
}

export function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileParagraph.textContent = inputProfileAbout.value;
  handleCloseProfileForm();
}

//abrir y cerrar card form
export function handleOpenCardForm() {
  popUpCard.classList.add("popup_show");
  document.addEventListener("keydown", handlerScapeClose);
  popUpCard.addEventListener("click", handleOverlayClick);
}

export function handleCloseCardForm() {
  popUpCard.classList.remove("popup_show");
  document.removeEventListener("keydown", handlerScapeClose);
}


//abrir y cerrar imagen
export function handleOpenImage(title, link) {
  popUpTitle.textContent = title;
  popUpPicture.src = link;
  popUpImage.classList.add("popup_show");
  document.addEventListener("keydown", handlerScapeClose);
  popUpImage.addEventListener("click", handleOverlayClick);
}

export function handleCloseImage() {
  popUpImage.classList.remove("popup_show");
  document.removeEventListener("keydown", handlerScapeClose);
}
