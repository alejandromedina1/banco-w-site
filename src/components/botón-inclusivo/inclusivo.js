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
        this.imprimirEstado();
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
                <input type="checkbox" id="plus-button"">
                <input type="checkbox" id="minus-button"">
                <input type="checkbox" id="contrast-button"">
                <input type="checkbox" id="dark-button"">
                <label id="plus" for="plus-button">
                    <a><img src="../../public/icons/plus-font.svg" alt=""></a>
                    <span>Aumentar fuente</span>
                </label>

                <label id="minus" for="minus-button">
                    <a><img src="../../public/icons/minus-font.svg" alt=""></a>
                    <span>Disminuir fuente</span>
                </label>

                <label id="contrast" for="contrast-button">
                    <a><img src="../../public/icons/contrast.svg" alt=""></a>
                    <span>Contraste</span>
                </label>
                
                <label id="dark" for="dark-button">
                    <a>
                        <img src="../../public/icons/dark.svg" alt="">
                    </a>
                    <span>Modo oscuro</span>
                </label>
                
                
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

    imprimirEstado() {
        let plusStatus = document.getElementById('plus-button')
        let minusStatus = document.getElementById('minus-button')
        let contrastStatus = document.getElementById('plus-button')
        let darkStatus = document.getElementById('dark-button')

        let inclusiveIcon = document.querySelector('.show-button');
        if(document.getElementById('plus-button').checked) {
            console.log('aaaa')
        }
    }
}

customElements.define('inclusive-button', InclusiveButton)
export default InclusiveButton;