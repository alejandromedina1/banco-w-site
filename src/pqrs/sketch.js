document.addEventListener("DOMContentLoaded", function () {
    const formAcceptCheckbox = document.getElementById("form-accept");
    const submitButton = document.getElementById("send-form");

    formAcceptCheckbox.addEventListener("change", function () {
        submitButton.disabled = !this.checked;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-procedure");
    const infoSections = document.querySelectorAll(".procedure-info");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");
            infoSections.forEach(function (section) {
                section.classList.remove("active");
            });

            const activeBtn = button.id;

            if (activeBtn === 'new-procedure-btn') {
                const sectionActive = document.getElementById('new-procedure');
                sectionActive.classList.add('active')
            } else if (activeBtn === 'status-procedure-btn') {
                const sectionActive = document.getElementById('status-procedure');
                sectionActive.classList.add('active')
            }

        });
    });


});


const divs = document.querySelectorAll('.each-item'); 

divs.forEach((div, index) => {
    if (index % 2 === 0) { 
        divs[index+1].style.backgroundColor = '#F3F4F5';
    }
});