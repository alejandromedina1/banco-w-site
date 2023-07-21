class NavBarDesktop extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <link rel="stylesheet" href="components/navbar/style.scss">
        <header class="nav-desktop">
            <div class="nav-superior">
                <img src="images/logo-bancoW.webp" alt="Logo Banco W">
                <input type="search" name="buscador" class="buscador" placeholder="¿Qué estás buscando?">
                <a href="#" class="inicio-sesion">Iniciar sesión</a>
                <a href="#" class="pagos-pse">Pagos en línea</a>
            </div>
                <nav>
                    <ul class="navegacion">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">Productos y servicios </a></li>
                        <li><a href="#">Asesoría financiera</a></li>
                        <li><a href="#">Acerca de nosotros</a></li>
                    </ul>
                </nav>
        </header>
        `;
        
    }
}

customElements.define('nav-bar-desktop', NavBarDesktop);
export default NavBarDesktop;