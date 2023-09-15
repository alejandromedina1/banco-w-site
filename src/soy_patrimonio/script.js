const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const chaSection = document.querySelector('.more-info');

const toggleContent = () => {
  if (window.matchMedia('(max-width: 821px)').matches) {
    tabButtons[0].classList.add('active');
    tabContents[0].style.display = 'flex';

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        button.classList.add('active');
        const selectedTab = button.getAttribute('data-tab');
        const selectedContent = document.getElementById(`${selectedTab}-content`);
        selectedContent.style.display = 'flex';
        (selectedTab === 'caracteristicas') ? chaSection.style.display = 'flex' : chaSection.style.display = 'none';
      });
    });
  } else {
    tabButtons[0].classList.add('active');
    tabContents[0].style.display = 'grid';
    chaSection.style.display = 'flex';

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        button.classList.add('active');
        const selectedTab = button.getAttribute('data-tab');
        const selectedContent = document.getElementById(`${selectedTab}-content`);
        selectedContent.style.display = 'grid';
        (selectedTab === 'caracteristicas') ? chaSection.style.display = 'flex' : chaSection.style.display = 'none';
      });
    });
  }
}

window.addEventListener('resize', () => toggleContent())
toggleContent();

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const content = dropdown.querySelector(".dropdown-tab");

    trigger.addEventListener("click", () => {
      content.classList.toggle("show");
    });
  });
});

window.addEventListener('resize', () => toggleBg())

const toggleBg = () => {
  const bannerBg = document.querySelector('.banner-bg');
  if (window.matchMedia('(max-width: 768px)').matches) {
    bannerBg.src = '/images/bg_patrimonio_mobile.webp';
  } else {
    bannerBg.src = '/images/bg_full_patrimonio.webp'
  }
}

toggleBg();