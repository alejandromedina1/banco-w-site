import '../components/InverCards/InverCards.js'

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

const toggleContent = ()=>{
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
      });
    });
  } else {
  tabButtons[0].classList.add('active');
  tabContents[0].style.display = 'grid';
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
  
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.style.display = 'none');
  
      button.classList.add('active');
      const selectedTab = button.getAttribute('data-tab');
      const selectedContent = document.getElementById(`${selectedTab}-content`);
      selectedContent.style.display = 'grid';

    });
  });
  }
}

window.addEventListener('resize', ()=> toggleContent())
toggleContent();

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdownPages");

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const content = dropdown.querySelector(".dropdown-tab");
    const arrow = document.querySelectorAll(".dropdown-arrow")
    trigger.addEventListener("click", () => {
      content.classList.toggle("show");
    });
  });
});

window.addEventListener('resize', () => toggleBg())

const toggleBg = () => {
  const bannerBg = document.querySelector('.banner-bg');
  if (window.matchMedia('(max-width: 500px)').matches) {
    bannerBg.src = '/images/atencion-inver-mobile.webp';
  } else {
    bannerBg.src = '/images/atencion_inver_bg.webp'
  }
}

toggleBg();
