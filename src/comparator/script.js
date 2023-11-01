const btnComparatorPig = document.getElementById("comparator-save");
const btnComparatorCredit = document.getElementById("comparator-credit");

btnComparatorPig.addEventListener("mouseenter", () => {
    const image = document.getElementById('pig-icon')
    image.src = '/icons/piggy-white.svg';
});

btnComparatorPig.addEventListener("mouseleave", () => {
    const image = document.getElementById('pig-icon')
    image.src = '/icons/piggy-orange.svg';
});

btnComparatorPig.addEventListener("click", () => {
    window.location.href = './saving/index.html'
});

btnComparatorCredit.addEventListener("mouseenter", () => {
    const image = document.getElementById('credit-icon')
    image.src = '/icons/dollar-white.svg';
});

btnComparatorCredit.addEventListener("mouseleave", () => {
    const image = document.getElementById('credit-icon')
    image.src = '/icons/dollar-orange.svg';
});

btnComparatorCredit.addEventListener("click", () => {
    window.location.href = './credit/index.html'
});

const btnComparatorPigDesk = document.getElementById("comparator-save-desk");
const btnComparatorCreditDesk = document.getElementById("comparator-credit-desk");

btnComparatorPigDesk.addEventListener("mouseenter", () => {
    const image = document.getElementById('pig-icon-desk')
    image.src = '/icons/piggy-white.svg';
});

btnComparatorPigDesk.addEventListener("mouseleave", () => {
    const image = document.getElementById('pig-icon-desk')
    image.src = '/icons/piggy-orange.svg';
});

btnComparatorPigDesk.addEventListener("click", () => {
    window.location.href = './saving/index.html'
});

btnComparatorCreditDesk.addEventListener("mouseenter", () => {
    const image = document.getElementById('credit-icon-desk')
    image.src = '/icons/dollar-white.svg';
});

btnComparatorCreditDesk.addEventListener("mouseleave", () => {
    const image = document.getElementById('credit-icon-desk')
    image.src = '/icons/dollar-orange.svg';
});

btnComparatorCreditDesk.addEventListener("click", () => {
    window.location.href = './credit/index.html'
});