class NavbarLanding extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../../src/components/nav-bar-landing/style.css">

        `
    }

}


customElements.define('navbar-landing', NavbarLanding)
export default NavbarLanding