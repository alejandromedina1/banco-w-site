const arrayCheck = document.querySelectorAll('.checking')
arrayCheck.forEach(check => {
    check.addEventListener('click', () => {
        if (check.classList.contains('bi-check-circle')) {
            check.classList.remove('bi-check-circle')
            check.classList.add('bi-check-circle-fill')
        } else if (check.classList.contains('bi-check-circle-fill')) {
            check.classList.remove('bi-check-circle-fill')
            check.classList.add('bi-check-circle')
        }
    })
});

const btnCompare = document.querySelector('.btn-compare');

btnCompare.addEventListener('click', () => {
    const sectionActive = document.getElementById('choose-products')
    sectionActive.classList.remove('active')
    sectionActive.classList.add('inactive')
    const sectionInactive = document.getElementById('results-compare')
    sectionInactive.classList.remove('inactive')
    sectionInactive.classList.add('active')
})


if (window.innerWidth > 769) {
    const titleBanner = document.querySelector('.title-banner')
    titleBanner.textContent = 'Conoce tu mejor opción'

    const textBanner = document.querySelector('.text-banner')
    textBanner.textContent = '¿Aún no sabes cuál producto se ajusta más a tus necesidades o aún sigues dudando que es la mejor decisión? Mira aquí cuál producto cumple tus expectativas'
}