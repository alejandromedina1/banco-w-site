import './chat.scss'

class Chat extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();

        const close = document.getElementById('close-chat');
        const open = document.getElementById('show-chat');
        const btns = document.getElementById('close-btns');

        close.addEventListener('click', () => {
        open.style.display = 'none';
        btns.style.display = 'block';
        });
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
         <aside>
        <header class="Chat">
            <div id="close-chat" class="Chat-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" fill="none">
                    <path d="M9.375 3.75L5.625 7.5L9.375 11.25" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>atrás</p>
            </div>
            <h6>Chat de soporte</h6>
        </header>
        <section class="Body">
            <article class="Consult">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <path d="M26.6582 14.3291H23.9184C22.4052 14.3291 21.1786 15.5557 21.1786 17.0689V19.8087C21.1786 21.3218 22.4052 22.5485 23.9184 22.5485C25.4315 22.5485 26.6582 21.3218 26.6582 19.8087V14.3291ZM26.6582 14.3291C26.6582 7.51992 21.1382 2 14.3291 2C7.51992 2 2 7.51992 2 14.3291M2 14.3291V19.8087C2 21.3218 3.22665 22.5485 4.7398 22.5485C6.25294 22.5485 7.47959 21.3218 7.47959 19.8087V17.0689C7.47959 15.5557 6.25294 14.3291 4.7398 14.3291H2Z" stroke="#00A2AF" stroke-width="2.7398" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.6582 17.0689V22.5485C26.6582 25.2883 25.7449 26.6582 23.9184 26.6582C22.0918 26.6582 19.8087 26.6582 17.0689 26.6582" stroke="#00A2AF" stroke-width="2.7398" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="Consult-chat">
                    <p>Hola, ¿cómo puedo ayudarte?</p>
                </div>      
            </article>
            <article class="User">
                <p>Tengo una pregunta sobre los créditos para emrprendedores</p>
            </article>

            <footer class="Write">
                <section class="Write-container">
                    <textarea class="Write-area" name="" id="" cols="30" rows="10"></textarea>
                    <div class="Write-buttons">
                        <svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <g clip-path="url(#clip0_2413_22915)">
                              <path d="M20.852 17.2255C20.852 17.7064 20.6609 18.1676 20.3209 18.5077C19.9808 18.8477 19.5196 19.0387 19.0388 19.0387H2.71982C2.23893 19.0387 1.77773 18.8477 1.43769 18.5077C1.09764 18.1676 0.906609 17.7064 0.906609 17.2255V7.25285C0.906609 6.77196 1.09764 6.31076 1.43769 5.97072C1.77773 5.63067 2.23893 5.43964 2.71982 5.43964H6.34625L8.15947 2.71982H13.5991L15.4123 5.43964H19.0388C19.5196 5.43964 19.9808 5.63067 20.3209 5.97072C20.6609 6.31076 20.852 6.77196 20.852 7.25285V17.2255Z" stroke="#00A2AF" stroke-width="1.81321" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.8793 15.4123C12.8821 15.4123 14.5057 13.7887 14.5057 11.7859C14.5057 9.78306 12.8821 8.15945 10.8793 8.15945C8.87646 8.15945 7.25285 9.78306 7.25285 11.7859C7.25285 13.7887 8.87646 15.4123 10.8793 15.4123Z" stroke="#00A2AF" stroke-width="1.81321" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_2413_22915">
                                <rect width="21.7586" height="21.7586" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>
                        <svg class="svg2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path d="M19.9999 2.5929C19.6536 2.23984 19.2143 1.99202 18.733 1.87811C18.2517 1.7642 17.748 1.78885 17.2801 1.94921L4.45163 6.23746C3.93424 6.40682 3.48219 6.7326 3.15786 7.16985C2.83354 7.6071 2.65294 8.13424 2.641 8.67851C2.62906 9.22277 2.78636 9.75733 3.0912 10.2084C3.39604 10.6594 3.83338 11.0047 4.34284 11.1966L9.09346 13.0098C9.20164 13.0512 9.30013 13.1144 9.3828 13.1955C9.46547 13.2766 9.53054 13.3739 9.57396 13.4813L11.3872 18.2409C11.5717 18.7432 11.9067 19.1763 12.3463 19.4813C12.786 19.7863 13.309 19.9484 13.8441 19.9454H13.9075C14.4524 19.9354 14.9806 19.7553 15.4179 19.4301C15.8552 19.105 16.1799 18.6511 16.3463 18.1321L20.6346 5.28553C20.7905 4.82219 20.8137 4.32447 20.7016 3.84863C20.5894 3.37279 20.3464 2.93782 19.9999 2.5929ZM18.9573 4.71436L14.6238 17.5701C14.5734 17.7328 14.4724 17.8751 14.3354 17.9762C14.1983 18.0774 14.0325 18.132 13.8622 18.1321C13.6929 18.1349 13.5268 18.0861 13.3859 17.9922C13.245 17.8983 13.136 17.7637 13.0735 17.6063L11.2603 12.8466C11.1288 12.5008 10.9261 12.1865 10.6652 11.924C10.4044 11.6616 10.0913 11.457 9.74622 11.3235L4.98653 9.51031C4.82596 9.45148 4.68794 9.34368 4.59196 9.20215C4.49598 9.06062 4.44689 8.89251 4.45163 8.72157C4.45177 8.55126 4.50641 8.38546 4.60755 8.24843C4.70869 8.1114 4.85102 8.01034 5.01373 7.96002L17.8694 3.67177C18.017 3.61161 18.1789 3.59549 18.3354 3.62537C18.492 3.65524 18.6366 3.72983 18.7516 3.84011C18.8667 3.95039 18.9474 4.09164 18.9839 4.24679C19.0204 4.40194 19.0112 4.56434 18.9573 4.71436Z" fill="#00A2AF"/>
                        </svg>
                    </div>
                </section>
            </footer>
        </section>
    </aside>
        `;
    }

}

customElements.define('chat-component', Chat)
export default Chat;