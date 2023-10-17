const template = document.createElement('template')

template.innerHTML = `
    <link rel="stylesheet" href="/components/InverCards/style.scss">
    <a href="#" class="inver-link" download><article class="inver-card">
    <img src="/images/inver_card.webp" alt="Patrón de fondo">
    <h3 class="inver-text"></h3>
    </article></a>
`

export class InverCard extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)
        this.content = this.getAttribute('content')
        this.h3Element = this.shadowRoot.querySelector('h3')
        this.h3Element.innerText = this.content
        this.aElement = this.shadowRoot.querySelector('.inver-link')
        this.aElement.download = this.content
    }

    static get observedAttributes(){
        return ['content']
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue
    }
}

customElements.define('inver-card', InverCard)