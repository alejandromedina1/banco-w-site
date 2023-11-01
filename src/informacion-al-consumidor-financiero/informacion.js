import '../components/notext-cards/cards.js'
const cardContainer = document.getElementById('seguros-cards-section')


const soyVida = document.createElement('notext-cards')

soyVida.setAttribute('card_image', '/images/tasas-y-tarifas_4x.webp')
soyVida.setAttribute('title_card', 'Tasas y tarifas')
soyVida.setAttribute('text_card', '')
soyVida.setAttribute('redirect_link', '/tasas-y-tarifas/')
cardContainer.append(soyVida)
soyVida.querySelector('.card').classList.add('insurances-volunteers')

const soyPatrimonioSeguro = document.createElement('notext-cards')

soyPatrimonioSeguro.setAttribute('card_image', '/images/contratos-y-reglamentos_4x.webp')
soyPatrimonioSeguro.setAttribute('title_card', 'Contratos y Reglamentos de Productos')
soyPatrimonioSeguro.setAttribute('text_card', '')
soyPatrimonioSeguro.setAttribute('redirect_link', '/reglamentos/')
cardContainer.append(soyPatrimonioSeguro)
soyPatrimonioSeguro.querySelector('.card').classList.add('insurances-volunteers')

const soyProteccionFamiliar = document.createElement('notext-cards')

soyProteccionFamiliar.setAttribute('card_image', '/images/cobranza-soluciones_4x.webp')
soyProteccionFamiliar.setAttribute('title_card', 'Empresas de Cobranza Soluciones Amables')
soyProteccionFamiliar.setAttribute('text_card', '')
soyProteccionFamiliar.setAttribute('redirect_link', '/cobranza-y-soluciones/')
cardContainer.append(soyProteccionFamiliar)
soyProteccionFamiliar.querySelector('.card').classList.add('insurances-volunteers')

const soyPrevencionExequial = document.createElement('notext-cards')

soyPrevencionExequial.setAttribute('card_image', '/images/protecciones-a-datos-personales_4x.webp')
soyPrevencionExequial.setAttribute('title_card', 'Protección a datos personales y ley de victimas')
soyPrevencionExequial.setAttribute('text_card', '')
soyPrevencionExequial.setAttribute('redirect_link', '/protecciones-de-datos/')
cardContainer.append(soyPrevencionExequial)
soyPrevencionExequial.querySelector('.card').classList.add('insurances-volunteers')

const soySeguro = document.createElement('notext-cards')

soySeguro.setAttribute('card_image', '/images/fogafin_4x.webp')
soySeguro.setAttribute('title_card', 'Fogafín')
soySeguro.setAttribute('text_card', '')
soySeguro.setAttribute('redirect_link', '/fogafin/')
cardContainer.append(soySeguro)
soySeguro.querySelector('.card').classList.add('insurances-volunteers')

