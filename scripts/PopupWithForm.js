import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(handleFormSubmit, popupSeletor) {
    super(PopupSelector);
    this.handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {}
  setEventListeners() {
    super.setEventListeners();
    super.popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSubmit();
    });
  }
}

const addCardPopup = new PopupWithForm(() => {}, "#popup-add-card");

addCardPopup.setEventListeners();
