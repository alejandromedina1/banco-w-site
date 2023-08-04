import "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
import "./carrousel.scss";

class TurnsCarrousel extends HTMLElement {
    constructor() {
        super();
        this.icon1;
        this.icon2;
        this.icon3;
        this.name1;
        this.name2;
        this.name3;
        this.since1;
        this.since2;
        this.since3;
        this.state1;
        this.state2;
        this.state3;
    }

    static get observedAttributes() {
        return [
            "icon1",
            "icon2",
            "icon3",
            "name1",
            "name2",
            "name3",
            "since1",
            "since2",
            "since3",
            "state1",
            "state2",
            "state3"
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "icon1":
                this.icon1 = newValue
                break;

            case "icicon2on":
                this.icon2 = newValue
                break;

            case "icon3":
                this.icon3 = newValue
                break;

            case "name1":
                this.name1 = newValue
                break;

            case "name2":
                this.name2 = newValue
                break;

            case "name3":
                this.name3 = newValue
                break;

            case "since1":
                this.since1 = newValue
                break;

            case "since2":
                this.since2 = newValue
                break;

            case "since3":
                this.since3 = newValue
                break;
                
            case "state1":
                this.state1 = newValue
                break;

            case "state2":
                this.state2 = newValue
                break;

            case "state3":
                this.state3 = newValue
                break;

        }

    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <link rel="stylesheet" href="../TurnsCarrousel/carrousel.scss">
     <!-- Swiper -->
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="Card-Turn">
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21875 21.125C6.64921 21.125 6.1875 20.6633 6.1875 20.0937V3.59375C6.1875 3.02421 6.64921 2.5625 7.21875 2.5625H25.7812C26.3508 2.5625 26.8125 3.02421 26.8125 3.59375V20.0938C26.8125 20.6633 26.3508 21.125 25.7812 21.125H21.6562C21.0867 21.125 20.625 21.5867 20.625 22.1562C20.625 22.7258 21.0867 23.1875 21.6562 23.1875H25.7812C27.4899 23.1875 28.875 21.8024 28.875 20.0938V3.59375C28.875 1.88512 27.4899 0.5 25.7812 0.5H7.21875C5.51012 0.5 4.125 1.88512 4.125 3.59375V20.0937C4.125 21.8024 5.51012 23.1875 7.21875 23.1875H11.3438C11.9133 23.1875 12.375 22.7258 12.375 22.1562C12.375 21.5867 11.9133 21.125 11.3438 21.125H7.21875Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7708 9.05205C16.1735 8.64932 16.8265 8.64932 17.2292 9.05205L23.4167 15.2395C23.8194 15.6423 23.8194 16.2952 23.4167 16.698C23.014 17.1007 22.361 17.1007 21.9583 16.698L17.5312 12.2709V30.4062C17.5312 30.9758 17.0695 31.4375 16.5 31.4375C15.9305 31.4375 15.4688 30.9758 15.4688 30.4062V12.2709L11.0417 16.698C10.639 17.1007 9.98602 17.1007 9.5833 16.698C9.18057 16.2952 9.18057 15.6423 9.5833 15.2395L15.7708 9.05205Z" fill="white"/>
            </svg>
           <h6>Andrea Ramírez</h6>     
           <span>Recibió un giro</span>
        </div>

        <div class="Bank-info">
            <div>
                <p>Banco:</p>
                <span>BBVA</span>
            </div>
            <div>
                <p>Estado:</p>
                <span>Finalizado</span>
            </div>
        </div>
      </div>
      <div class="swiper-slide --color">
        <div class="Card-Turn">
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21875 21.125C6.64921 21.125 6.1875 20.6633 6.1875 20.0937V3.59375C6.1875 3.02421 6.64921 2.5625 7.21875 2.5625H25.7812C26.3508 2.5625 26.8125 3.02421 26.8125 3.59375V20.0938C26.8125 20.6633 26.3508 21.125 25.7812 21.125H21.6562C21.0867 21.125 20.625 21.5867 20.625 22.1562C20.625 22.7258 21.0867 23.1875 21.6562 23.1875H25.7812C27.4899 23.1875 28.875 21.8024 28.875 20.0938V3.59375C28.875 1.88512 27.4899 0.5 25.7812 0.5H7.21875C5.51012 0.5 4.125 1.88512 4.125 3.59375V20.0937C4.125 21.8024 5.51012 23.1875 7.21875 23.1875H11.3438C11.9133 23.1875 12.375 22.7258 12.375 22.1562C12.375 21.5867 11.9133 21.125 11.3438 21.125H7.21875Z" fill="#FF8833"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7708 9.05205C16.1735 8.64932 16.8265 8.64932 17.2292 9.05205L23.4167 15.2395C23.8194 15.6423 23.8194 16.2952 23.4167 16.698C23.014 17.1007 22.361 17.1007 21.9583 16.698L17.5312 12.2709V30.4062C17.5312 30.9758 17.0695 31.4375 16.5 31.4375C15.9305 31.4375 15.4688 30.9758 15.4688 30.4062V12.2709L11.0417 16.698C10.639 17.1007 9.98602 17.1007 9.5833 16.698C9.18057 16.2952 9.18057 15.6423 9.5833 15.2395L15.7708 9.05205Z" fill="#FF8833"/>
            </svg>
           <h6>Sebastian Gomez</h6>     
           <span>Recibió un giro</span>
        </div>

        <div class="Bank-info">
            <div>
                <p>Banco:</p>
                <span>BBVA</span>
            </div>
            <div>
                <p>Estado:</p>
                <span>Finalizado</span>
            </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="Card-Turn">
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21875 21.125C6.64921 21.125 6.1875 20.6633 6.1875 20.0937V3.59375C6.1875 3.02421 6.64921 2.5625 7.21875 2.5625H25.7812C26.3508 2.5625 26.8125 3.02421 26.8125 3.59375V20.0938C26.8125 20.6633 26.3508 21.125 25.7812 21.125H21.6562C21.0867 21.125 20.625 21.5867 20.625 22.1562C20.625 22.7258 21.0867 23.1875 21.6562 23.1875H25.7812C27.4899 23.1875 28.875 21.8024 28.875 20.0938V3.59375C28.875 1.88512 27.4899 0.5 25.7812 0.5H7.21875C5.51012 0.5 4.125 1.88512 4.125 3.59375V20.0937C4.125 21.8024 5.51012 23.1875 7.21875 23.1875H11.3438C11.9133 23.1875 12.375 22.7258 12.375 22.1562C12.375 21.5867 11.9133 21.125 11.3438 21.125H7.21875Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7708 9.05205C16.1735 8.64932 16.8265 8.64932 17.2292 9.05205L23.4167 15.2395C23.8194 15.6423 23.8194 16.2952 23.4167 16.698C23.014 17.1007 22.361 17.1007 21.9583 16.698L17.5312 12.2709V30.4062C17.5312 30.9758 17.0695 31.4375 16.5 31.4375C15.9305 31.4375 15.4688 30.9758 15.4688 30.4062V12.2709L11.0417 16.698C10.639 17.1007 9.98602 17.1007 9.5833 16.698C9.18057 16.2952 9.18057 15.6423 9.5833 15.2395L15.7708 9.05205Z" fill="white"/>
            </svg>
           <h6>Camila Restrepo</h6>     
           <span>Recibió un giro</span>
        </div>

        <div class="Bank-info">
            <div>
                <p>Banco:</p>
                <span>Davivienda</span>
            </div>
            <div>
                <p>Estado:</p>
                <span>Finalizado</span>
            </div>
        </div>
      </div>
      <div class="swiper-slide" id="toggle-swiper"></div>
    </div>
  </div>
    `;



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
    }

}

customElements.define('turns-carrousel', TurnsCarrousel)