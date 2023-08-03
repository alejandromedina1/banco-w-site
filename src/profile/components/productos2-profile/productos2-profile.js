import "./productos2.scss";

class Producto2Profile extends HTMLElement {
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

      <link rel="stylesheet" href="./productos2.scss">
      <link rel="stylesheet" href="../Details/details.js">

        <section class="main">
    <div class="main__title">
      <h1>¡Hola, Jessica!</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M16.8349 12.2303L10.7032 6.10951C10.6025 6.00797 10.4827 5.92738 10.3507 5.87238C10.2187 5.81738 10.0771 5.78906 9.93405 5.78906C9.79103 5.78906 9.64943 5.81738 9.51742 5.87238C9.38541 5.92738 9.26559 6.00797 9.16488 6.10951C8.96311 6.31249 8.84985 6.58706 8.84985 6.87326C8.84985 7.15946 8.96311 7.43404 9.16488 7.63701L14.5274 13.0537L9.16488 18.4162C8.96311 18.6192 8.84985 18.8937 8.84985 19.1799C8.84985 19.4661 8.96311 19.7407 9.16488 19.9437C9.26521 20.046 9.38486 20.1275 9.51689 20.1833C9.64892 20.2391 9.79071 20.2681 9.93405 20.2687C10.0774 20.2681 10.2192 20.2391 10.3512 20.1833C10.4832 20.1275 10.6029 20.046 10.7032 19.9437L16.8349 13.8228C16.9448 13.7214 17.0326 13.5983 17.0926 13.4612C17.1527 13.3242 17.1836 13.1762 17.1836 13.0266C17.1836 12.877 17.1527 12.729 17.0926 12.592C17.0326 12.4549 16.9448 12.3318 16.8349 12.2303V12.2303Z"
          fill="#ACACAC" />
      </svg>
    </div>

    <section class="main__allSections">
      <div class="main__desktop-left">
        <section class="main__detail">
          <h3 class="main__subtitle">Saldo del producto:</h3>
          <details-component type_title="Tipo de cuenta" type_paraph="Ahorros / depósito" date_title="Número"
            date_paraph="834-2867-345" state_title="" state_paraph="" mount_title="Saldo disponible"
            mount_paraph="325.000"></details-component>


        </section>

