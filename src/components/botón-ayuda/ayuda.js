class HelpButton extends HTMLElement {
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
        <nav class="help-button">
            <input type="checkbox" id="show-btn">
            <div class="options">
                <div id="pqrs">
                    <a href="#">
                        <img src="../../public/icons/pqrs.svg" alt="">
                    </a>
                    <span class="pqrs-span">PQRS</span>
                </div>
                
                <div id="tutorial">
                    <a href="#"><img src="../../public/icons/tutorial.svg" alt=""></a>
                    <span>Tutoriales</span>
                </div>

                <div id="asesoria">
                    <a href="#"><img src="../../public/icons/asesoria.svg" alt=""></a>
                    <span>Asesorías</span>
                </div>
                
                <div id="chat">
                    <a href="#"><img src="../../public/icons/chat.svg" alt=""></a>
                    <span>Chat</span>
                </div>
                
            </div>
            <div class="show-btn">
                
                <label for="show-btn">
                    <img class="show-button" src="../../public/icons/help.svg" alt="">
                    <span class="label-hidden">Botón de ayuda</span>
                </label>
                
            </div>
        </nav>
        `;
    }
}

customElements.define('help-button', HelpButton)
export default HelpButton;