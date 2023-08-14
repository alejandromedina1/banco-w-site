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