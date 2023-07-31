class InclusiveButton extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
        this.overlayColor();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="./components/botón-inclusivo/style.scss">
        <div id="overlay">
        </div>
        <nav class="inclusive-button">
            <input type="checkbox" id="show-btn"">
            <div class="options">
                <div id="plus">
                    <a href="#"><img src="../../public/icons/plus-font.svg" alt=""></a>
                    <span>Aumentar fuente</span>
                </div>

                <div id="minus">
                    <a href="#"><img src="../../public/icons/minus-font.svg" alt=""></a>
                    <span>Disminuir fuente</span>
                </div>

                <div id="contrast">
                    <a href="#"><img src="../../public/icons/contrast.svg" alt=""></a>
                    <span>Contraste</span>
                </div>
                
                <div id="night">
                    <a href="#">
                        <img src="../../public/icons/night.svg" alt="">
                    </a>
                    <span>Modo oscuro</span>
                </div>
                
                
            </div>
            <div class="show-btn">
                
                <label for="show-btn">
                    <img class="show-button" src="../../public/icons/inclusive.svg" alt="">
                    <span class="label-hidden">Botón inclusivo</span>
                </label>
                
            </div>
        </nav>
        `;
    }

    overlayColor() {
        let checkbox = document.getElementById('show-btn');
        let overlay = document.getElementById('overlay');

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                overlay.style.display = 'block';
            } else {
                overlay.style.display = 'none';
            }
        })
    }
}

customElements.define('inclusive-button', InclusiveButton)
export default InclusiveButton;