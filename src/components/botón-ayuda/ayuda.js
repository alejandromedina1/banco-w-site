import '../components.js'

class HelpButton extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
        this.overlayColor();
        this.changeButton();

        const chat = document.getElementById('chat');
        const showChat = document.getElementById('show-chat');
        const btns = document.getElementById('close-btns');
        const disable = document.getElementById('show-help-btn');

        chat.addEventListener('click', () => {
            showChat.style.display = 'block';
            btns.style.display = 'none';
        })
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/components/botón-ayuda/style.scss">
        <div id="overlay">
        </div>
        <nav class="help-button">
            <input type="checkbox" id="show-help-btn"">
            <div id="close-btns" class="help-options">
                <div id="chat">
                    <a href="#"><img src="/icons/chat.svg" alt=""></a>
                    <span>Chat</span>
                </div>

                <div id="asesoria">
                    <a href="#"><img src="/icons/asesoria.svg" alt=""></a>
                    <span>Asesorías</span>
                </div>

                <div id="tutorial">
                    <a href="#"><img src="/icons/tutorial.svg" alt=""></a>
                    <span>Tutoriales</span>
                </div>
                
                <div id="pqrs">
                    <a href="/pqrs/">
                        <img src="/icons/pqrs.svg" alt="">
                    </a>
                    <span>PQRS</span>
                </div>
                
                
            </div>
            <div class="show-help-btn">
                
                <label for="show-help-btn">
                    <img class="show-help-button" src="/icons/help.svg" alt="">
                    <span class="help-label-hidden">Botón de ayuda</span>
                </label>
                
            </div>
        </nav>
        <div id="show-chat" style="display:none">
            <chat-component></chat-component>
        </div>   
        `;
    }

    overlayColor() {
        let checkbox = document.getElementById('show-help-btn');
        let overlay = document.getElementById('overlay');

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                overlay.style.display = 'block';
            } else {
                overlay.style.display = 'none';
            }
        })
    }

    changeButton() {
        let checkbox = document.getElementById('show-help-btn');
        let helpButton = document.querySelector('help-button');
        let inclusiveButton = document.querySelector('inclusive-button');
        let lastClickTime = 0;

        checkbox.addEventListener('change', function() {

            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < 300) {
                helpButton.style.display = 'none';
                inclusiveButton.style.display = 'block';
            }
            lastClickTime = currentTime;
        })
    }
}

customElements.define('help-button', HelpButton)
export default HelpButton;