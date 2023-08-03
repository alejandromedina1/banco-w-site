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

        const buttons = this.querySelectorAll('.main-option')
        const buttonArray = Array.prototype.slice.call(buttons)
        console.log(buttonArray)
        const dropdownElements = this.querySelectorAll('.dropdown')

        buttonArray.forEach(button => {
            button.addEventListener('click', () => {
                if (window.matchMedia("(max-width: 768px)").matches) {
                    if (dropdownElements[buttonArray.indexOf(button)].style.display === 'none') {
                        dropdownElements[buttonArray.indexOf(button)].style.display = 'flex'
                    } else {
                        dropdownElements[buttonArray.indexOf(button)].style.display = 'none'
                    }
                }
            })
        });

        window.addEventListener('resize', () => {
                if (window.matchMedia("(min-width: 769px)").matches) {
                    buttonArray.forEach(button => {
                            dropdownElements[buttonArray.indexOf(button)].style.display = 'flex'

                        }
                    );
            }
        });
}

render() {

    this.innerHTML = `
        <link rel="stylesheet" href="/components/footer/style.scss">
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
                <a href="https://www.facebook.com/bancowoficial" target="_blank">
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Facebook.svg" alt="">
                    </li>
                </a>
                <a href="https://www.instagram.com/bancowoficial/" target="_blank">
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Instagram.svg" alt="">
                    </li>
                </a>
                <a href="https://twitter.com/BancoWOficial" target="_blank">
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Twitter.svg" alt="">
                    </li>
                </a>
                <a href="https://www.tiktok.com/@bancowoficial" target="_blank">
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Tik Tok.svg" alt="">
                    </li>
                </a>
                <a href="https://www.youtube.com/@BancoWOficial" target="_blank">
                    <li>
                    <img class="footer-icons" src="/icons/Social Media/Youtube.svg" alt="">
                    </li>
                </a>
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
}


}

customElements.define('custom-footer', Footer)
export default Footer;