        <section class="main__movements">
          <h3 class="main__subtitle">Movimientos:</h3>
          <table-icon icon1='<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M5.66579 3.2499L5.95829 2.93032V4.8749C5.95829 5.01856 6.01536 5.15634 6.11694 5.25792C6.21853 5.3595 6.3563 5.41657 6.49996 5.41657C6.64362 5.41657 6.78139 5.3595 6.88298 5.25792C6.98456 5.15634 7.04163 5.01856 7.04163 4.8749V2.93032L7.33413 3.22824C7.38329 3.28377 7.44334 3.32861 7.51055 3.35999C7.57776 3.39136 7.6507 3.4086 7.72484 3.41063C7.79899 3.41266 7.87276 3.39944 7.94158 3.3718C8.01041 3.34415 8.07282 3.30266 8.12496 3.2499C8.17573 3.19955 8.21603 3.13964 8.24353 3.07363C8.27103 3.00762 8.28518 2.93683 8.28518 2.86532C8.28518 2.79381 8.27103 2.72301 8.24353 2.65701C8.21603 2.591 8.17573 2.53109 8.12496 2.48074L6.88454 1.24032C6.83303 1.19101 6.77228 1.15235 6.70579 1.12657C6.57392 1.07239 6.426 1.07239 6.29413 1.12657C6.22764 1.15235 6.16689 1.19101 6.11538 1.24032L4.87496 2.45907C4.77009 2.56394 4.71117 2.70618 4.71117 2.85449C4.71117 3.0028 4.77009 3.14503 4.87496 3.2499C4.97983 3.35477 5.12207 3.41369 5.27038 3.41369C5.41869 3.41369 5.56092 3.35477 5.66579 3.2499ZM6.49996 6.4999C6.17857 6.4999 5.86439 6.59521 5.59716 6.77376C5.32993 6.95232 5.12165 7.20611 4.99866 7.50304C4.87566 7.79997 4.84348 8.12671 4.90618 8.44192C4.96888 8.75714 5.12365 9.04669 5.35091 9.27395C5.57817 9.50121 5.86772 9.65598 6.18294 9.71868C6.49816 9.78138 6.82489 9.7492 7.12182 9.62621C7.41875 9.50321 7.67254 9.29493 7.8511 9.0277C8.02965 8.76047 8.12496 8.4463 8.12496 8.1249C8.12496 7.69393 7.95375 7.2806 7.64901 6.97585C7.34426 6.67111 6.93094 6.4999 6.49996 6.4999ZM6.49996 8.66657C6.39283 8.66657 6.2881 8.6348 6.19903 8.57528C6.10995 8.51576 6.04052 8.43117 5.99952 8.33219C5.95853 8.23321 5.9478 8.1243 5.9687 8.01923C5.9896 7.91416 6.04119 7.81764 6.11694 7.74189C6.1927 7.66613 6.28921 7.61454 6.39429 7.59364C6.49936 7.57274 6.60827 7.58347 6.70725 7.62447C6.80622 7.66547 6.89082 7.73489 6.95034 7.82397C7.00986 7.91304 7.04163 8.01777 7.04163 8.1249C7.04163 8.26856 6.98456 8.40634 6.88298 8.50792C6.78139 8.6095 6.64362 8.66657 6.49996 8.66657ZM2.70829 8.1249C2.70829 8.23203 2.74006 8.33676 2.79958 8.42584C2.8591 8.51491 2.9437 8.58434 3.04267 8.62534C3.14165 8.66633 3.25056 8.67706 3.35563 8.65616C3.46071 8.63526 3.55722 8.58367 3.63298 8.50792C3.70873 8.43217 3.76032 8.33565 3.78122 8.23058C3.80212 8.1255 3.79139 8.01659 3.75039 7.91762C3.7094 7.81864 3.63997 7.73404 3.55089 7.67452C3.46182 7.615 3.35709 7.58324 3.24996 7.58324C3.1063 7.58324 2.96853 7.6403 2.86694 7.74189C2.76536 7.84347 2.70829 7.98124 2.70829 8.1249ZM10.2916 8.1249C10.2916 8.01777 10.2599 7.91304 10.2003 7.82397C10.1408 7.73489 10.0562 7.66547 9.95725 7.62447C9.85827 7.58347 9.74936 7.57274 9.64429 7.59364C9.53921 7.61454 9.4427 7.66613 9.36694 7.74189C9.29119 7.81764 9.2396 7.91416 9.2187 8.01923C9.1978 8.1243 9.20853 8.23321 9.24953 8.33219C9.29052 8.43117 9.35995 8.51576 9.44903 8.57528C9.5381 8.6348 9.64283 8.66657 9.74996 8.66657C9.89362 8.66657 10.0314 8.6095 10.133 8.50792C10.2346 8.40634 10.2916 8.26856 10.2916 8.1249ZM10.8333 4.33324H8.66663C8.52297 4.33324 8.38519 4.3903 8.28361 4.49189C8.18203 4.59347 8.12496 4.73124 8.12496 4.8749C8.12496 5.01856 8.18203 5.15634 8.28361 5.25792C8.38519 5.3595 8.52297 5.41657 8.66663 5.41657H10.8333C10.977 5.41657 11.1147 5.47364 11.2163 5.57522C11.3179 5.6768 11.375 5.81458 11.375 5.95824V10.2916C11.375 10.4352 11.3179 10.573 11.2163 10.6746C11.1147 10.7762 10.977 10.8332 10.8333 10.8332H2.16663C2.02297 10.8332 1.88519 10.7762 1.78361 10.6746C1.68203 10.573 1.62496 10.4352 1.62496 10.2916V5.95824C1.62496 5.81458 1.68203 5.6768 1.78361 5.57522C1.88519 5.47364 2.02297 5.41657 2.16663 5.41657H4.33329C4.47695 5.41657 4.61473 5.3595 4.71631 5.25792C4.81789 5.15634 4.87496 5.01856 4.87496 4.8749C4.87496 4.73124 4.81789 4.59347 4.71631 4.49189C4.61473 4.3903 4.47695 4.33324 4.33329 4.33324H2.16663C1.73565 4.33324 1.32232 4.50444 1.01758 4.80919C0.712831 5.11393 0.541626 5.52726 0.541626 5.95824V10.2916C0.541626 10.7225 0.712831 11.1359 1.01758 11.4406C1.32232 11.7454 1.73565 11.9166 2.16663 11.9166H10.8333C11.2643 11.9166 11.6776 11.7454 11.9823 11.4406C12.2871 11.1359 12.4583 10.7225 12.4583 10.2916V5.95824C12.4583 5.52726 12.2871 5.11393 11.9823 4.80919C11.6776 4.50444 11.2643 4.33324 10.8333 4.33324Z" fill="#00B1BB"/>
</svg>' icon2='<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M5.66579 3.2499L5.95829 2.93032V4.8749C5.95829 5.01856 6.01536 5.15634 6.11694 5.25792C6.21853 5.3595 6.3563 5.41657 6.49996 5.41657C6.64362 5.41657 6.78139 5.3595 6.88298 5.25792C6.98456 5.15634 7.04163 5.01856 7.04163 4.8749V2.93032L7.33413 3.22824C7.38329 3.28377 7.44334 3.32861 7.51055 3.35999C7.57776 3.39136 7.6507 3.4086 7.72484 3.41063C7.79899 3.41266 7.87276 3.39944 7.94158 3.3718C8.01041 3.34415 8.07282 3.30266 8.12496 3.2499C8.17573 3.19955 8.21603 3.13964 8.24353 3.07363C8.27103 3.00762 8.28518 2.93683 8.28518 2.86532C8.28518 2.79381 8.27103 2.72301 8.24353 2.65701C8.21603 2.591 8.17573 2.53109 8.12496 2.48074L6.88454 1.24032C6.83303 1.19101 6.77228 1.15235 6.70579 1.12657C6.57392 1.07239 6.426 1.07239 6.29413 1.12657C6.22764 1.15235 6.16689 1.19101 6.11538 1.24032L4.87496 2.45907C4.77009 2.56394 4.71117 2.70618 4.71117 2.85449C4.71117 3.0028 4.77009 3.14503 4.87496 3.2499C4.97983 3.35477 5.12207 3.41369 5.27038 3.41369C5.41869 3.41369 5.56092 3.35477 5.66579 3.2499ZM6.49996 6.4999C6.17857 6.4999 5.86439 6.59521 5.59716 6.77376C5.32993 6.95232 5.12165 7.20611 4.99866 7.50304C4.87566 7.79997 4.84348 8.12671 4.90618 8.44192C4.96888 8.75714 5.12365 9.04669 5.35091 9.27395C5.57817 9.50121 5.86772 9.65598 6.18294 9.71868C6.49816 9.78138 6.82489 9.7492 7.12182 9.62621C7.41875 9.50321 7.67254 9.29493 7.8511 9.0277C8.02965 8.76047 8.12496 8.4463 8.12496 8.1249C8.12496 7.69393 7.95375 7.2806 7.64901 6.97585C7.34426 6.67111 6.93094 6.4999 6.49996 6.4999ZM6.49996 8.66657C6.39283 8.66657 6.2881 8.6348 6.19903 8.57528C6.10995 8.51576 6.04052 8.43117 5.99952 8.33219C5.95853 8.23321 5.9478 8.1243 5.9687 8.01923C5.9896 7.91416 6.04119 7.81764 6.11694 7.74189C6.1927 7.66613 6.28921 7.61454 6.39429 7.59364C6.49936 7.57274 6.60827 7.58347 6.70725 7.62447C6.80622 7.66547 6.89082 7.73489 6.95034 7.82397C7.00986 7.91304 7.04163 8.01777 7.04163 8.1249C7.04163 8.26856 6.98456 8.40634 6.88298 8.50792C6.78139 8.6095 6.64362 8.66657 6.49996 8.66657ZM2.70829 8.1249C2.70829 8.23203 2.74006 8.33676 2.79958 8.42584C2.8591 8.51491 2.9437 8.58434 3.04267 8.62534C3.14165 8.66633 3.25056 8.67706 3.35563 8.65616C3.46071 8.63526 3.55722 8.58367 3.63298 8.50792C3.70873 8.43217 3.76032 8.33565 3.78122 8.23058C3.80212 8.1255 3.79139 8.01659 3.75039 7.91762C3.7094 7.81864 3.63997 7.73404 3.55089 7.67452C3.46182 7.615 3.35709 7.58324 3.24996 7.58324C3.1063 7.58324 2.96853 7.6403 2.86694 7.74189C2.76536 7.84347 2.70829 7.98124 2.70829 8.1249ZM10.2916 8.1249C10.2916 8.01777 10.2599 7.91304 10.2003 7.82397C10.1408 7.73489 10.0562 7.66547 9.95725 7.62447C9.85827 7.58347 9.74936 7.57274 9.64429 7.59364C9.53921 7.61454 9.4427 7.66613 9.36694 7.74189C9.29119 7.81764 9.2396 7.91416 9.2187 8.01923C9.1978 8.1243 9.20853 8.23321 9.24953 8.33219C9.29052 8.43117 9.35995 8.51576 9.44903 8.57528C9.5381 8.6348 9.64283 8.66657 9.74996 8.66657C9.89362 8.66657 10.0314 8.6095 10.133 8.50792C10.2346 8.40634 10.2916 8.26856 10.2916 8.1249ZM10.8333 4.33324H8.66663C8.52297 4.33324 8.38519 4.3903 8.28361 4.49189C8.18203 4.59347 8.12496 4.73124 8.12496 4.8749C8.12496 5.01856 8.18203 5.15634 8.28361 5.25792C8.38519 5.3595 8.52297 5.41657 8.66663 5.41657H10.8333C10.977 5.41657 11.1147 5.47364 11.2163 5.57522C11.3179 5.6768 11.375 5.81458 11.375 5.95824V10.2916C11.375 10.4352 11.3179 10.573 11.2163 10.6746C11.1147 10.7762 10.977 10.8332 10.8333 10.8332H2.16663C2.02297 10.8332 1.88519 10.7762 1.78361 10.6746C1.68203 10.573 1.62496 10.4352 1.62496 10.2916V5.95824C1.62496 5.81458 1.68203 5.6768 1.78361 5.57522C1.88519 5.47364 2.02297 5.41657 2.16663 5.41657H4.33329C4.47695 5.41657 4.61473 5.3595 4.71631 5.25792C4.81789 5.15634 4.87496 5.01856 4.87496 4.8749C4.87496 4.73124 4.81789 4.59347 4.71631 4.49189C4.61473 4.3903 4.47695 4.33324 4.33329 4.33324H2.16663C1.73565 4.33324 1.32232 4.50444 1.01758 4.80919C0.712831 5.11393 0.541626 5.52726 0.541626 5.95824V10.2916C0.541626 10.7225 0.712831 11.1359 1.01758 11.4406C1.32232 11.7454 1.73565 11.9166 2.16663 11.9166H10.8333C11.2643 11.9166 11.6776 11.7454 11.9823 11.4406C12.2871 11.1359 12.4583 10.7225 12.4583 10.2916V5.95824C12.4583 5.52726 12.2871 5.11393 11.9823 4.80919C11.6776 4.50444 11.2643 4.33324 10.8333 4.33324Z" fill="#00B1BB"/>
</svg>' icon3='<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M5.66579 3.2499L5.95829 2.93032V4.8749C5.95829 5.01856 6.01536 5.15634 6.11694 5.25792C6.21853 5.3595 6.3563 5.41657 6.49996 5.41657C6.64362 5.41657 6.78139 5.3595 6.88298 5.25792C6.98456 5.15634 7.04163 5.01856 7.04163 4.8749V2.93032L7.33413 3.22824C7.38329 3.28377 7.44334 3.32861 7.51055 3.35999C7.57776 3.39136 7.6507 3.4086 7.72484 3.41063C7.79899 3.41266 7.87276 3.39944 7.94158 3.3718C8.01041 3.34415 8.07282 3.30266 8.12496 3.2499C8.17573 3.19955 8.21603 3.13964 8.24353 3.07363C8.27103 3.00762 8.28518 2.93683 8.28518 2.86532C8.28518 2.79381 8.27103 2.72301 8.24353 2.65701C8.21603 2.591 8.17573 2.53109 8.12496 2.48074L6.88454 1.24032C6.83303 1.19101 6.77228 1.15235 6.70579 1.12657C6.57392 1.07239 6.426 1.07239 6.29413 1.12657C6.22764 1.15235 6.16689 1.19101 6.11538 1.24032L4.87496 2.45907C4.77009 2.56394 4.71117 2.70618 4.71117 2.85449C4.71117 3.0028 4.77009 3.14503 4.87496 3.2499C4.97983 3.35477 5.12207 3.41369 5.27038 3.41369C5.41869 3.41369 5.56092 3.35477 5.66579 3.2499ZM6.49996 6.4999C6.17857 6.4999 5.86439 6.59521 5.59716 6.77376C5.32993 6.95232 5.12165 7.20611 4.99866 7.50304C4.87566 7.79997 4.84348 8.12671 4.90618 8.44192C4.96888 8.75714 5.12365 9.04669 5.35091 9.27395C5.57817 9.50121 5.86772 9.65598 6.18294 9.71868C6.49816 9.78138 6.82489 9.7492 7.12182 9.62621C7.41875 9.50321 7.67254 9.29493 7.8511 9.0277C8.02965 8.76047 8.12496 8.4463 8.12496 8.1249C8.12496 7.69393 7.95375 7.2806 7.64901 6.97585C7.34426 6.67111 6.93094 6.4999 6.49996 6.4999ZM6.49996 8.66657C6.39283 8.66657 6.2881 8.6348 6.19903 8.57528C6.10995 8.51576 6.04052 8.43117 5.99952 8.33219C5.95853 8.23321 5.9478 8.1243 5.9687 8.01923C5.9896 7.91416 6.04119 7.81764 6.11694 7.74189C6.1927 7.66613 6.28921 7.61454 6.39429 7.59364C6.49936 7.57274 6.60827 7.58347 6.70725 7.62447C6.80622 7.66547 6.89082 7.73489 6.95034 7.82397C7.00986 7.91304 7.04163 8.01777 7.04163 8.1249C7.04163 8.26856 6.98456 8.40634 6.88298 8.50792C6.78139 8.6095 6.64362 8.66657 6.49996 8.66657ZM2.70829 8.1249C2.70829 8.23203 2.74006 8.33676 2.79958 8.42584C2.8591 8.51491 2.9437 8.58434 3.04267 8.62534C3.14165 8.66633 3.25056 8.67706 3.35563 8.65616C3.46071 8.63526 3.55722 8.58367 3.63298 8.50792C3.70873 8.43217 3.76032 8.33565 3.78122 8.23058C3.80212 8.1255 3.79139 8.01659 3.75039 7.91762C3.7094 7.81864 3.63997 7.73404 3.55089 7.67452C3.46182 7.615 3.35709 7.58324 3.24996 7.58324C3.1063 7.58324 2.96853 7.6403 2.86694 7.74189C2.76536 7.84347 2.70829 7.98124 2.70829 8.1249ZM10.2916 8.1249C10.2916 8.01777 10.2599 7.91304 10.2003 7.82397C10.1408 7.73489 10.0562 7.66547 9.95725 7.62447C9.85827 7.58347 9.74936 7.57274 9.64429 7.59364C9.53921 7.61454 9.4427 7.66613 9.36694 7.74189C9.29119 7.81764 9.2396 7.91416 9.2187 8.01923C9.1978 8.1243 9.20853 8.23321 9.24953 8.33219C9.29052 8.43117 9.35995 8.51576 9.44903 8.57528C9.5381 8.6348 9.64283 8.66657 9.74996 8.66657C9.89362 8.66657 10.0314 8.6095 10.133 8.50792C10.2346 8.40634 10.2916 8.26856 10.2916 8.1249ZM10.8333 4.33324H8.66663C8.52297 4.33324 8.38519 4.3903 8.28361 4.49189C8.18203 4.59347 8.12496 4.73124 8.12496 4.8749C8.12496 5.01856 8.18203 5.15634 8.28361 5.25792C8.38519 5.3595 8.52297 5.41657 8.66663 5.41657H10.8333C10.977 5.41657 11.1147 5.47364 11.2163 5.57522C11.3179 5.6768 11.375 5.81458 11.375 5.95824V10.2916C11.375 10.4352 11.3179 10.573 11.2163 10.6746C11.1147 10.7762 10.977 10.8332 10.8333 10.8332H2.16663C2.02297 10.8332 1.88519 10.7762 1.78361 10.6746C1.68203 10.573 1.62496 10.4352 1.62496 10.2916V5.95824C1.62496 5.81458 1.68203 5.6768 1.78361 5.57522C1.88519 5.47364 2.02297 5.41657 2.16663 5.41657H4.33329C4.47695 5.41657 4.61473 5.3595 4.71631 5.25792C4.81789 5.15634 4.87496 5.01856 4.87496 4.8749C4.87496 4.73124 4.81789 4.59347 4.71631 4.49189C4.61473 4.3903 4.47695 4.33324 4.33329 4.33324H2.16663C1.73565 4.33324 1.32232 4.50444 1.01758 4.80919C0.712831 5.11393 0.541626 5.52726 0.541626 5.95824V10.2916C0.541626 10.7225 0.712831 11.1359 1.01758 11.4406C1.32232 11.7454 1.73565 11.9166 2.16663 11.9166H10.8333C11.2643 11.9166 11.6776 11.7454 11.9823 11.4406C12.2871 11.1359 12.4583 10.7225 12.4583 10.2916V5.95824C12.4583 5.52726 12.2871 5.11393 11.9823 4.80919C11.6776 4.50444 11.2643 4.33324 10.8333 4.33324Z" fill="#00B1BB"/>
</svg>' icon4='<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M5.66579 3.2499L5.95829 2.93032V4.8749C5.95829 5.01856 6.01536 5.15634 6.11694 5.25792C6.21853 5.3595 6.3563 5.41657 6.49996 5.41657C6.64362 5.41657 6.78139 5.3595 6.88298 5.25792C6.98456 5.15634 7.04163 5.01856 7.04163 4.8749V2.93032L7.33413 3.22824C7.38329 3.28377 7.44334 3.32861 7.51055 3.35999C7.57776 3.39136 7.6507 3.4086 7.72484 3.41063C7.79899 3.41266 7.87276 3.39944 7.94158 3.3718C8.01041 3.34415 8.07282 3.30266 8.12496 3.2499C8.17573 3.19955 8.21603 3.13964 8.24353 3.07363C8.27103 3.00762 8.28518 2.93683 8.28518 2.86532C8.28518 2.79381 8.27103 2.72301 8.24353 2.65701C8.21603 2.591 8.17573 2.53109 8.12496 2.48074L6.88454 1.24032C6.83303 1.19101 6.77228 1.15235 6.70579 1.12657C6.57392 1.07239 6.426 1.07239 6.29413 1.12657C6.22764 1.15235 6.16689 1.19101 6.11538 1.24032L4.87496 2.45907C4.77009 2.56394 4.71117 2.70618 4.71117 2.85449C4.71117 3.0028 4.77009 3.14503 4.87496 3.2499C4.97983 3.35477 5.12207 3.41369 5.27038 3.41369C5.41869 3.41369 5.56092 3.35477 5.66579 3.2499ZM6.49996 6.4999C6.17857 6.4999 5.86439 6.59521 5.59716 6.77376C5.32993 6.95232 5.12165 7.20611 4.99866 7.50304C4.87566 7.79997 4.84348 8.12671 4.90618 8.44192C4.96888 8.75714 5.12365 9.04669 5.35091 9.27395C5.57817 9.50121 5.86772 9.65598 6.18294 9.71868C6.49816 9.78138 6.82489 9.7492 7.12182 9.62621C7.41875 9.50321 7.67254 9.29493 7.8511 9.0277C8.02965 8.76047 8.12496 8.4463 8.12496 8.1249C8.12496 7.69393 7.95375 7.2806 7.64901 6.97585C7.34426 6.67111 6.93094 6.4999 6.49996 6.4999ZM6.49996 8.66657C6.39283 8.66657 6.2881 8.6348 6.19903 8.57528C6.10995 8.51576 6.04052 8.43117 5.99952 8.33219C5.95853 8.23321 5.9478 8.1243 5.9687 8.01923C5.9896 7.91416 6.04119 7.81764 6.11694 7.74189C6.1927 7.66613 6.28921 7.61454 6.39429 7.59364C6.49936 7.57274 6.60827 7.58347 6.70725 7.62447C6.80622 7.66547 6.89082 7.73489 6.95034 7.82397C7.00986 7.91304 7.04163 8.01777 7.04163 8.1249C7.04163 8.26856 6.98456 8.40634 6.88298 8.50792C6.78139 8.6095 6.64362 8.66657 6.49996 8.66657ZM2.70829 8.1249C2.70829 8.23203 2.74006 8.33676 2.79958 8.42584C2.8591 8.51491 2.9437 8.58434 3.04267 8.62534C3.14165 8.66633 3.25056 8.67706 3.35563 8.65616C3.46071 8.63526 3.55722 8.58367 3.63298 8.50792C3.70873 8.43217 3.76032 8.33565 3.78122 8.23058C3.80212 8.1255 3.79139 8.01659 3.75039 7.91762C3.7094 7.81864 3.63997 7.73404 3.55089 7.67452C3.46182 7.615 3.35709 7.58324 3.24996 7.58324C3.1063 7.58324 2.96853 7.6403 2.86694 7.74189C2.76536 7.84347 2.70829 7.98124 2.70829 8.1249ZM10.2916 8.1249C10.2916 8.01777 10.2599 7.91304 10.2003 7.82397C10.1408 7.73489 10.0562 7.66547 9.95725 7.62447C9.85827 7.58347 9.74936 7.57274 9.64429 7.59364C9.53921 7.61454 9.4427 7.66613 9.36694 7.74189C9.29119 7.81764 9.2396 7.91416 9.2187 8.01923C9.1978 8.1243 9.20853 8.23321 9.24953 8.33219C9.29052 8.43117 9.35995 8.51576 9.44903 8.57528C9.5381 8.6348 9.64283 8.66657 9.74996 8.66657C9.89362 8.66657 10.0314 8.6095 10.133 8.50792C10.2346 8.40634 10.2916 8.26856 10.2916 8.1249ZM10.8333 4.33324H8.66663C8.52297 4.33324 8.38519 4.3903 8.28361 4.49189C8.18203 4.59347 8.12496 4.73124 8.12496 4.8749C8.12496 5.01856 8.18203 5.15634 8.28361 5.25792C8.38519 5.3595 8.52297 5.41657 8.66663 5.41657H10.8333C10.977 5.41657 11.1147 5.47364 11.2163 5.57522C11.3179 5.6768 11.375 5.81458 11.375 5.95824V10.2916C11.375 10.4352 11.3179 10.573 11.2163 10.6746C11.1147 10.7762 10.977 10.8332 10.8333 10.8332H2.16663C2.02297 10.8332 1.88519 10.7762 1.78361 10.6746C1.68203 10.573 1.62496 10.4352 1.62496 10.2916V5.95824C1.62496 5.81458 1.68203 5.6768 1.78361 5.57522C1.88519 5.47364 2.02297 5.41657 2.16663 5.41657H4.33329C4.47695 5.41657 4.61473 5.3595 4.71631 5.25792C4.81789 5.15634 4.87496 5.01856 4.87496 4.8749C4.87496 4.73124 4.81789 4.59347 4.71631 4.49189C4.61473 4.3903 4.47695 4.33324 4.33329 4.33324H2.16663C1.73565 4.33324 1.32232 4.50444 1.01758 4.80919C0.712831 5.11393 0.541626 5.52726 0.541626 5.95824V10.2916C0.541626 10.7225 0.712831 11.1359 1.01758 11.4406C1.32232 11.7454 1.73565 11.9166 2.16663 11.9166H10.8333C11.2643 11.9166 11.6776 11.7454 11.9823 11.4406C12.2871 11.1359 12.4583 10.7225 12.4583 10.2916V5.95824C12.4583 5.52726 12.2871 5.11393 11.9823 4.80919C11.6776 4.50444 11.2643 4.33324 10.8333 4.33324Z" fill="#00B1BB"/>
</svg>' state1="Pago intereses" state2="Pago crédito vehículo" state3="Pago establecimiento Sanwidch Q’bano"
            state4="Abono intereses" date1="05/05/23" date2="01/05/23" date3="27/04/23" date4="15/04/23" mount1="3.47"
            mount2="-248,000" mount3="-24,500" mount4="12,000"></table-icon>
        </section>
      </div>

