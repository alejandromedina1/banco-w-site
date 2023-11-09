const buttonsNav = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content')

buttonsNav.forEach(btn => {
    btn.addEventListener('click', () => {
        buttonsNav.forEach(btn => {
            btn.classList.remove("active-btn")
            btn.classList.add("inactive-btn")
        })
        btn.classList.add("active-btn")
        btn.classList.remove("inactive-btn")

        sections.forEach(section => {
            if (section.id === btn.id) {
                section.classList.add("active-section")
                section.classList.remove("inactive-section")
            } else {
                section.classList.remove("active-section")
                section.classList.add("inactive-section")
            }
        });
    })
});

if (window.innerWidth > 768) {
    buttonsNav.forEach(btn => {
        switch (btn.id) {
            case 'benefits-section':
                btn.textContent = 'Beneficios, tarifas y límites de utilización';
                break;

            case 'ubication-section':
                btn.textContent = 'Ubica tu corresponsal más cercano';
                break;

            case 'services-section':
                btn.textContent = 'Servicios que ofrecen';
                break;

            case 'tips-section':
                btn.textContent = 'Recomendaciones de seguridad';
                break;

        }
    });

    const newP = document.getElementById('p-add');
    newP.textContent = 'Selecciona el servicio que necesites y te ayudamos a ubicar rápidamente corresponsales propios, corresponsales en alianza y oficinas.';
}