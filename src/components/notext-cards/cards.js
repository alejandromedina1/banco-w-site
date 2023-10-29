class NotextCards extends HTMLElement {
    constructor() {
        super();

        this.card_image = this.getAttribute('card_image')
        this.title_card = this.getAttribute('title_card')
        this.text_card = this.getAttribute('text_card')
        this.redirect_link = this.getAttribute('redirect_link')
    }

    static get observedAttributes() {
        return ['card_image', 'title_card', 'text_card', 'redirect_link']
    }

    connectedCallback() {
        this.render();

    }

    attributeChangedCallback(propName, oldValue, newValue) {
        //console.log(`attr ${propName} changed`)
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/components/notext-cards/style.scss">
        <section id="card-container" class="card all">
            <div class="seguros-cards">
                <img src="${this.card_image}" class="card-image" alt="">
                <div class="card-text-content">
                    <h2 class="title-card">${this.title_card}</h2>
                    <a href="${this.redirect_link}">
                            <button class="button-card">¡Conoce más!</button>
                        </a>
                </div>
            </div>
        </section>
        `;

    }
}

customElements.define('notext-cards', NotextCards);
export default NotextCards;