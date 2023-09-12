import '../components/seguros-cards/cards.js'
const cardContainer = document.getElementById('seguros-cards-section')

cardContainer.innerHTML = ''

const card = document.createElement('seguros-cards')

card.setAttribute('card_image', '/images/seguros-soy-vida_4x.webp')
card.setAttribute('title_card', '"Soy Vida"')
card.setAttribute('text_card', 'Porque tu tranquilidad y la de tu familia es lo más importante, te ofrecemos nuestro seguro de vida voluntario, que garantiza el pago de una suma de dinero a tus beneficiarios en caso que fallezcas por cualquier causa')
card.setAttribute('redirect_link', '/')


cardContainer.append(card)