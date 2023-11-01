import '../components/tasas-cards/cards.js'
const cardContainer = document.getElementById('seguros-cards-section')


const dropdownButtons = document.querySelectorAll('.dropdown-icon')
const iconOrientarion = document.getElementsByClassName('dropdown-icon')
console.log(dropdownButtons)

const dropdowns = document.getElementsByClassName('item-dropdown-contained')

dropdownButtons.forEach((button, index) => {
    button.addEventListener('click', ()=>{
        if (dropdowns[index].style.display === "none") {
            dropdowns[index].style.display = "flex"
            iconOrientarion[index].src= "/images/down_arrow_4x.webp"
        } else {
            dropdowns[index].style.display = "none"
            iconOrientarion[index].src= "/images/right_arrow_4x.webp"
        }
    })
});
