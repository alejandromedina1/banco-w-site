const template = document.createElement('template');

template.innerHTML = `
<style>
    .creditos-form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }

    .label-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);  
        gap: 5rem;
        width: 100%;
    }

    .label-section fieldset{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        border: none
    }

    .label-section fieldset label{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 95%;
        color: #676767;
        font-family: Bariol, sans-serif;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .label-section fieldset label input, .label-section fieldset label select{
        padding: 0.5rem;
        color: #ACACAC;
        border-radius: 0.28169rem;
        border: 1.932px solid #CDCDCD;
        font-family: Bariol, sans-serif;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: 150%;
    }

    .checkbox-datos{
        margin-top: 3rem;
        width: 40%;
        color: #676767;
        font-family: Bariol, sans-serif;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .submit-datos{
        width: 40%;
        border-radius: 0.4375rem;
        padding: 0.5rem 1.5rem;
        text-align: center;
        font-family: Bariol, sans-serif;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background-color: #F83;
        border: none;
        color: white;
        transition: all ease 0.3s;
    }

    .submit-datos:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
</style>
<form class="creditos-form">
<section class="label-section">
    <fieldset>
        <label for="antiguedad">
            Antigüedad <input type="text" name="antiguedad" id="antiguedad"
                placeholder="Cuánta antigüedad tienes">
        </label>
        <label for="tipo-id">
            Identificación <select name="tipo-id" id="tipo-id">
                <option value="" disabled selected>Tipo de indetificación</option>
                <option value="">Cédula de ciudadanía</option>
            </select>
        </label>
        <label for="celular">
            Celular <input type="tel" name="celular" id="celular" placeholder="Escribe tu celular">
        </label>
        <label for="ciudad">
            Ciudad <input type="text" name="ciudad" id="ciudad" placeholder="Escribe tu ciudad">
        </label>
    </fieldset>
    <fieldset>
        <label for="nombre">
            Nombres y apellidos <input type="text" name="nombre" id="nombre"
                placeholder="Escribe tus nombres y apellidos">
        </label>
        <label for="identificacion">
            Número de Identificación <input type="text" name="identificacion" id="identificacion"
                placeholder="Escribe tu número de Identificación">
        </label>
        <label for="departamento">
            Departamento <select name="departamento" id="departamento">
                <option value="" disabled selected>Selecciona tu departamento</option>
                <option value="">Valle del cauca</option>
            </select>
        </label>
        <label for="barrio">
            Barrio <input type="text" name="barrio" id="barrio" placeholder="Escribe tu barrio">
        </label>
    </fieldset>
</section>
<label for="tratamiento-datos" class="checkbox-datos">
    <input type="checkbox" name="tratamiento-datos" id="tratamiento-datos"> Declaras que aceptas de
    manera previa, expresa e informada la autorización de Tratamiento de Datos. Clic aquí para conocer
    la autorización de tratamiento de datos.
</label>
<button type="submit" class="submit-datos">Enviar</button>
</form>
`

export class CreditosForm extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)
    }
}

customElements.define('creditos-form', CreditosForm)