      <div class="main__desktop-right">


        <section class="main__balance">
          <h3 class="main__subtitle">Balance de tu cuenta:</h3>
          <div class="main__balance-card">
            <div class="main__balance-card-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                <path
                  d="M6.19266 10.5074C6.0041 10.5074 5.81977 10.5633 5.66299 10.668C5.50621 10.7728 5.38401 10.9217 5.31185 11.0959C5.23969 11.2701 5.22081 11.4618 5.2576 11.6467C5.29439 11.8317 5.38519 12.0015 5.51852 12.1349C5.65185 12.2682 5.82172 12.359 6.00666 12.3958C6.1916 12.4326 6.38329 12.4137 6.5575 12.3415C6.7317 12.2694 6.8806 12.1472 6.98536 11.9904C7.09012 11.8336 7.14603 11.6493 7.14603 11.4607C7.14603 11.2079 7.04559 10.9654 6.86679 10.7866C6.688 10.6078 6.44551 10.5074 6.19266 10.5074ZM17.6332 10.5074C17.4446 10.5074 17.2603 10.5633 17.1035 10.668C16.9467 10.7728 16.8245 10.9217 16.7523 11.0959C16.6802 11.2701 16.6613 11.4618 16.6981 11.6467C16.7349 11.8317 16.8257 12.0015 16.959 12.1349C17.0923 12.2682 17.2622 12.359 17.4472 12.3958C17.6321 12.4326 17.8238 12.4137 17.998 12.3415C18.1722 12.2694 18.3211 12.1472 18.4259 11.9904C18.5306 11.8336 18.5865 11.6493 18.5865 11.4607C18.5865 11.2079 18.4861 10.9654 18.3073 10.7866C18.1285 10.6078 17.886 10.5074 17.6332 10.5074ZM19.5399 4.78711H4.28591C3.52735 4.78711 2.79987 5.08844 2.26349 5.62482C1.72711 6.1612 1.42578 6.88868 1.42578 7.64723V15.2742C1.42578 16.0328 1.72711 16.7603 2.26349 17.2966C2.79987 17.833 3.52735 18.1344 4.28591 18.1344H19.5399C20.2985 18.1344 21.0259 17.833 21.5623 17.2966C22.0987 16.7603 22.4 16.0328 22.4 15.2742V7.64723C22.4 6.88868 22.0987 6.1612 21.5623 5.62482C21.0259 5.08844 20.2985 4.78711 19.5399 4.78711ZM20.4933 15.2742C20.4933 15.5271 20.3928 15.7696 20.214 15.9484C20.0352 16.1272 19.7928 16.2276 19.5399 16.2276H4.28591C4.03306 16.2276 3.79056 16.1272 3.61177 15.9484C3.43298 15.7696 3.33253 15.5271 3.33253 15.2742V7.64723C3.33253 7.39438 3.43298 7.15189 3.61177 6.9731C3.79056 6.7943 4.03306 6.69386 4.28591 6.69386H19.5399C19.7928 6.69386 20.0352 6.7943 20.214 6.9731C20.3928 7.15189 20.4933 7.39438 20.4933 7.64723V15.2742ZM11.9129 8.60061C11.3472 8.60061 10.7942 8.76835 10.3239 9.08263C9.85356 9.3969 9.48697 9.84359 9.27049 10.3662C9.05402 10.8888 8.99738 11.4639 9.10774 12.0187C9.21809 12.5735 9.4905 13.0832 9.89049 13.4831C10.2905 13.8831 10.8001 14.1555 11.3549 14.2659C11.9097 14.3763 12.4848 14.3196 13.0074 14.1031C13.53 13.8867 13.9767 13.5201 14.291 13.0497C14.6053 12.5794 14.773 12.0264 14.773 11.4607C14.773 10.7022 14.4717 9.9747 13.9353 9.43832C13.3989 8.90194 12.6715 8.60061 11.9129 8.60061ZM11.9129 12.4141C11.7243 12.4141 11.54 12.3582 11.3832 12.2534C11.2265 12.1487 11.1043 11.9998 11.0321 11.8256C10.9599 11.6514 10.9411 11.4597 10.9778 11.2747C11.0146 11.0898 11.1054 10.9199 11.2388 10.7866C11.3721 10.6533 11.542 10.5625 11.7269 10.5257C11.9118 10.4889 12.1035 10.5078 12.2777 10.5799C12.452 10.6521 12.6008 10.7743 12.7056 10.9311C12.8104 11.0878 12.8663 11.2722 12.8663 11.4607C12.8663 11.7136 12.7658 11.9561 12.587 12.1349C12.4082 12.3137 12.1658 12.4141 11.9129 12.4141Z"
                  fill="#ACACAC" />
              </svg>
              <span>Cuenta ahorros:</span>
            </div>
            <div class="main__balance-card-info">
              <div class="main__balance-card-info-1">
                <p>Saldo anterior</p>
                <p>$540.000</p>
              </div>
              <div class="main__balance-card-info-2">
                <p>Ingresos</p>
                <p>$128.000</p>
              </div>
              <div class="main__balance-card-info-3">
                <p>Egresos</p>
                <p>$343.000</p>
              </div>

