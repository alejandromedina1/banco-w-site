const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

const toggleContent = ()=>{
  if (window.matchMedia('(max-width: 821px)').matches) {
    tabButtons[0].classList.add('active');
    tabContents[0].style.display = 'block';
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
  
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');
    
        button.classList.add('active');
        const selectedTab = button.getAttribute('data-tab');
        const selectedContent = document.getElementById(`${selectedTab}-content`);
        selectedContent.style.display = 'block';
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

document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector(".dropdown-trigger");
      const content = dropdown.querySelector(".dropdown-content");
      
      trigger.addEventListener("click", () => {
        content.classList.toggle("show");
      });
    });
  });