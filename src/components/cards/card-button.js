class cardButton extends HTMLElement {

    constructor() {
        super();

        this.image;
        this.title;
        this.text;
        this.ref;
    }

    static get observedAttributes() {
        return [
            "image", "title", "text", "ref"
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

                case "ref":

                    this.ref = newValue

                    break;

            }
        }

    }

    connectedCallback() {

        this.innerHTML = `
        <article class="each-option">
            <img src="${this.image}">
            <h5>${this.title}</h5>
            <p class="body_1">${this.text}</p>
            <a href="${this.ref}">
                <button class="text-btn btn">¡Conoce más!</button>
            </a>
        </article>
        `
    }
}

window.customElements.define("card-button", cardButton)

export default cardButton