const buttonsNav = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content')

buttonsNav.forEach(btn => {
    btn.addEventListener('click', () => {
        buttonsNav.forEach(btn => {
            btn.classList.remove("active-btn")
            btn.classList.add("inactive-btn")
        })
        btn.classList.add("active-btn")
        btn.classList.remove("inactive-btn")

        sections.forEach(section => {
            if (section.id === btn.id) {
                section.classList.add("active-section")
                section.classList.remove("inactive-section")
            } else {
                section.classList.remove("active-section")
                section.classList.add("inactive-section")
            }
        });
    })
});