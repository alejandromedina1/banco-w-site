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