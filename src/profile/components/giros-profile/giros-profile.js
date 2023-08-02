class GirosProfile extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        
    }


    connectedCallback() {
        this.render()
    }

    render() {

      


        this.innerHTML = `
    <link rel="stylesheet" href="./giros.scss">
    <link rel="stylesheet" href="../ButtonDuoIcon/buttonDuoIcon.scss"/>
    <link rel="stylesheet" href="../ChallengeStatus/challengeStatus.scss"/>\
    <link rel="stylesheet" href="../TurnsCarrousel/carrousel.scss">
    
    <turns-carrousel></turns-carrousel>

    <div class="Info-Container">
        <section class="Product">
            <span class="subtitle">Detalles del producto</span>
            <details-component  type_title="Tipo de giro:" type_paraph="Enviado" date_title="Fecha para reclamar" date_paraph="03/04/2023" state_title="Estado" state_paraph="Finalizado" mount_title="Monto total:" mount_paraph="600.000"></details-component>
        </section>
    
        <section class="Table">
            <span class="subtitle">Ultimos giros</span>
            <table-icon icon1='<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86816 10.8047C3.59202 10.8047 3.36816 10.5808 3.36816 10.3047V2.30469C3.36816 2.02855 3.59202 1.80469 3.86816 1.80469H12.8682C13.1443 1.80469 13.3682 2.02855 13.3682 2.30469V10.3047C13.3682 10.5808 13.1443 10.8047 12.8682 10.8047H10.8682C10.592 10.8047 10.3682 11.0285 10.3682 11.3047C10.3682 11.5808 10.592 11.8047 10.8682 11.8047H12.8682C13.6966 11.8047 14.3682 11.1331 14.3682 10.3047V2.30469C14.3682 1.47626 13.6966 0.804688 12.8682 0.804688H3.86816C3.03974 0.804688 2.36816 1.47626 2.36816 2.30469V10.3047C2.36816 11.1331 3.03974 11.8047 3.86816 11.8047H5.86816C6.14431 11.8047 6.36816 11.5808 6.36816 11.3047C6.36816 11.0285 6.14431 10.8047 5.86816 10.8047H3.86816Z" fill="#00B1BB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.01485 4.94918C8.21012 4.75392 8.5267 4.75392 8.72196 4.94918L11.722 7.94918C11.9172 8.14444 11.9172 8.46103 11.722 8.65629C11.5267 8.85155 11.2101 8.85155 11.0149 8.65629L8.86841 6.50984V15.3027C8.86841 15.5789 8.64455 15.8027 8.36841 15.8027C8.09227 15.8027 7.86841 15.5789 7.86841 15.3027V6.50984L5.72196 8.65629C5.5267 8.85155 5.21012 8.85155 5.01485 8.65629C4.81959 8.46103 4.81959 8.14444 5.01485 7.94918L8.01485 4.94918Z" fill="#00B1BB"/>
                </svg>'
                icon2='<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2439 6.65625C13.52 6.65625 13.7439 6.88011 13.7439 7.15625L13.7439 15.1562C13.7439 15.4324 13.52 15.6562 13.2439 15.6562L4.24389 15.6562C3.96775 15.6562 3.74389 15.4324 3.74389 15.1562L3.7439 7.15625C3.7439 6.88011 3.96775 6.65625 4.2439 6.65625L6.2439 6.65625C6.52004 6.65625 6.7439 6.43239 6.7439 6.15625C6.7439 5.88011 6.52004 5.65625 6.2439 5.65625L4.2439 5.65625C3.41547 5.65625 2.74389 6.32782 2.74389 7.15625L2.74389 15.1562C2.74389 15.9847 3.41547 16.6562 4.24389 16.6562L13.2439 16.6562C14.0723 16.6562 14.7439 15.9847 14.7439 15.1562L14.7439 7.15625C14.7439 6.32782 14.0723 5.65625 13.2439 5.65625L11.2439 5.65625C10.9678 5.65625 10.7439 5.88011 10.7439 6.15625C10.7439 6.43239 10.9678 6.65625 11.2439 6.65625L13.2439 6.65625Z" fill="#00B1BB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09721 12.5118C8.90194 12.707 8.58536 12.707 8.3901 12.5118L5.3901 9.51176C5.19484 9.31649 5.19484 8.99991 5.3901 8.80465C5.58536 8.60939 5.90194 8.60939 6.09721 8.80465L8.24365 10.9511L8.24365 2.1582C8.24365 1.88206 8.46751 1.6582 8.74365 1.6582C9.0198 1.6582 9.24365 1.88206 9.24365 2.1582L9.24365 10.9511L11.3901 8.80465C11.5854 8.60939 11.9019 8.60939 12.0972 8.80465C12.2925 8.99991 12.2925 9.31649 12.0972 9.51176L9.09721 12.5118Z" fill="#00B1BB"/>
                </svg>'
                icon3='<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86816 10.8047C3.59202 10.8047 3.36816 10.5808 3.36816 10.3047V2.30469C3.36816 2.02855 3.59202 1.80469 3.86816 1.80469H12.8682C13.1443 1.80469 13.3682 2.02855 13.3682 2.30469V10.3047C13.3682 10.5808 13.1443 10.8047 12.8682 10.8047H10.8682C10.592 10.8047 10.3682 11.0285 10.3682 11.3047C10.3682 11.5808 10.592 11.8047 10.8682 11.8047H12.8682C13.6966 11.8047 14.3682 11.1331 14.3682 10.3047V2.30469C14.3682 1.47626 13.6966 0.804688 12.8682 0.804688H3.86816C3.03974 0.804688 2.36816 1.47626 2.36816 2.30469V10.3047C2.36816 11.1331 3.03974 11.8047 3.86816 11.8047H5.86816C6.14431 11.8047 6.36816 11.5808 6.36816 11.3047C6.36816 11.0285 6.14431 10.8047 5.86816 10.8047H3.86816Z" fill="#00B1BB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.01485 4.94918C8.21012 4.75392 8.5267 4.75392 8.72196 4.94918L11.722 7.94918C11.9172 8.14444 11.9172 8.46103 11.722 8.65629C11.5267 8.85155 11.2101 8.85155 11.0149 8.65629L8.86841 6.50984V15.3027C8.86841 15.5789 8.64455 15.8027 8.36841 15.8027C8.09227 15.8027 7.86841 15.5789 7.86841 15.3027V6.50984L5.72196 8.65629C5.5267 8.85155 5.21012 8.85155 5.01485 8.65629C4.81959 8.46103 4.81959 8.14444 5.01485 7.94918L8.01485 4.94918Z" fill="#00B1BB"/>
                </svg>'
                icon4='<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2439 6.65625C13.52 6.65625 13.7439 6.88011 13.7439 7.15625L13.7439 15.1562C13.7439 15.4324 13.52 15.6562 13.2439 15.6562L4.24389 15.6562C3.96775 15.6562 3.74389 15.4324 3.74389 15.1562L3.7439 7.15625C3.7439 6.88011 3.96775 6.65625 4.2439 6.65625L6.2439 6.65625C6.52004 6.65625 6.7439 6.43239 6.7439 6.15625C6.7439 5.88011 6.52004 5.65625 6.2439 5.65625L4.2439 5.65625C3.41547 5.65625 2.74389 6.32782 2.74389 7.15625L2.74389 15.1562C2.74389 15.9847 3.41547 16.6562 4.24389 16.6562L13.2439 16.6562C14.0723 16.6562 14.7439 15.9847 14.7439 15.1562L14.7439 7.15625C14.7439 6.32782 14.0723 5.65625 13.2439 5.65625L11.2439 5.65625C10.9678 5.65625 10.7439 5.88011 10.7439 6.15625C10.7439 6.43239 10.9678 6.65625 11.2439 6.65625L13.2439 6.65625Z" fill="#00B1BB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09721 12.5118C8.90194 12.707 8.58536 12.707 8.3901 12.5118L5.3901 9.51176C5.19484 9.31649 5.19484 8.99991 5.3901 8.80465C5.58536 8.60939 5.90194 8.60939 6.09721 8.80465L8.24365 10.9511L8.24365 2.1582C8.24365 1.88206 8.46751 1.6582 8.74365 1.6582C9.0198 1.6582 9.24365 1.88206 9.24365 2.1582L9.24365 10.9511L11.3901 8.80465C11.5854 8.60939 11.9019 8.60939 12.0972 8.80465C12.2925 8.99991 12.2925 9.31649 12.0972 9.51176L9.09721 12.5118Z" fill="#00B1BB"/>
                </svg>' 
                state1="Enviado" state2="Recibido" state3="Enviado" state4="Recibido"
                date1="03/04/23" date2="04/02/23" date3="01/01/23" date4="04/12/22"
                mount1="248.000" mount2="52.000" mount3="67.000" mount4="386.000"
            >               
            </table-icon>
        </section>
    </div>

    <script>
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    </script>
  
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script type="module" src="../components.js"></script>

    `
    }

}

customElements.define('giros-profile', GirosProfile)