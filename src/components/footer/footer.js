class Footer extends HTMLElement {
    constructor() {
        super()
        
    //attributes
    }

    static get observedAttributes() {
        return []
    }

    connectedCallback() {
        this.render()
    }
    
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML=`
        <!-- Content -->
        `;
    }
    
}

customElements.define('custom-footer', Footer)
export default Footer;