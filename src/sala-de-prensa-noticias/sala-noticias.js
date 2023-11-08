import "./sala-noticias.scss";
import data from "./data.json";

class SalaNoticias extends HTMLElement {
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
        Noticias
      </h1>
      <div class="Filter">
        <input type="text" placeholder="Ingresa el mes">
        <input type="text" placeholder="Ingresa el año">
        <select name="" id="">
          <option value="">Seleccione una categoría</option>
          <option value="">Nuestra presencia en medios</option>
          <option value="">Columna de opinión</option>
          <option value="">Comunicados de prensa</option>
          <option value="">Boletín informativo Banco w</option>
        </select>
        <button>Buscar</button>
      </div>
    <section class="Cards">
      ${cards.join("")}
    </section>
    `;
  }
}

customElements.define("sala-noticias", SalaNoticias);
