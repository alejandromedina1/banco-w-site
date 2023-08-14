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