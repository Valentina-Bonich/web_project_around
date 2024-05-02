import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(handleFormSubmit, popupSelector) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement = this.popupElement.querySelector(".popup__form");
  }
  _getInputValues() {
    return {
      name: this.popupSelector.querySelector("#input-name").value,
      link: this.popupSelector.querySelector("#input-about").value,
    };
  }

  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSubmit();
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}
