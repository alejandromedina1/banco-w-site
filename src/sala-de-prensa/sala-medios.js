import "./sala-medios.scss";
import data from "./data.json";

class SalaMedios extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(nameAtr, oldValue, newValue) {
    switch (nameAtr) {
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const cards = data.map(
      (card) => `
      <article class="Cards-content">
      <div class="Cards-info">
        <img src="${card.image}" alt="">
        <h2>${card.title}</h2>
        <p>${card.description}</p>
      </div>
      <div class="Cards-more">
        <button>Leer más</button>
      </article>
    `
    );
    this.innerHTML = `
       <h1 class="title">
        Nuestra presencia en medios
      </h1>
    <section class="Cards">
      ${cards.join("")}
    </section>
    <div class="Button">
      <a href="/sala-de-prensa-noticias/">Ver todas las noticias </a>
    </div>
    `;
  }
}

customElements.define("sala-medios", SalaMedios);
