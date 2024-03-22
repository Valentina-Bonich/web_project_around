export class FormValidator {
  constructor(formElement, settings) {
    this.formElement = formElement;
    this.formSelector = settings.formSelector;
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this.inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
    this.buttonElement = this.formElement.querySelector(
      settings.submitButtonSelector
    );
    this.formList = Array.from(document.querySelectorAll(this.formSelector));
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
  }

  _showInputError(inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError();
    } else {
      hideInputError();
    }
  }

  _hasInvalidInput() {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(this.inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._checkInputValidity();
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}

//settings
//enableValidation({
//formSelector: ".popup__form",
//inputSelector: ".form__input",
//submitButtonSelector: ".form__button",
//inactiveButtonClass: "form__button_disabled",
//inputErrorClass: "form__input_type_error",
//errorClass: "form__error_visible",
//});
