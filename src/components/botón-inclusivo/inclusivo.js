class InclusiveButton extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
        this.changeButton();
        this.overlayColor();
        this.buttonStatus();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/components/botón-inclusivo/style.scss">
        <div id="inclusive-overlay">
        </div>
        <nav class="inclusive-button">
            <input type="checkbox" id="show-inclusive-btn"">
            <div class="inclusive-options">
                <input type="checkbox" id="plus-button"">
                <input type="checkbox" id="minus-button"">
                <input type="checkbox" id="contrast-button"">
                <input type="checkbox" id="dark-button"">
                <label id="plus" for="plus-button">
                    <a><img src="/icons/plus-font.svg" alt=""></a>
                    <span>Aumentar fuente</span>
                </label>

                <label id="minus" for="minus-button">
                    <a><img src="/icons/minus-font.svg" alt=""></a>
                    <span>Disminuir fuente</span>
                </label>

                <label id="contrast" for="contrast-button">
                    <a><img src="/icons/contrast.svg" alt=""></a>
                    <span>Contraste</span>
                </label>
                
                <label id="dark" for="dark-button">
                    <a>
                        <img src="/icons/dark.svg" alt="">
                    </a>
                    <span>Modo oscuro</span>
                </label>
                
                
            </div>
            <div class="show-inclusive-btn">
                
                <label for="show-inclusive-btn">
                    <img class="show-inclusive-button" src="/icons/inclusive.svg" alt="">
                    <span class="label-hidden">Botón inclusivo</span>
                </label>
                
            </div>
        </nav>
        `;
    }

    overlayColor() {
        let checkbox = document.getElementById('show-inclusive-btn');
        let overlay = document.getElementById('inclusive-overlay');
        let inclusiveIcon = document.querySelector('.show-inclusive-button');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                overlay.style.display = 'block';
            } else {
                overlay.style.display = 'none';
            }
        })
    }

    buttonStatus() {
        let buttonArray = [];
        buttonArray[0] = document.getElementById('plus-button')
        buttonArray[1] = document.getElementById('minus-button')
        buttonArray[2] = document.getElementById('contrast-button')
        buttonArray[3] = document.getElementById('dark-button')

        let inclusiveIcon = document.querySelector('.show-inclusive-button');
        
        buttonArray.forEach((element, index) => {
            element.addEventListener('change', function() {
                    inclusiveIcon.setAttribute('src', "/icons/check.svg")
                    console.log(element.id)
            })
        });
    }

    changeButton() {
        let checkbox = document.getElementById('show-inclusive-btn');
        let InclusiveButton = document.querySelector('inclusive-button');
        let helpButton = document.querySelector('help-button');
        let lastClickTime = 0;

        checkbox.addEventListener('change', function() {

            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < 300) {
                InclusiveButton.style.display = 'none';
                helpButton.style.display= 'block';
            }
            lastClickTime = currentTime;
        })
    }
}

customElements.define('inclusive-button', InclusiveButton)
export default InclusiveButton;