document.getElementById('back-container').addEventListener("click", () => {
    window.location.replace("/simuladores/")
})

document.getElementById("simular").addEventListener("click", function (event) {
    event.preventDefault()
});

document.getElementById('simular').addEventListener('click', () => {
    document.getElementById('result').style.display = "flex"
    document.getElementById('data').style.display = "none"
})

document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('result').style.display = "none"
    document.getElementById('data').style.display = "flex"
})




const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes)
const checkbox1 = checkboxes[0];
const checkbox3 = checkboxes[1];

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }

        
    });
});
