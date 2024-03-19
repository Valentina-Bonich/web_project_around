const templateCard = document.querySelector(".template-card");

export class Card {
  constructor(title, image) {
    this.title = title;
    this.image = image;
  }
  setCardProperties() {
    this._card = templateCard.cloneNode(true).content.querySelector(".element");
    this.cardTitle = this.card.querySelector(".element__photo-name");
    this.cardImage = this.card.querySelector(".element__photo");
    this.likeBtn = this.card.querySelector(".element__photo-heart");
    this.btnRemoveCard = this.card.querySelector(".element__photo-trash");

    this.cardTitle.textContent = this.title;
    this.cardImage.src = `https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/${this.number}.jpg`;
    this.cardImage.alt = this.title;
  }

  handleDelete() {
    this._card.remove();
  }

  _setEventListeners() {
    this.btnRemoveCard.addEventListener("click", () => {
      this.handleDelete();
    });
    this.likeBtn.addEventListener("click", () => {
      this.likeBtn.classList.toggle("element__photo-heart_active");
    });
    this.cardImage.addEventListener("click", () => {
      this.handleOpenImage(title, link);
    });
  }

  generateCard() {
    this.setCardProperties();
    this._setEventListeners();
    return this._card;
  }
}

//objeto
//const CardCard = {
//card: document.querySelector(""),
//title: constructorTitle,
//image: constructorImage,
// cardTitle: card.querySelector(""),
//cardImage: card.querySelector(""),
//likeBtn: card.querySelector(""),
//btnRemoveCard: card.querySelector(""),
//likeCard: function () {},
//removeCard: function () {},
//};
