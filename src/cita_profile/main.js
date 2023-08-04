
    // Obtener referencias a los elementos del DOM
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalContainer = document.getElementById('modalContainer');

    // Abrir el modal al hacer clic en el botón
    openModalBtn.addEventListener('click', () => {
      modalContainer.style.display = 'flex';
    });

    // Cerrar el modal al hacer clic en el botón de cerrar o en el fondo transparente
    function closeModal() {
      modalContainer.style.display = 'none';
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', (event) => {
      if (event.target === modalContainer) {
        closeModal();
      }
    });
  

