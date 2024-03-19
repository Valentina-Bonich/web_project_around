const templateCard = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");

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

class Card {
  constructor(title, image) {
    this.title = title;
    this.image = image;
  }
  setCardProperties() {
    this.card = templateCard.cloneNode(true).content.querySelector(".element");
    this.cardTitle = this.card.querySelector(".element__photo-name");
    this.cardImage = this.card.querySelector(".element__photo");
    this.likeBtn = this.card.querySelector(".element__photo-heart");
    this.btnRemoveCard = this.card.querySelector(".element__photo-trash");
    this.cardTitle.textContent = this.title;
    this.cardImage.src = `https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/${this.number}.jpg`;
  }

  generateCard() {
    this.setCardProperties();
    return this.card;
  }
}

const cardTest = new card(hola, "image");
console.log(cardTest);

const newCard = cardTest.generateCard();
cardArea.append(newCard);
