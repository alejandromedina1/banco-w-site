const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Seleccionar la pestaña "Características" por defecto
tabButtons[0].classList.add('active');
tabContents[0].style.display = 'block';

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover la clase 'active' de todas las pestañas y contenidos
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');

    // Agregar la clase 'active' a la pestaña clickeada y su contenido relacionado
    button.classList.add('active');
    const selectedTab = button.getAttribute('data-tab');
    const selectedContent = document.getElementById(`${selectedTab}`);
    selectedContent.style.display = 'block';
    console.log(selectedContent)
  });
});

const form = document.getElementById("form");
const activeMsg = document.getElementById("active-msg");
const backBtn = document.getElementById("comeback");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    form.style.display = "none";
    activeMsg.style.display = "flex";
});

backBtn.addEventListener("click", function() {
    form.style.display = "flex";
    activeMsg.style.display = "none";
});

const form2 = document.getElementById("form2");
const activeMsg2 = document.getElementById("active-msg2");
const backBtn2 = document.getElementById("comeback2");

form2.addEventListener("submit", function(event) {
    event.preventDefault();

    form2.style.display = "none";
    activeMsg2.style.display = "flex";
});

backBtn2.addEventListener("click", function() {
    form2.style.display = "flex";
    activeMsg2.style.display = "none";
});

const form3 = document.getElementById("form3");
const activeMsg3 = document.getElementById("active-msg3");
const backBtn3 = document.getElementById("comeback3");

form3.addEventListener("submit", function(event) {
    event.preventDefault();

    form3.style.display = "none";
    activeMsg3.style.display = "flex";
});

backBtn3.addEventListener("click", function() {
    form3.style.display = "flex";
    activeMsg3.style.display = "none";
});

