window.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const textoInput = document.getElementById('textoInput');
    const spanMessage = document.getElementById('spanMessage');
    const checkbox1 = checkboxes[0];
    const checkbox3 = checkboxes[2];
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          checkboxes.forEach(otherCheckbox => {
            if (otherCheckbox !== this) {
              otherCheckbox.checked = false;
            }
          });
        }
        
        if (checkbox1.checked) {
          spanMessage.style.display = 'block';
        } else {
          spanMessage.style.display = 'none';
        }
        
        if (checkbox3.checked) {
          textoInput.style.display = 'block';
        } else {
          textoInput.style.display = 'none';
        }
      });
    });
    
    checkbox1.checked = true;
    
    if (checkbox1.checked) {
      spanMessage.style.display = 'block';
    }
    
    if (checkbox3.checked) {
      textoInput.style.display = 'block';
    }
});

const nextBtn = document.getElementById("select-btn");
const pag1 = document.querySelector(".Select")
const pag2 = document.querySelector(".Select2")

nextBtn.addEventListener('click', function() {
    if(pag1.style.display === 'none') {
        pag1.style.display = 'block'
        pag2.style.display = 'none'
    } else {
        pag1.style.display = 'none'
        pag2.style.display = 'block'
    }
});

const selectBtn = document.getElementById('select2-btn');
const paymentCheckbox = document.getElementById('c1-13');
const cashCheckbox = document.getElementById('c2-13');
const select2Div = document.querySelector('.Select2');
const select3Div = document.querySelector('.Select3');
const card = document.getElementById('hidden-card')

selectBtn.addEventListener('click', () => {
  if (paymentCheckbox.checked) {
    window.location.href = 'https://www.pse.com.co/persona';
  } else if (cashCheckbox.checked) {
    select2Div.style.display = 'none';
    select3Div.style.display = 'block';
  }
  card.style.display = 'none';
});

const select3Btn = document.getElementById("select3-btn");
const select3 = document.querySelector(".Select3")
const select4 = document.querySelector(".Select4")

select3Btn.addEventListener('click', function() {
    if(select3.style.display === 'none') {
        select3.style.display = 'block'
        select4.style.display = 'none'
    } else {
        select3.style.display = 'none'
        select4.style.display = 'block'
    }
});

const select4Btn = document.getElementById("select4-btn");
const select5 = document.querySelector(".Select5")

select4Btn.addEventListener('click', function() {
    if(select4.style.display === 'none') {
        select4.style.display = 'block'
        select5.style.display = 'none'
    } else {
        select4.style.display = 'none'
        select5.style.display = 'block'
    }
});

const select5Btn = document.getElementById("select5-btn");

select5Btn.addEventListener('click', function() {
  location.reload();
})

const cancel = document.getElementById("cancel-btn");

cancel.addEventListener('click', function() {
    location.reload();
})

const modify = document.getElementById("modify");

modify.addEventListener('click', function() {
  location.reload();
})

