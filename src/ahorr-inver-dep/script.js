const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Seleccionar la pestaña "Características" por defecto
tabButtons[0].classList.add('active');
tabContents[0].style.display = 'grid';

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover la clase 'active' de todas las pestañas y contenidos
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');

    // Agregar la clase 'active' a la pestaña clickeada y su contenido relacionado
    button.classList.add('active');
    const selectedTab = button.getAttribute('data-tab');
    const selectedContent = document.getElementById(`${selectedTab}-content`);
    selectedContent.style.display = 'grid';
  });
});


window.addEventListener('resize', ()=> toggleBg())

const toggleBg = () =>{
  const bannerBg = document.querySelector('.banner-bg');
  if (window.matchMedia('(max-width: 821px)').matches) {
    bannerBg.src = '/images/bg_mobile.webp';
  } else {
    bannerBg.src = '/images/bg_deposito.webp'
  }
}