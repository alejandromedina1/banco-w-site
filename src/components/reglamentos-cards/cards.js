class ReglamentosCards extends HTMLElement {
    constructor() {
        super();

        this.card_image = this.getAttribute('card_image')
        this.title_card = this.getAttribute('title_card')
        this.text_card = this.getAttribute('text_card')
        this.date_card = this.getAttribute('date_card')
        this.info_card = this.getAttribute('info_card')
    }

    static get observedAttributes() {
        return ['card_image', 'title_card', 'text_card', 'date_card', 'info_card']
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
        <link rel="stylesheet" href="/components/reglamentos-cards/style.scss">
        <div class="card-container">
            <img src="${this.card_image}" alt="" id="image-header">
            <div class="card-text-container">
                <h1 class="card-title">${this.title_card}</h1>
                <p class="card-text">${this.text_card}</p>
                <p class="card-date">${this.date_card}</p>
                <p class="card-info">${this.info_card}</p>
            </div>
        </div>
        `;

    }

    
    
}

customElements.define('reglamentos-cards', ReglamentosCards);
export default ReglamentosCards;