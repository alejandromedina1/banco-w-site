class cardDirection extends HTMLElement {

    constructor() {
        super();

        this.title;
        this.direction;
        this.city;
        this.km;
    }

    static get observedAttributes() {
        return [
            "direction", "title", "km", "city",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        if (newValue !== oldValue) {
            switch (nameAtr) {
                case "direction":

                    this.direction = newValue

                    break;

                case "title":

                    this.title = newValue

                    break;

                case "km":

                    this.km = newValue

                    break;

                case "city":

                    this.city = newValue

                    break;
            }
        }

    }

    connectedCallback() {

        this.innerHTML = `
        <section class="container_each-result">
                    <div class="container_text">
                        <h5>${this.title}</h5>
                        <p class="body_3">${this.direction}</p>
                        <p class="body_3">${this.city}</p>
                        <p class="body_3"><span>Colombia</span></p>
                        <div class="container_directions">
                            <p class="body_3">${this.km} km</p>
                            <p class="body_3"><span>Indicaciones</span></p>
                        </div>
                    </div>
                    <img src="/images/logo-super-giros.webp" alt="">
                </section>
        `
    }
}

window.customElements.define("card-direction", cardDirection)

export default cardDirection