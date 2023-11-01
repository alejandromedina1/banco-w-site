import "./resume.scss";

class CvResume extends HTMLElement {
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
    this.innerHTML = `
        <div class="content-title">
                <h2>Segmentaciones</h2>
                <p>Selecciona el área de tu interés y registra tu hoja de vida:</p>
            </div>

            <article class="Segments">
                <figure>
                    <img src="/icons/comercial_icon.svg" alt="Comercial icon">
                </figure>
                <div class="Segments-info">
                    <h2>Comercial</h2>
                    <p>Buscamos personas dinámicas, con gran habilidad comercial e interés en comprometerse con nuestros clients y sus necesidades de emprendimiento. Profesionales con integridad, que asesoren a nuestros clientes y clientas, conozcan sus hogares, sus negocios y su productividad.</p>
                </div>
            </article>
            <article class="Segments">
                <figure>
                    <img src="/icons/operative_icon.svg" alt="Operative icon">
                </figure>
                <div class="Segments-info">
                    <h2>Operativo</h2>
                    <p>Buscamos personas alegres, cordiales y dispuestas al servicio, para manejar el contacto directo con nuestros clientes y clientas. Nuestro objetivo es construir un equipo humano especializado en brindar el mejor servicio, desde nuestras oficinas</p>
                </div>
            </article>
            <article class="Segments">
                <figure>
                    <img src="/icons/administrative_icon.svg" alt="Operative icon">
                </figure>
                <div class="Segments-info">
                    <h2>Administrativo</h2>
                    <p>Buscamos profesionales que se sumen al posicionamiento y expansión como Banco. Personas apasionadas por la estrategia financiera y administrativa de la organización; orientadas a enfocar su talento y gestión para alcanzar las metas y objetivos del Banco W.</p>
                </div>
            </article>

            
        <div class="last-button">
            <a href="">Enviar hoja de vida</a>
        </div>
    `;
  }
}

customElements.define("cv-resume", CvResume);
