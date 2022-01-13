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
    let p = document.createElement("p");
    let div = document.getElementById("emojis");
    p(this.addBananas).textContent;
    div.appendChild(p)

  }

  addBananas() {
    this.setEmojis.map(e => e + this.banana)
  }
}
