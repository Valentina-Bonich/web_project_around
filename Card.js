export class Card {
  constructor(title, link, template) {
    this.title = title;
    this.link = link;
    this.template = template;
  }

  _handleRemoveCard() {
    this.card.remove();
  }
  _handleButtonStatus() {
    this.likeBtn.classList.toggle("element__photo-heart_active");
  }
  _handleOpenImage() {
    const popUpImage = document.querySelector("#popup-image");
    popUpTitle.textContent = this.title;
    popUpPicture.src = this.link;
    popUpImage.classList.add("popup_show");
    document.addEventListener("keydown", HandlerScapeClose);
    popUpImage.addEventListener("click", handleOverlayClick);
  }
  _getCardClone() {
    this.card = this.template.cloneNode(true).content.querySelector(".element");
  }
  _setCardProperties() {
    console.log(this.link);
    this.cardTitle = this.card.querySelector(".element__photo-name");
    this.cardLink = this.card.querySelector(".element__photo");
    this.likeBtn = this.card.querySelector(".element__photo-heart");
    this.btnRemoveCard = this.card.querySelector(".element__photo-trash");

    this.cardTitle.textContent = this.title;
    this.cardLink.src = this.link;
    this.cardLink.alt = this.title;
  }

  setEventListeners() {
    this.btnRemoveCard.addEventListener("click", () => {
      this._handleRemoveCard();
    });
    this.likeBtn.addEventListener("click", () => {
      this._handleButtonStatus();
    });
    this.cardLink.addEventListener("click", () => {
      this._handleOpenImage();
    });
  }

  generateCard() {
    this._getCardClone();
    this._setCardProperties();
    this.setEventListeners();
    return this.card;
  }
}
