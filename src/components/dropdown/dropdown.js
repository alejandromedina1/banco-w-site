const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="/components/dropdown/style.scss" />
<div class="dropdownPages">
<div class="dropdown-trigger download">
    <span class="title-span">
        <img class="dropdown-arrow" src="/icons/fi_file-minus.svg" alt="">
        <span class="gerente-name">
            <h5 class="dropdown-title"></h5>
            <p class="status"></p>
        </span>
    </span>
    <img class="dropdown-arrow" src="/icons/dropdown-arrow.svg" alt="">
</div>
<article class="dropdown-tab">
    <p class="description">
    </p>
</article>
</div>
`

export class DropdownCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)
        this.name = this.getAttribute('name')
        this.status = this.getAttribute('status')
        this.description = this.getAttribute('description')
        this.nameElement = this.shadowRoot.querySelector('.dropdown-title')
        this.statusElement = this.shadowRoot.querySelector('.status')
        this.descElement = this.shadowRoot.querySelector('.description')
        this.nameElement.innerText = this.name
        this.statusElement.innerText = this.status
        this.descElement.innerText = this.description
    }

    connectedCallback(){
        document.addEventListener("DOMContentLoaded", () => {
            const dropdowns = this.shadowRoot.querySelectorAll(".dropdownPages");
          
            dropdowns.forEach(dropdown => {
              const trigger = dropdown.querySelector(".dropdown-trigger");
              const content = dropdown.querySelector(".dropdown-tab");
              trigger.addEventListener("click", () => {
                content.classList.toggle("show");
              });
            });
          });
    }

    static get observedAttributes() {
        return ['name', 'status', 'description']
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
    }

    // displayContent(){
    //     document.addEventListener("DOMContentLoaded", () => {
    //         const dropdowns = document.querySelectorAll(".dropdownPages");
          
    //         dropdowns.forEach(dropdown => {
    //           const trigger = dropdown.querySelector(".dropdown-trigger");
    //           const content = dropdown.querySelector(".dropdown-tab");
    //           trigger.addEventListener("click", () => {
    //             content.classList.toggle("show");
    //           });
    //         });
    //       });
    // }
}

customElements.define('drop-card', DropdownCard)