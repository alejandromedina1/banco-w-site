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
        this.inclusiveChanges();
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

        let checkbox = document.getElementById('show-inclusive-btn');

        let change = false;
        
        buttonArray.forEach((element, index) => {
            element.addEventListener('change', function() {
                    console.log(element.id)
                    inclusiveIcon.setAttribute('src', "../../public/icons/check.svg");
                    change = true;
            })
        });

        checkbox.addEventListener('change', function () {
            if (this.checked && change == true) {
            } else {
                inclusiveIcon.setAttribute('src', "../../public/icons/inclusive.svg")
            }
        })
    }

    inclusiveChanges() {
        let buttonArray = [];
        buttonArray[0] = document.getElementById('plus-button')
        buttonArray[1] = document.getElementById('minus-button')
        buttonArray[2] = document.getElementById('contrast-button')
        buttonArray[3] = document.getElementById('dark-button')

        buttonArray[3].addEventListener('change', function () {
            let fondo = document.querySelector('body');
            let p = document.querySelectorAll('p');
            let li = document.querySelectorAll('li');
            let h2 = document.querySelectorAll('h2');

            if (this.checked) {
                fondo.style.backgroundColor = 'black';
                p.forEach(element => {
                    element.style.color = 'white';
                });
                li.forEach(element => {
                    element.style.color = 'white';
                });
                h2.forEach(element => {
                    element.style.color= 'white';
                });
            } else {
                fondo.style.backgroundColor = 'white';
            }
        })

        buttonArray[0].addEventListener('change', function () {
            let p = document.querySelectorAll('p');
            let li = document.querySelectorAll('li');
            let h1 = document.querySelectorAll('h1');
            let h2 = document.querySelectorAll('h2');
            let h3 = document.querySelectorAll('h3');
            let h4 = document.querySelectorAll('h4');
            let a = document.querySelectorAll('a');
            if (this.checked) {
                p.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 1.2;
                    element.style.fontSize = newSize + 'px';
                });
                li.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 1.2;
                    element.style.fontSize = newSize + 'px';
                });
                h1.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 1.2;
                    element.style.fontSize = newSize + 'px';
                });
                h2.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 1.2;
                    element.style.fontSize = newSize + 'px';
                });
                h3.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 1.2;
                    element.style.fontSize = newSize + 'px';
                });
                h4.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 1.2;
                    element.style.fontSize = newSize + 'px';
                });
                a.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 1.2;
                    element.style.fontSize = newSize + 'px';
                });
            } else {
            }
        })
        buttonArray[1].addEventListener('change', function () {
            let p = document.querySelectorAll('p');
            let li = document.querySelectorAll('li');
            let h1 = document.querySelectorAll('h1');
            let h2 = document.querySelectorAll('h2');
            let h3 = document.querySelectorAll('h3');
            let h4 = document.querySelectorAll('h4');
            let a = document.querySelectorAll('a');
            if (this.checked) {
                p.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 0.8;
                    element.style.fontSize = newSize + 'px';
                });
                li.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 0.8;
                    element.style.fontSize = newSize + 'px';
                });
                h1.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 0.8;
                    element.style.fontSize = newSize + 'px';
                });
                h2.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 0.8;
                    element.style.fontSize = newSize + 'px';
                });
                h3.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 0.8;
                    element.style.fontSize = newSize + 'px';
                });
                h4.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 0.8;
                    element.style.fontSize = newSize + 'px';
                });
                a.forEach(element => {
                    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize) * 0.8;
                    element.style.fontSize = newSize + 'px';
                });
            } else {
            }
        })
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