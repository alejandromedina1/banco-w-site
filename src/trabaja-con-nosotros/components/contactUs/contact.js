import "./contact.scss";

class ContactUs extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(nameAtr, oldValue, newValue) {
    switch (nameAtr) {
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <h2 class="title">Gracias por visitar nuestra página</h2>
            <p class="description">
                Para nosotros es muy importante su opinión y sugerencias. Por favor diligencie el siguiente formato con sus comentarios o inquietudes de tipo técnico.  
El e-mail que usted escriba en el siguiente registro será de donde llegará la respuesta a su inquietud, por favor verifique que esté escrito correctamente, antes de enviar sus comentarios.<br><br>
Nuestra área de talento humano o nuestro departamento de Soporte Técnico responderán sus inquietudes tan pronto como sea posible.
            </p>
            <p class="alert">
                Los campos marcados con [ <span>*</span> ] son obligatorios
            </p>

            <form class="Form" action="">
                <div class="Form-info">
                    <div class="Form-left">
                        <label for="">
                            <p>Nombres y apellidos *</p>
                            <input class="Form-text" type="text" required>
                        </label>
                        <label for="">
                            <p>Tipo de documento</p>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </label>
                        <label for="">
                            <p>Número de identificación *</p>
                            <input class="Form-text" type="text" required>
                        </label>                  
                    </div>
                    <div class="Form-right">
                        <label for="">
                            <p>Tipo de documento </p>
                            <input class="Form-text" type="text">
                        </label>
                        <label for="">
                            <p>Comentario</p>
                            <textarea name="" id="" cols="50" rows="10"></textarea>
                        </label>
                    </div>
                </div>

                <div class="check-accept">
                    <div class="checkbox-wrapper-13">
                        <input type="checkbox">
                        <p>He leído y autorizo los Términos y condiciones de este portal.</p>
                    </div>
                    <div class="checkbox-wrapper-13">
                        <input type="checkbox">
                        <p>Autorizo las políticas de datos y cookies de Leadersearch SAS.</p>
                    </div>
                </div>
                <div class="submit-container">
                    <input class="submit" type="submit">
                </div>
            </form>
    `;
  }
}

customElements.define("contact-component", ContactUs);
