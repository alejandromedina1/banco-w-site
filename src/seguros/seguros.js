import '../components/seguros-cards/cards.js'
const cardContainer = document.getElementById('seguros-cards-section')


const soyVida = document.createElement('seguros-cards')

soyVida.setAttribute('card_image', '/images/seguros-soy-vida_4x.webp')
soyVida.setAttribute('title_card', '"Soy Vida"')
soyVida.setAttribute('text_card', 'Porque tu tranquilidad y la de tu familia es lo más importante, te ofrecemos nuestro seguro de vida voluntario, que garantiza el pago de una suma de dinero a tus beneficiarios en caso que fallezcas por cualquier causa')
soyVida.setAttribute('redirect_link', '/')
cardContainer.append(soyVida)
soyVida.querySelector('.card').classList.add('insurances-volunteers')

const soyPatrimonioSeguro = document.createElement('seguros-cards')

soyPatrimonioSeguro.setAttribute('card_image', '/images/seguros-soy-patrimonio-seguro_4x.webp')
soyPatrimonioSeguro.setAttribute('title_card', '"Soy Patrimonio Seguro"')
soyPatrimonioSeguro.setAttribute('text_card', 'Estamos seguros que quieres disfrutar de tu hogar y tu negocio con total tranquilidad, nuestro seguro “Soy patrimonio Seguro” protege tu inmueble y su contenido frente a eventos inesperados.')
soyPatrimonioSeguro.setAttribute('redirect_link', '/soy_patrimonio/')
cardContainer.append(soyPatrimonioSeguro)
soyPatrimonioSeguro.querySelector('.card').classList.add('insurances-volunteers')

const soyProteccionFamiliar = document.createElement('seguros-cards')

soyProteccionFamiliar.setAttribute('card_image', '/images/seguros-soy-proteccion-familiar_4x.webp')
soyProteccionFamiliar.setAttribute('title_card', '"Soy Protección Familiar"')
soyProteccionFamiliar.setAttribute('text_card', 'Estamos seguros que quieres garantizar la protección económica de tu familia. Nuestro seguro de Accidentes Personales “Soy Protección Familiar” es una excelente opción de cobertura, te proteges tu y los proteges a ellos.')
soyProteccionFamiliar.setAttribute('redirect_link', '/')
cardContainer.append(soyProteccionFamiliar)
soyProteccionFamiliar.querySelector('.card').classList.add('insurances-volunteers')

const soyPrevencionExequial = document.createElement('seguros-cards')

soyPrevencionExequial.setAttribute('card_image', '/images/seguros-soy-prevencion-exequial_4x.webp')
soyPrevencionExequial.setAttribute('title_card', '"Soy Prevención Exequial"')
soyPrevencionExequial.setAttribute('text_card', 'Estamos seguros que siempre quieres ayudar a los tuyos, nuestro producto “Soy Previsión Exequial” pone a tu disposición y la de tu familia, servicios funerarios de primera línea para atender la perdida de un ser querido')
soyPrevencionExequial.setAttribute('redirect_link', '/')
cardContainer.append(soyPrevencionExequial)
soyPrevencionExequial.querySelector('.card').classList.add('insurances-volunteers')

const soySeguro = document.createElement('seguros-cards')

soySeguro.setAttribute('card_image', '/images/seguros-soy-prevenido_4x.webp')
soySeguro.setAttribute('title_card', 'Soy Prevenido')
soySeguro.setAttribute('text_card', 'Porque tu tranquilidad es lo más importante para nosotros, te ofrecemos nuestro seguro Soy Prevenido, que garantiza el reintegro de tu dinero de acuerdo al plan contratado en caso de que sufras un hurto calificado o la indemnización a tus beneficiarios en caso que fallezcas a causa de este suceso.')
soySeguro.setAttribute('redirect_link', '/')
cardContainer.append(soySeguro)
soySeguro.querySelector('.card').classList.add('insurances-volunteers')

const soySeguroFamiliar = document.createElement('seguros-cards')

