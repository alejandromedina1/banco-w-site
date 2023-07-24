class InclusiveButton extends HTMLElement {
    contructor() {
        super()
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
        <!-- Content -->
        `;
    }
}

customElements.define('inclusive-button', InclusiveButton)
export default InclusiveButton;