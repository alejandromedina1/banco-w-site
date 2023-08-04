import './global.scss'
import './components/components.js'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slider-track");
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;

function touchHandler(e) {
    e.preventDefault();
}
slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startPos = getPositionX(e);
    animationID = requestAnimationFrame(animation);
    sliderTrack.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", () => {
    isDragging = false;
    cancelAnimationFrame(animationID);
    sliderTrack.style.cursor = "grab";

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < 2) {
        currentIndex += 1;
    } else if (movedBy > 100 && currentIndex > 0) {
        currentIndex -= 1;
    }

    setPositionByIndex();

    prevTranslate = currentTranslate;
});

slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
});

slider.addEventListener("touchstart", (e) => {
    isDragging = true;
    startPos = getPositionX(e);
    animationID = requestAnimationFrame(animation);
    slider.addEventListener("touchmove", touchHandler, {
        passive: false
    });
});

slider.addEventListener("touchend", () => {
    isDragging = false;
    cancelAnimationFrame(animationID);
    slider.removeEventListener("touchmove", touchHandler, {
        passive: false
    });

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < 2) {
        currentIndex += 1;
    } else if (movedBy > 100 && currentIndex > 0) {
        currentIndex -= 1;
    }

    setPositionByIndex();

    prevTranslate = currentTranslate;
});

slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
});

function getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -(window.innerWidth - 35);
    prevTranslate = currentTranslate;
    setSliderPosition();
}
//--------- Products Section-----------

document.addEventListener("DOMContentLoaded", function () {
    const dropdownOptions = document.querySelectorAll(".dropdown-item");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const infoContainer = document.getElementById("info-container");
    let scrollPosition = window.scrollY; // Guardar la posición actual del scroll

    dropdownToggle.addEventListener("click", function () {
        // Guardar la posición actual del scroll antes de mostrar el dropdown
        scrollPosition = window.scrollY;
    });

    dropdownOptions.forEach((option) => {
        option.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar recarga de página
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

            // Restaurar la posición del scroll después del cambio
            window.scrollTo(0, scrollPosition);
        });
    });
});
