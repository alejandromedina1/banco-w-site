class cardIcon extends HTMLElement {

    constructor() {
        super();

        this.image;
        this.description;
        this.title;
        this.text;
    }

    static get observedAttributes() {
        return [
            "image", "title", "text", "description",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        if (newValue !== oldValue) {
            switch (nameAtr) {
                case "image":

                    this.image = newValue

                    break;

                case "title":

                    this.title = newValue

                    break;

                case "text": 

                    this.text = newValue

                    break;

                case "description":

                    this.description = newValue

                    break;
            }
        }

    }

    connectedCallback() {

        this.innerHTML = `
        <section class="card">
            <img src="${this.image}" class="icon" alt="${this.description}">
                <h5 class="title">${this.title}</h5>
                <p class="body3">${this.text}</p>
        </section>
        `
    }
}

window.customElements.define("card-icon", cardIcon)

export default cardIcon