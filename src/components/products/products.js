class Products extends HTMLElement {
    constructor() {}

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="container mt-4">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ahorro
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdown-options">
                <li><a class="dropdown-item" href="#" data-value="opcion1">Ahorro</a></li>
                <li><a class="dropdown-item" href="#" data-value="opcion2">Crédito</a></li>
                <li><a class="dropdown-item" href="#" data-value="opcion3">Inversión</a></li>
                <li><a class="dropdown-item" href="#" data-value="opcion4">Canales</a></li>
                <li><a class="dropdown-item" href="#" data-value="opcion5">Giros Internacionales</a></li>
            </ul>
        </div>

        <div id="info-container" class="mt-4">
            <div id="opcion1-info" class="opcion-info">
                <div class="info-product">
                    <div class="info-product_text">
                        <h1>Ahorro</h1>
                        <p class="body2">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                            molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                            lacus.</p>
                        <article class="description-product">
                            <ul class="description-product_text">
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes abrir el depósito de
                                    bajo monto sin
                                    acercarte a una oficina en pocos minutos.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes mantener un saldo
                                    mensual disponible
                                    máximo de ocho (8) SMMLV.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes retirar en el mes hasta
                                    ocho (8) SMMLV.
                                </li>
                            </ul>
                        </article>
                        <a href="" class="btn-desk">Conoce más</a>
                    </div>
                    <img src="../../public/images/woman-pig-landing.webp" alt="mujer con alcancía de cerdito"
                        class="image-ref-product">
                </div>
            </div>
            <div id="opcion2-info" class="opcion-info">
                <div class="info-product">
                    <div class="info-product_text">
                        <h1>Crédito</h1>
                        <p class="body2">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                            molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                            lacus.</p>
                        <article class="description-product">
                            <ul class="description-product_text">
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes abrir el depósito de
                                    bajo monto sin
                                    acercarte a una oficina en pocos minutos.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes mantener un saldo
                                    mensual disponible
                                    máximo de ocho (8) SMMLV.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes retirar en el mes hasta
                                    ocho (8) SMMLV.
                                </li>
                            </ul>
                        </article>
                        <a href="" class="btn-desk">Conoce más</a>
                    </div>
                    <img src="../../public/images/woman-pig-landing.webp" alt="mujer con alcancía de cerdito"
                        class="image-ref-product">
                </div>
            </div>
            <div id="opcion3-info" class="opcion-info">
                <div class="info-product">
                    <div class="info-product_text">
                        <h1>Inversión</h1>
                        <p class="body2">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                            molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                            lacus.</p>
                        <article class="description-product">
                            <ul class="description-product_text">
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes abrir el depósito de
                                    bajo monto sin
                                    acercarte a una oficina en pocos minutos.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes mantener un saldo
                                    mensual disponible
                                    máximo de ocho (8) SMMLV.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes retirar en el mes hasta
                                    ocho (8) SMMLV.
                                </li>
                            </ul>
                        </article>
                        <a href="" class="btn-desk">Conoce más</a>
                    </div>
                    <img src="../../public/images/woman-pig-landing.webp" alt="mujer con alcancía de cerdito"
                        class="image-ref-product">
                </div>
            </div>
            <div id="opcion4-info" class="opcion-info">
                <div class="info-product">
                    <div class="info-product_text">
                        <h1>Canales</h1>
                        <p class="body2">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                            molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                            lacus.</p>
                        <article class="description-product">
                            <ul class="description-product_text">
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes abrir el depósito de
                                    bajo monto sin
                                    acercarte a una oficina en pocos minutos.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes mantener un saldo
                                    mensual disponible
                                    máximo de ocho (8) SMMLV.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes retirar en el mes hasta
                                    ocho (8) SMMLV.
                                </li>
                            </ul>
                        </article>
                        <a href="" class="btn-desk">Conoce más</a>
                    </div>
                    <img src="../../public/images/woman-pig-landing.webp" alt="mujer con alcancía de cerdito"
                        class="image-ref-product">
                </div>
            </div>
            <div id="opcion5-info" class="opcion-info">
                <div class="info-product">
                    <div class="info-product_text">
                        <h1>Giros Internacionales</h1>
                        <p class="body2">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                            molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                            lacus.</p>
                        <article class="description-product">
                            <ul class="description-product_text">
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes abrir el depósito de
                                    bajo monto sin
                                    acercarte a una oficina en pocos minutos.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes mantener un saldo
                                    mensual disponible
                                    máximo de ocho (8) SMMLV.</li>
                                <li class="body2"><img src="../../public/icons/item.svg" alt="ícono">Puedes retirar en el mes hasta
                                    ocho (8) SMMLV.
                                </li>
                            </ul>
                        </article>
                        <a href="" class="btn-desk">Conoce más</a>
                    </div>
                    <img src="../../public/images/woman-pig-landing.webp" alt="mujer con alcancía de cerdito"
                        class="image-ref-product">
                </div>
            </div>
        </div>
    </div>
    `
        document.addEventListener("DOMContentLoaded", function () {
            const dropdownOptions = document.querySelectorAll(".dropdown-item");
            const dropdownToggle = document.querySelector(".dropdown-toggle");

            dropdownOptions.forEach((option) => {
                option.addEventListener("click", function () {
                    const selectedValue = this.getAttribute("data-value");
                    const selectedText = this.textContent;

                    dropdownToggle.textContent = selectedText;

                    // Mostrar el contenido correspondiente en el info-container
                    const opcionInfos = document.querySelectorAll(".opcion-info");
                    opcionInfos.forEach((info) => {
                        info.style.display = "none";
                    });

                    const selectedInfo = document.getElementById(`${selectedValue}-info`);
                    selectedInfo.style.display = "block";
                });
            });
        });
    }
}


customElements.define('comments-product', Comment)
export default Comment