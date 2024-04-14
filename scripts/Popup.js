export class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this.popupCloseButton = this.popupSelector.querySelector(
      "popup__close-button"
    );
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this.popupElement.classList.add("popup_show");
    document.addEventListener("click", this._handleEscClose);
  }

  close() {
    this.popupElement.classList.remove("popup_show");
    document.removeEventListener("click", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _isClickOutside(evt) {
    return evt.target.classList.contain("popup_show");
  }
  setEventListeners() {
    this.popupCloseButton.addEventListener("Click", () => {
      if (this._isClickOutside) {
        this.close();
      }
    });
  }
}
