import "./details.scss"

class Details extends HTMLElement {
    constructor() {
        super();
        this.typeTitle;
        this.typeParaph;
        this.dateTitle;
        this.dateParaph;
        this.stateTitle;
        this.stateParaph;
        this.mountTitle;
        this.mountParaph;
    }

    static get observedAttributes() {
        return [
            "type_title",
            "type_paraph",
            "date_title",
            "date_paraph",
            "state_title",
            "state_paraph",
            "mount_title",
            "mount_paraph"
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "type_title":

                this.typeTitle = newValue

                break;

            case "type_paraph":

                this.typeParaph = newValue

                break;

            case "date_title":

                this.dateTitle = newValue

                break;

            case "date_paraph":

                this.dateParaph = newValue

                break;

            case "state_title":

                this.stateTitle = newValue

                break;

            case "state_paraph":

                this.stateParaph = newValue

                break;
            case "mount_title":

                this.mountTitle = newValue

                break;
            case "mount_paraph":

                this.mountParaph = newValue

                break;
        }

    }


    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../Details/details.scss">

    <section class="Card">
        <div class="Card-Type">
            <span>${this.typeTitle}</span>
            <p>${this.typeParaph}</p>
        </div>

        <div class="Card-Date">
            <span>${this.dateTitle}</span>
            <p>${this.dateParaph}</p>
        </div>

        <div class="Card-State">
            <span>${this.stateTitle}</span>
            <p>${this.stateParaph}</p>
        </div>

        <div class="Card-Mount">
            <span>${this.mountTitle}</span>
            <p>$${this.mountParaph}</p>
        </div>
        
    </section>
    `
    }

}

customElements.define('details-component', Details)