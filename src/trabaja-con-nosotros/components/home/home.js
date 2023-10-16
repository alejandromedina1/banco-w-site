import "./home.scss";

class HomeWork extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <header class="Header">
                <div class="Header-title">
                    <h2>¡Somos un gran lugar para trabajar, solo faltas tú!</h2>
                </div>
                <div class="Header-paragraph">
                    <p>Somos un Banco diferente con sentido social, buscamos impactar positivamente la vida de las y los clientes, colaboradores y colaboradoras. Sentimos pasión por lo que hacemos y por la manera como aportamos a la sociedad. Queremos que te sumes a vivir la mejor experiencia y hagas parte de uno de los mejores lugares para trabajar en Colombia</p>
                </div>
            </header>
            
            <section class="Cards">
                <div class="Cards-up-container">
                    <article>
                        <img src="/public/images/banco-lider.webp" alt="Imagen Banco Lider">
                        <h6>Somos un Banco líder</h6>
                        <p>Nos reconocen por facilitar productos y servicios financieros sencillos, innovadores y oportunos, de manera responsable, rentable y sostenible. Somos el Banco de las y los microempresarios colombianos.</p>
                    </article>
                    <article>
                        <img src="/public/images/escuchamos.webp" alt="Imagen Escuchamos y construimos">
                        <h6>Escuchamos y construimos</h6>
                        <p>Nuestra promesa de servicio surge de un ambiente de trabajo comprometido y respetuoso en las relaciones interpersonales. En nuestro Banco trabajamos por la equidad y la igualdad en todos los sentidos.</p>
                    </article>
                </div>
                <div class="Cards-down-container">
                    <article>
                        <img src="/public/images/interesa.webp" alt="Imagen felicidad y tu familia">
                        <h6>Nos interesa tu felicidad y la de tu familia</h6>
                        <p>Somos un Banco que piensa en ti y en el bienestar de tu familia. Somos conscientes de las necesidades que tienes como profesional y como integrante de familia, por eso contamos con un portafolio integral de beneficios económicos y emocionales.</p>
                    </article>
                    <article>
                        <img src="/public/images/desarrollarte.webp" alt="Imagen desarrollarte profesionalmente">
                        <h6>Aquí podrás desarrollarte profesionalmente</h6>
                        <p>Somos una organización comprometida con el talento interno, por eso, contamos con oportunidades de crecimiento laboral.</p>
                    </article>
                </div>
            </section>
    `
    }
}

customElements.define('home-work', HomeWork)