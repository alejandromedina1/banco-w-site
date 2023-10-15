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

window.addEventListener('resize', () => toggleContent())
toggleContent();


window.addEventListener('resize', ()=> toggleBg())

const toggleBg = () =>{
  const bannerBg = document.querySelector('.banner-bg');
  if (window.matchMedia('(max-width: 821px)').matches) {
    bannerBg.src = '/images/bg_mobile.webp';
  } else {
    bannerBg.src = '/images/bg_deposito.webp'
  }
}

toggleBg();

var dropdownButton = document.getElementById('dropdown-button');
var dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

var dropdownButton2 = document.getElementById('dropdown-button2');
var dropdownMenu2 = document.getElementById('dropdown-menu2');

dropdownButton2.addEventListener('click', function() {
  dropdownMenu2.classList.toggle('show1');
});

var dropdownButton3 = document.getElementById('dropdown-button3');
var dropdownMenu3 = document.getElementById('dropdown-menu3');

dropdownButton3.addEventListener('click', function() {
  dropdownMenu3.classList.toggle('show2');
});