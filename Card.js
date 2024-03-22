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
    popUpTitle.textContent = title;
    popUpPicture.src = link;
    popUpImage.classList.add("popup_show");
    document.addEventListener("keydown", HandlerScapeClose);
    popUpImage.addEventListener("click", handleOverlayClick);
  }
  _getCardClone() {
    this.card = this.template.cloneNode(true).content.querySelector(".element");
  }
  _setCardProperties() {
    this.cardTitle = this.card.querySelector(".element__photo-name");
    this.cardLink = this.card.querySelector(".element__photo");
    this.likeBtn = this.card.querySelector(".element__photo-heart");
    this.btnRemoveCard = this.card.querySelector(".element__photo-trash");

    this.cardTitle.textContent = this.title;
    this.cardLink.src = `https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/${this.number}.jpg`;
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
      this._handleOpenImage(title, link);
    });
  }

  generateCard() {
    this._getCardClone();
    this._setCardProperties();
    this.setEventListeners();
    return this.card;
  }
}
