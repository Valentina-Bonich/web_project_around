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
  document.addEventListener("keydown", HandlerScapeClose);
  popUpProfile.addEventListener("click", handleOverlayClick);
}

export function handleCloseProfileForm() {
  popUpProfile.classList.remove("popup_show");
  document.removeEventListener("keydown", HandlerScapeClose);
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
  document.addEventListener("keydown", HandlerScapeClose);
  popUpCard.addEventListener("click", handleOverlayClick);
}

export function handleCloseCardForm() {
  popUpCard.classList.remove("popup_show");
  document.removeEventListener("keydown", HandlerScapeClose);
}

export function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCard = CardGenerator(inputCardTitle.value, inputCardLink.value);
  cardArea.prepend(newCard);
  handleCloseCardForm();
}
//abrir y cerrar imagen
export function handleOpenImage(title, link) {
  popUpTitle.textContent = title;
  popUpPicture.src = link;
  popUpImage.classList.add("popup_show");
  document.addEventListener("keydown", HandlerScapeClose);
  popUpImage.addEventListener("click", handleOverlayClick);
}

export function handleCloseImage() {
  popUpImage.classList.remove("popup_show");
  document.removeEventListener("keydown", HandlerScapeClose);
}