soySeguroFamiliar.setAttribute('card_image', '/images/seguros-soy-seguro-familiar_4x.webp')
soySeguroFamiliar.setAttribute('title_card', 'Soy Seguro Familiar')
soySeguroFamiliar.setAttribute('text_card', 'Asegura tu vida, la de tu cónyugue e hijos. Es un seguro adicional al Voy Seguro que te brinda la posibilidad de proteger a tu familia con una póliza de accidentes')
soySeguroFamiliar.setAttribute('redirect_link', '/')
cardContainer.append(soySeguroFamiliar)
soySeguroFamiliar.querySelector('.card').classList.add( 'insurances-volunteers')

const soySeguroHogar = document.createElement('seguros-cards')

soySeguroHogar.setAttribute('card_image', '/images/seguros-soy-seguro-hogar_4x.webp')
soySeguroHogar.setAttribute('title_card', 'Soy Seguro Hogar')
soySeguroHogar.setAttribute('text_card', 'Como asegurado tienes la oportunidad de proteger voluntariamente tu hogar y/o negocio junto con tus bienes ante alguna situación inesperada de la naturaleza, un incendio o daños producidos en huelgas, entre otros eventos que puedan afectar tu patrimonio.')
soySeguroHogar.setAttribute('redirect_link', '/')
cardContainer.append(soySeguroHogar)
soySeguroHogar.querySelector('.card').classList.add('insurances-volunteers')

const planExequial = document.createElement('seguros-cards')

planExequial.setAttribute('card_image', '/images/seguros-plan-exequial_4x.webp')
planExequial.setAttribute('title_card', 'Plan Exequial')
planExequial.setAttribute('text_card', 'Es el plan de protección que pone a disposición de la familia, los servicios funerarios necesarios ante el fallecimiento de alguno de sus miembros en calidad de afiliado y de su grupo beneficiario, de acuerdo a la cobertura.')
planExequial.setAttribute('redirect_link', '/')
cardContainer.append(planExequial)
planExequial.querySelector('.card').classList.add('insurances-volunteers')

const soyBeneficioEducativo = document.createElement('seguros-cards')

soyBeneficioEducativo.setAttribute('card_image', '/images/seguros-soy-beneficio-educativo_4x.webp')
soyBeneficioEducativo.setAttribute('title_card', 'Soy beneficio educativo')
soyBeneficioEducativo.setAttribute('text_card', 'Porque la educación es la garantía de un mejor futuro, con tu seguro de accidentes contribuyes a que tus hijos logren sus metas.')
soyBeneficioEducativo.setAttribute('redirect_link', '/')
cardContainer.append(soyBeneficioEducativo)
soyBeneficioEducativo.querySelector('.card').classList.add('insurances-volunteers')

const soySalud = document.createElement('seguros-cards')

soySalud.setAttribute('card_image', '/images/seguros-soy-salud_4x.webp')
soySalud.setAttribute('title_card', 'Soy salud')
soySalud.setAttribute('text_card', 'Porque sabemos que tu salud es lo mas importante, tenemos el seguro “Soy Salud” para cuidarte.')
soySalud.setAttribute('redirect_link', '/')
cardContainer.append(soySalud)
soySalud.querySelector('.card').classList.add('insurances-volunteers')

const vida = document.createElement('seguros-cards')

vida.setAttribute('card_image', '/images/seguros-vida_4x.webp')
vida.setAttribute('title_card', 'Vida')
vida.setAttribute('text_card', 'Ampara a nuestros clientes frente a los riesgos de muerte por cualquier causa e incapacidad total permanente durante la vigencia del crédito, generando la cancelación del valor insoluto de la deuda a la fecha del evento en caso de su materialización.')
vida.setAttribute('redirect_link', '/')
cardContainer.append(vida)
vida.querySelector('.card').classList.add('insurances-morosos')

const incendioTerremoto = document.createElement('seguros-cards')

incendioTerremoto.setAttribute('card_image', '/images/seguros-incendio-y-terremoto_4x.webp')
incendioTerremoto.setAttribute('title_card', 'Incendio y terremoto')
incendioTerremoto.setAttribute('text_card', 'Es un seguro que ampara las pérdidas de daños materiales y económicos que puedan sufrir los inmuebles entregados como garantía hipotecaria al Banco W, de acuerdo a la cobertura.')
incendioTerremoto.setAttribute('redirect_link', '/incendio_terremotos')
cardContainer.append(incendioTerremoto)
incendioTerremoto.querySelector('.card').classList.add('insurances-morosos')