            </div>

            <div class="main__balance-card-mount">
              <p>Saldo actual</p>
              <p>$325.000</p>
            </div>
          </div>
        </section>

        <section class="main__graph">
          <div class="main__graph-card">
            <div class="main__graph-card-title">
              <span>Mes: marzo</span>
              <p>$540.000</p>
            </div>

            <div class="main__graph-card-bars">

              <div class="main__graph-card-bars-container">
                <div class="main__graph-card-bars-container-filled" style="height: 60%;background:#EFEFEF;"></div>
                <span>Dic</span>
              </div>


              <div class="main__graph-card-bars-container">
                <div class="main__graph-card-bars-container-filled" style="height: 70%;background:#EFEFEF;"></div>
                <span>Ene</span>
              </div>

              <div class="main__graph-card-bars-container">
                <div class="main__graph-card-bars-container-filled" style="height: 50%;background:#EFEFEF;"></div>
                <span>Feb</span>
              </div>

              <div class="main__graph-card-bars-container">
                <div class="main__graph-card-bars-container-filled" style="height: 100%;background:#00B1BB;"></div>
                <span style="color: #00B1BB;">Mar</span>
              </div>

              <div class="main__graph-card-bars-container">
                <div class="main__graph-card-bars-container-filled" style="height: 56%;background:#EFEFEF;"></div>
                <span>Abr</span>
              </div>

              <div class="main__graph-card-bars-container">
                <div class="main__graph-card-bars-container-filled" style="height: 65%;background:#EFEFEF;"></div>
                <span>May</span>
              </div>


            </div>

          </div>
        </section>
      </div>
    </section>
  </section>

  <script type="module" src="../components/components.js"></script>

    `
    }

}

customElements.define('productos2-profile', Producto2Profile)