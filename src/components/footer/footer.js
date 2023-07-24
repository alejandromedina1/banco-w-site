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
        <link rel="stylesheet" href="./style.scss">
        <footer>
            <div id="footer-container">
            <div id="us-container">
                <div>
                <p>Nosotros</p>
                <img src="../public/icons/fi_chevron-down.svg" alt="">
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
                <div>
                <p>Canales de atención</p>
                <img src="../public/icons/fi_chevron-down.svg" alt="">
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
                <div>
                <p>Ayuda</p>
                <img src="../public/icons/fi_chevron-down.svg" alt="">
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
                <div>
                <p>Síguenos</p>
                <img src="../public/icons/fi_chevron-down.svg" alt="">
                </div>
                <div class="dropdown">
                <ul>
                    <li>
                    <img src="../public/icons/Social Media/Facebook.svg" alt="">
                    </li>
                    <li>
                    <img src="../public/icons/Social Media/Instagram.svg" alt="">
                    </li>
                    <li>
                    <img src="../public/icons/Social Media/Twitter.svg" alt="">
                    </li>
                    <li>
                    <img src="../public/icons/Social Media/Tik Tok.svg" alt="">
                    </li>
                    <li>
                    <img src="../public/icons/Social Media/Youtube.svg" alt="">
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div id="ownership-container">
            <img src="../public/images/footer-logo_4x.webp" alt="">
            <p>Copyright © 2023 Banco W</p>
            </div>
        </footer>
        `;

    }

}

customElements.define('custom-footer', Footer)
export default Footer;