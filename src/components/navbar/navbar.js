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
                <div class="search-box">
                <input type="search" name="buscador" class="buscador" placeholder="¿Qué estás buscando?">
                <img src="/icons/fi_search.svg" class="search-icon" alt="Icono buscador"/>
                </div>
                <a href="#" class="inicio-sesion">Iniciar sesión</a>
                <a href="#" class="pagos-pse"><img src="/images/logo-pse.webp" alt="Logo PSE" /> <span>Pagos en línea</span></a>
            </div>
                <nav>
                    <ul class="navegacion">
                        <li><a href="#">Inicio </a></li>
                        <li class="dropdown"><a href="#">Clientes <img src="icons/arrow-down.svg"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Personas con negocio</a></li>
                                <li><a href="#">Ahorradores e inversionistas</a></li>
                                <li><a href="#">Pensionados y maestros</a></li>
                                <li><a href="#">Colombianos en el exterior</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#">Productos y servicios <img src="icons/arrow-down.svg"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Créditos</a></li>
                                <li><a href="#">Cuentas de ahorro e inversión</a></li>
                                <li><a href="#">Giros internacionales</a></li>
                                <li><a href="#">Seguros</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#">Asesoría financiera <img src="icons/arrow-down.svg"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Educación financiera</a></li>
                                <li><a href="#">Consumidor financiero</a></li>
                                <li><a href="#">Seguridad bancaria</a></li>
                                <li><a href="#">Revista</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#">Acerca de nosotros <img src="icons/arrow-down.svg"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Quiénes somos</a></li>
                                <li><a href="#">Opción transaccional</a></li>
                                <li><a href="#">Línea telefónica</a></li>
                                <li><a href="#">PQRS</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
        </header>
        `;
        
    }
}

customElements.define('nav-bar-desktop', NavBarDesktop);
export default NavBarDesktop;