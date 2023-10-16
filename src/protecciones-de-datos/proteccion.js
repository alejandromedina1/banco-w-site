import '../components/tasas-cards/cards.js'
const cardContainer = document.getElementById('seguros-cards-section')


const soyVida = document.createElement('tasas-cards')

soyVida.setAttribute('card_image', '/images/blue-card-image_4x.webp')
soyVida.setAttribute('title_card', 'Microcrédito y Seguros')
soyVida.setAttribute('text_card', 'Tasas y tarifas vigentes')
cardContainer.append(soyVida)

const soyPatrimonioSeguro = document.createElement('tasas-cards')

soyPatrimonioSeguro.setAttribute('card_image', '/images/blue-card-image_4x.webp')
soyPatrimonioSeguro.setAttribute('title_card', 'Libranza')
soyPatrimonioSeguro.setAttribute('text_card', 'Tasa y tarifas vigentes')
cardContainer.append(soyPatrimonioSeguro)

const soyProteccionFamiliar = document.createElement('tasas-cards')

soyProteccionFamiliar.setAttribute('card_image', '/images/blue-card-image_4x.webp')
soyProteccionFamiliar.setAttribute('title_card', 'Cuenta de Ahorro y Depósito de Bajo Monto')
soyProteccionFamiliar.setAttribute('text_card', 'Tasas y tarifas vigentes')
cardContainer.append(soyProteccionFamiliar)

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
