import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(PopupTitle, PopupPicture) {
    this.nameImage = PopupTitle;
    this.linkImage = this.document.querySelector(".popup__picture");
  }
  open(name, link) {
    super.open();
    this.image.src = name;
    this.title.textContent = link;
  }
}
