class NavBarDesktop extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        window.addEventListener('resize', () => this.toggleLogo());
        this.toggleLogo();

        const hamburger = document.querySelector('.hamburger');
        const iconMenu = document.querySelector('.hamburger-img');
        const btnText = document.querySelector('.btn-text');
        const navMobile = document.querySelector('.nav-mobile');

        //Deploy hamburger menu mobile
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            if (hamburger.classList.contains('active')) {
                iconMenu.src = '/icons/x.svg';
                btnText.textContent = 'Cerrar';
                navMobile.style.display = 'flex'
            } else {
                iconMenu.src = '/icons/fi_menu.svg';
                btnText.textContent = '';
                navMobile.style.display = 'none'
            }
            console.log(hamburger.className);
        });


        const dropdownMobile = document.querySelector('.arrow-down-mobile');
        const dropdownContent = document.querySelector('.dropdown-content');
        // Deploy dropdown menu mobile
        dropdownMobile.addEventListener('click', () => {
            dropdownMobile.classList.toggle('active')
            if (dropdownMobile.classList.contains('active')) {
                dropdownContent.style.display = 'flex'
            } else {
                dropdownContent.style.display = 'none'
            }
        });

        const logoBtn = document.querySelector('.logo');
        logoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.replace('/');
        })

        const currentPath = window.location.pathname

        const sections = [
            { path: '/', id: 'inicio' },
            { path: '/ahorradores_inversionistas/', id: 'clientes' },
            { path: '/business-people/', id: 'clientes' },
            { path: '/gotahorro/', id: 'clientes' },
            { path: '/credito-vehiculo/', id: 'clientes' },
            { path: '/micro-credito/', id: 'clientes' },
            {path: '/giros-internacionales/', id: 'clientes'},
            { path: '/pqrs/', id: 'nosotros' }
        ]

        const activeColor = '#FF8833'
        sections.forEach(section => {
            if (currentPath === section.path || (currentPath === '/' && section.path === '/')) {
                const sectionNavItem = document.getElementById(section.id);
                sectionNavItem.style.color = activeColor
            }
        })
    }


    toggleLogo() {
        const logo = document.querySelector('.logo');
        const navMobile = document.querySelector('.nav-mobile');
        if (window.matchMedia("(max-width: 1020px)").matches) {
            logo.src = "/images/logo-bancoW-mobile.webp";
        } else {
            logo.src = "/images/logo-bancoW.webp";
            navMobile.style.display = 'none';
        }

    }


    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="components/navbar/style.scss">
        <header class="nav-menu">
            <div class="nav-superior">
                <img class="logo" src="/images/logo-bancoW.webp" alt="Logo Banco W">
                <button class="hamburger"><img class="hamburger-img" src="/icons/fi_menu.svg"><p class="btn-text"></p></button>
                <span class="right-top-nav">
                    <div class="search-box">
                        <input type="search" name="buscador" class="buscador" placeholder="¿Qué estás buscando?">
                        <img src="/icons/fi_search.svg" class="search-icon" alt="Icono buscador"/>
                    </div>
                    <a href="/login/" class="inicio-sesion">Iniciar sesión</a>
                    <a href="/pagos/" class="pagos-pse"><img src="/images/logo-pse.webp" alt="Logo PSE" /> <span>Pagos en línea</span></a>
                    <div class="profile">
                        <img class="profile-picture" src="/images/black_woman_1.webp" alt="Foto de perfil"/>
                        <span class="profile-info">
                        <h5>Jessica García</h5>
                        <p>Ver perfil <i class="bi bi-chevron-right"></i></p>
                        </span>
                    </div>
                </span>
            </div>
                <nav class="nav-desktop">
                    <ul class="navegacion">
                        <li><a href="/" id="inicio">Inicio </a></li>
                        <li class="dropdownNav"><a href="#" id="clientes">Clientes <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                            <ul class="dropdown-content" id="cliente">
                                <li><a href="/business-people/">Personas con negocio</a></li>
                                <li><a href="/ahorradores_inversionistas/">Ahorradores e inversionistas</a></li>
                                <li><a href="#">Pensionados y maestros</a></li>
                                <li><a href="#">Colombianos en el exterior</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="productos-servicios">Productos y servicios <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Créditos</a></li>
                                <li><a href="#">Cuentas de ahorro e inversión</a></li>
                                <li><a href="/giros-internacionales/">Giros internacionales</a></li>
                                <li><a href="/seguros/">Seguros</a></li>

                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="asesoria-financiera">Asesoría financiera <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Educación financiera</a></li>
                                <li><a href="/informacion-al-consumidor-financiero/">Consumidor financiero</a></li>
                                <li><a href="#">Seguridad bancaria</a></li>
                                <li><a href="#">Revista</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="nosotros">Acerca de nosotros <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="/trabaja-con-nosotros/">Trabaja con nosotros</a></li>
                                <li><a href="/quienes-somos/">Quiénes somos</a></li>
                                <li><a href="/proteccion-y-sostenibilidad/">Protección de datos</a></li>
                                <li><a href="/licitaciones/">Licitación de seguros</a></li>
                                <li><a href="/fundacion-wwb/">Fundación WWB Colombia</a></li>
                                <li><a href="#">Sala de prensa</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="/atencion-inversionista/" id="atencion-inversionista">Atención al inversionista <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Informes PDF</a></li>
                                <li><a href="/estados-financieros/">Estados Financieros</a></li>
                                <li><a href="/info-accionistas/">Información de accionistas</a></li>
                                <li><a href="/junta-directiva-alta-gerencia/">Junta Directiva y Alta Gerencia</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="canales-atencion">Canales de atención <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content last-dropdown">
                                <li><a href="#">Puntos de pago</a></li>
                                <li><a href="#">Nuestras oficinas</a></li>
                                <li><a href="#">Corresponsales en alianza</a></li>
                                <li><a href="#">Banca telefónica</a></li>
                                <li><a href="/pqrs/">Preguntas, quejas, reclamos y sugerencias</a></li>
                                <li><a href="#">Abrir nuevos productos</a></li>
                                <li><a href="/atencion_financiero/">Atención al consumidor financiero</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <nav class="nav-mobile">
                    <div class="search-box">
                        <input type="search" name="buscador" class="buscador" placeholder="¿Qué estás buscando?">
                        <img src="/icons/fi_search.svg" class="search-icon" alt="Icono buscador"/>
                    </div>
                    <a href="/pagos/" class="pagos-pse"><img src="/images/logo-pse.webp" alt="Logo PSE" /> <span>Pagos en línea</span></a>
                    <a href="/login/" class="inicio-sesion"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 18.375V16.625C17.5 15.6967 17.1313 14.8065 16.4749 14.1501C15.8185 13.4937 14.9283 13.125 14 13.125H7C6.07174 13.125 5.1815 13.4937 4.52513 14.1501C3.86875 14.8065 3.5 15.6967 3.5 16.625V18.375" stroke="#EFEFEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5 9.625C12.433 9.625 14 8.058 14 6.125C14 4.192 12.433 2.625 10.5 2.625C8.567 2.625 7 4.192 7 6.125C7 8.058 8.567 9.625 10.5 9.625Z" stroke="#EFEFEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                     Iniciar sesión</a>

                     <ul class="navegacion">
                     <li class="dropdownNav"><a href="#" id="clientes">Clientes <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                            <ul class="dropdown-content" id="cliente">
                                <li><a href="/business-people/">Personas con negocio</a></li>
                                <li><a href="/ahorradores_inversionistas/">Ahorradores e inversionistas</a></li>
                                <li><a href="#">Pensionados y maestros</a></li>
                                <li><a href="#">Colombianos en el exterior</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="productos-servicios">Productos y servicios <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Créditos</a></li>
                                <li><a href="#">Cuentas de ahorro e inversión</a></li>
                                <li><a href="/giros-internacionales/">Giros internacionales</a></li>
                                <li><a href="/seguros/">Seguros</a></li>

                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="asesoria-financiera">Asesoría financiera <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Educación financiera</a></li>
                                <li><a href="#">Consumidor financiero</a></li>
                                <li><a href="#">Seguridad bancaria</a></li>
                                <li><a href="#">Revista</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="nosotros">Acerca de nosotros <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="/trabaja-con-nosotros/">Trabaja con nosotros</a></li>
                                <li><a href="#">Quiénes somos</a></li>
                                <li><a href="#">Protección de datos</a></li>
                                <li><a href="#">Licitación de seguros</a></li>
                                <li><a href="#">Fundación WWB Colombia</a></li>
                                <li><a href="#">Sala de prensa</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="atencion-inversionista">Atención al inversionista <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Informes PDF</a></li>
                                <li><a href="/estados-financieros/">Estados Financieros</a></li>
                                <li><a href="/info-accionistas/">Información de accionistas</a></li>
                                <li><a href="/junta-directiva-alta-gerencia/">Junta Directiva y Alta Gerencia</a></li>
                            </ul>
                        </li>
                        <li class="dropdownNav"><a href="#" id="canales-atencion">Canales de atención <svg class="arrow-down" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L4.85858 5.35858C4.93668 5.43668 5.06332 5.43668 5.14142 5.35858L9 1.5" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></a>
                            <ul class="dropdown-content">
                                <li><a href="#">Puntos de pago</a></li>
                                <li><a href="#">Nuestras oficinas</a></li>
                                <li><a href="#">Corresponsales en alianza</a></li>
                                <li><a href="#">Banca telefónica</a></li>
                                <li><a href="/pqrs/">Preguntas, quejas, reclamos y sugerencias</a></li>
                                <li><a href="#">Abrir nuevos productos</a></li>
                                <li><a href="/atencion_financiero/">Atención al consumidor financiero</a></li>
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

