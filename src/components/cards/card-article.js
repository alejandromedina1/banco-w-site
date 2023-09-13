class cardArticle extends HTMLElement {

    constructor() {
        super();

        this.image;
        this.title;
        this.text;
        this.btn;
        this.link;
        this.description;
    }

    static get observedAttributes() {
        return [
            "image", "title", "text", "btn", "link", "description",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {


        if (newValue !== oldValue){
            switch (nameAtr) {
                case "image":
    
                    this.image = newValue
    
                    break;
    
                case "title":
    
                    this.title = newValue
    
                    break;
    
                case "text":
    
                    this.text = newValue
    
                    break;
    
                case "btn":
    
                    this.btn = newValue
    
                    break;
    
                case "link":
    
                    this.link = newValue
    
                    break;
    
                case "description":
    
                    this.description = newValue
    
                    break;
            }
        }
        
    }

    connectedCallback() {

        this.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${this.image}" class="card-img-top" alt="${this.description}">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.text}</p>
                <div class="more">
                    <a href="${this.link}" class="link">${this.btn}</a>
                    <img class="icon" src="/icons/arrow-right-purple.svg" alt="ícono para ir a buscar más artículos en el mismo formato">
                </div>
            </div>
        </div>
        `
    }
}

window.customElements.define("card-article", cardArticle)

export default cardArticle