const deudoresMicrocredito = document.createElement('seguros-cards')

deudoresMicrocredito.setAttribute('card_image', '/images/seguros-deudores-microcredito_4x.webp')
deudoresMicrocredito.setAttribute('title_card', 'Seguro deudores microcrédito')
deudoresMicrocredito.setAttribute('text_card', 'El seguro de vida deudor ampara a nuestros clientes frente a los riesgos de muerte por cualquier causa e incapacidad total permanente durante la vigencia del crédito, generando la cancelación del valor restante de la deuda a la fecha del suceso.')
deudoresMicrocredito.setAttribute('redirect_link', '/')
cardContainer.append(deudoresMicrocredito)
deudoresMicrocredito.querySelector('.card').classList.add('insurances-morosos')

const deudoresLibranza = document.createElement('seguros-cards')

deudoresLibranza.setAttribute('card_image', '/images/seguros-deudores-libranza_4x.webp')
deudoresLibranza.setAttribute('title_card', 'Seguro deudores libranza')
deudoresLibranza.setAttribute('text_card', 'El seguro de vida deudor ampara a nuestros clientes de libranza frente a los riesgos de muerte por cualquier causa e incapacidad total permanente durante la vigencia del crédito, generando la cancelación del valor restante de la deuda a la fecha del suceso.')
deudoresLibranza.setAttribute('redirect_link', '/')
cardContainer.append(deudoresLibranza)
deudoresLibranza.querySelector('.card').classList.add('insurances-morosos')

const actualizarInformacion = document.createElement('seguros-cards')

actualizarInformacion.setAttribute('card_image', '/images/seguros-actualiza-informacion_4x.webp')
actualizarInformacion.setAttribute('title_card', 'Actualizar Información')
actualizarInformacion.setAttribute('text_card', 'Actualiza la información de tus seguros, tales como la dirección o si desea añadir algún integrante de la familia. También puede solicitiar un crédito o cambiarlo.')
actualizarInformacion.setAttribute('redirect_link', '/actualizar_informacion')
cardContainer.append(actualizarInformacion)
actualizarInformacion.querySelector('.card').classList.add('quick-actions')

const estadoTramites = document.createElement('seguros-cards')

estadoTramites.setAttribute('card_image', '/images/seguros-estado-tramite_4x.webp')
estadoTramites.setAttribute('title_card', 'Estado de trámites')
estadoTramites.setAttribute('text_card', 'Podrás revisar como va el trámite de tu seguro.  Te indicará: nombre del trámite, número del trámite, fecha de inicio, estado y fecha de fin')
estadoTramites.setAttribute('redirect_link', '/')
cardContainer.append(estadoTramites)
estadoTramites.querySelector('.card').classList.add('quick-actions')

const reportarSiniestro = document.createElement('seguros-cards')

reportarSiniestro.setAttribute('card_image', '/images/seguros-reportar-siniestro_4x.webp')
reportarSiniestro.setAttribute('title_card', 'Reportar siniestro')
reportarSiniestro.setAttribute('text_card', 'Podrásllenar un formulario donde encontraras: la gravedad del siniestro, la frecuencia del siniesro, el tipo de siniestro, su fecha, la descripción y el correo.')
reportarSiniestro.setAttribute('redirect_link', '/reportar-siniestros/')
cardContainer.append(reportarSiniestro)
reportarSiniestro.querySelector('.card').classList.add('quick-actions')


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.card');

// Seleccionar la pestaña "Características" por defecto
tabButtons[0].classList.add('active');
console.log(tabButtons[0])
tabContents[0].style.display = 'flex';

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover la clase 'active' de todas las pestañas y contenidos
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');

    // Agregar la clase 'active' a la pestaña clickeada y su contenido relacionado
    button.classList.add('active');
    const selectedTab = button.getAttribute('data-tab');
    console.log(selectedTab)
    const selectedContent = document.querySelectorAll(`.${selectedTab}`);
    selectedContent.forEach(element => {
        element.style.display = 'flex';
    });
  });
});

