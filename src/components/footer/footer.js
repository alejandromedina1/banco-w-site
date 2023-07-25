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
        
        this.innerHTML = `
        <footer>
            <div id="footer-container">
            <div id="us-container">
                <div class="main-option">
                <p class="title-option">Nosotros</p>
                <img class="icons" src="/icons/fi_chevron-down.svg" alt="">
                </div>
                <div class="dropdown">
                <ul>
                    <li>Quiénes somos</li>
                    <li>Proveedores</li>
                    <li>Educación financiera</li>
                    <li>Trabaja con nosotros</li>
                </ul>
                </div>
            </div>

            <div id="channels-container">
                <div class="main-option">
                <p class="title-option">Canales de atención</p>
                <img class="icons" src="/icons/fi_chevron-down.svg" alt="">
                </div>
                <div class="dropdown">
                <ul>
                    <li>Oficinas</li>
                    <li>App móvil</li>
                    <li>Linea nacional gratuita</li>
                    <li>Corresponsales bancarios</li>
                </ul>
                </div>
            </div>

            <div id="help-container">
                <div class="main-option">
                <p class="title-option">Ayuda</p>
                <img class="icons" src="/icons/fi_chevron-down.svg" alt="">
                </div>
                <div class="dropdown">
                <ul>
                    <li>Preguntas frecuentes</li>
                    <li>Tasas y tarifas</li>
                    <li>Información legal</li>
                    <li>Comunicados de prensa</li>
                    <li>PQRS</li>
                </ul>
                </div>
            </div>

            <div id="follow-container">
                <div class="main-option">
                <p class="title-option">Síguenos</p>
                <img class="icons" src="/icons/fi_chevron-down.svg" alt="">
                </div>
                <div class="dropdown">
                <ul id="social-media">
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Facebook.svg" alt="">
                    </li>
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Instagram.svg" alt="">
                    </li>
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Twitter.svg" alt="">
                    </li>
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Tik Tok.svg" alt="">
                    </li>
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Youtube.svg" alt="">
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div id="ownership-container">
            <img id="footer-logo" src="/images/footer-logo_4x.webp" alt="">
            <p id="ownership">Copyright © 2023 Banco W</p>
            </div>
        </footer>
        `;

        const buttons = this.querySelectorAll('.main-option')
        const buttonArray = Array.prototype.slice.call(buttons)
        console.log(buttonArray)
        const dropdownElements = this.querySelectorAll('.dropdown')

        buttonArray.forEach(button => {
            button.addEventListener('click', () => {
                if (dropdownElements[buttonArray.indexOf(button)].style.display === 'none') {
                    dropdownElements[buttonArray.indexOf(button)].style.display = 'flex'
                } else {
                    dropdownElements[buttonArray.indexOf(button)].style.display = 'none'
                }
            })
        });

        

    }

}

customElements.define('custom-footer', Footer)
export default Footer;