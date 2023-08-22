class NavbarFloat extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {

        this.innerHTML = `
        <link rel="stylesheet" href="/components/nav-bar-float/style.scss">
        <nav id="nav-bar-float">
    <button class="option_credit">
        <img class="icon" src="/icons/credit-purple.svg" alt="Crédito inmediato">
        <a href="/credito-inmediato/">Crédito inmediato</a>
    </button>
    <button class="option_blog">
        <img class="icon" src="/icons/blog-purple.svg" alt="Blog">
        <a href="">Blog</a>
    </button>
    <button class="option_comparator">
        <img class="icon" src="/icons/comparator-purple.svg" alt="Blog">
        <a href="">Comparador financiero</a>
    </button>
    <button class="option_simulator">
        <img class="icon" src="/icons/calculator-purple.svg" alt="Simulador financiero">
        <a href="/simuladores/">Simulador financiero</a>
    </button>
    </nav>
        `;
    }
}

customElements.define('navbar-float', NavbarFloat)
export default NavbarFloat;