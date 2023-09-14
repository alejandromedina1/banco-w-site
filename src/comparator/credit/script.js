
const arrayCheck = document.querySelectorAll('.checking')
arrayCheck.forEach(check => {
    check.addEventListener('click', () => {
        if(check.classList.contains('bi-check-circle')){
            check.classList.remove('bi-check-circle')
            check.classList.add('bi-check-circle-fill')
        } else if(check.classList.contains('bi-check-circle-fill')){
            check.classList.remove('bi-check-circle-fill')
            check.classList.add('bi-check-circle')
        }
    })
});
