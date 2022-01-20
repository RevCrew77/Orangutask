import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    let paragraph = document.createElement("p");
    let wrapper = document.getElementById("emojis");
    wrapper.textContent = '';
    paragraph.textContent = this.emojis;
    wrapper.appendChild(paragraph);
  }

  addBananas() {
    this.emojis = this.emojis.map( () => this.banana)
  }
}
