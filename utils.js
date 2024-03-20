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
  document.addEventListener("keydown", HandlerScapeClose);
  popUpCard.addEventListener("click", handleOverlayClick);
}

function handleCloseCardForm() {
  popUpCard.classList.remove("popup_show");
  document.removeEventListener("keydown", HandlerScapeClose);
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
  document.addEventListener("keydown", HandlerScapeClose);
  popUpImage.addEventListener("click", handleOverlayClick);
}

function handleCloseImage() {
  popUpImage.classList.remove("popup_show");
  document.removeEventListener("keydown", HandlerScapeClose);
}
