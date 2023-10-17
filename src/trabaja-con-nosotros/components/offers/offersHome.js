import "./offersHome.scss";
import data from "../../data.json";

class OffersHome extends HTMLElement {
    constructor() {
        super();
        this.currentPage = 0;
        this.pageSize = 6; 
    }

    static get observedAttributes() {
        return [
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const totalCards = data.cards.length;
        const totalPages = Math.ceil(totalCards / this.pageSize);

        const cards = data.cards.slice(this.currentPage, this.currentPage + this.pageSize).map((card) => `
            <article class="Info-offer">
            <h6>${card.title}</h6>
            <div class="Info-now">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <g clip-path="url(#clip0_4175_1014)">
                            <path d="M3.14612 6.45349C3.04241 6.45349 2.94104 6.48425 2.85481 6.54186C2.76858 6.59948 2.70137 6.68137 2.66168 6.77719C2.62199 6.873 2.61161 6.97843 2.63184 7.08014C2.65208 7.18186 2.70202 7.27529 2.77535 7.34862C2.84868 7.42195 2.94211 7.47189 3.04382 7.49213C3.14554 7.51236 3.25097 7.50197 3.34678 7.46229C3.4426 7.4226 3.52449 7.35539 3.58211 7.26916C3.63972 7.18293 3.67047 7.08156 3.67047 6.97785C3.67047 6.83878 3.61523 6.70541 3.5169 6.60707C3.41856 6.50874 3.28519 6.45349 3.14612 6.45349ZM9.43836 6.45349C9.33466 6.45349 9.23328 6.48425 9.14705 6.54186C9.06082 6.59948 8.99361 6.68137 8.95393 6.77719C8.91424 6.873 8.90385 6.97843 8.92409 7.08014C8.94432 7.18186 8.99426 7.27529 9.06759 7.34862C9.14092 7.42195 9.23435 7.47189 9.33607 7.49213C9.43778 7.51236 9.54321 7.50197 9.63903 7.46229C9.73484 7.4226 9.81673 7.35539 9.87435 7.26916C9.93197 7.18293 9.96272 7.08156 9.96272 6.97785C9.96272 6.83878 9.90747 6.70541 9.80914 6.60707C9.7108 6.50874 9.57743 6.45349 9.43836 6.45349ZM10.4871 3.30737H2.09741C1.68021 3.30737 1.2801 3.47311 0.985092 3.76811C0.690086 4.06312 0.524353 4.46323 0.524353 4.88043V9.07526C0.524353 9.49246 0.690086 9.89258 0.985092 10.1876C1.2801 10.4826 1.68021 10.6483 2.09741 10.6483H10.4871C10.9043 10.6483 11.3044 10.4826 11.5994 10.1876C11.8944 9.89258 12.0601 9.49246 12.0601 9.07526V4.88043C12.0601 4.46323 11.8944 4.06312 11.5994 3.76811C11.3044 3.47311 10.9043 3.30737 10.4871 3.30737ZM11.0114 9.07526C11.0114 9.21433 10.9562 9.3477 10.8578 9.44604C10.7595 9.54437 10.6261 9.59962 10.4871 9.59962H2.09741C1.95835 9.59962 1.82498 9.54437 1.72664 9.44604C1.6283 9.3477 1.57306 9.21433 1.57306 9.07526V4.88043C1.57306 4.74137 1.6283 4.608 1.72664 4.50966C1.82498 4.41132 1.95835 4.35608 2.09741 4.35608H10.4871C10.6261 4.35608 10.7595 4.41132 10.8578 4.50966C10.9562 4.608 11.0114 4.74137 11.0114 4.88043V9.07526ZM6.29224 5.40479C5.98112 5.40479 5.67699 5.49705 5.4183 5.6699C5.15961 5.84275 4.95799 6.08842 4.83892 6.37586C4.71986 6.6633 4.68871 6.97959 4.74941 7.28474C4.8101 7.58988 4.95992 7.87017 5.17992 8.09017C5.39992 8.31017 5.68021 8.45999 5.98535 8.52068C6.2905 8.58138 6.60679 8.55023 6.89423 8.43117C7.18167 8.31211 7.42734 8.11048 7.60019 7.85179C7.77305 7.59311 7.8653 7.28897 7.8653 6.97785C7.8653 6.56065 7.69957 6.16053 7.40456 5.86553C7.10956 5.57052 6.70944 5.40479 6.29224 5.40479ZM6.29224 7.5022C6.18854 7.5022 6.08716 7.47145 6.00093 7.41383C5.9147 7.35622 5.84749 7.27432 5.8078 7.17851C5.76812 7.0827 5.75773 6.97727 5.77796 6.87555C5.7982 6.77384 5.84814 6.68041 5.92147 6.60707C5.9948 6.53374 6.08823 6.4838 6.18995 6.46357C6.29166 6.44334 6.39709 6.45372 6.4929 6.49341C6.58872 6.5331 6.67061 6.6003 6.72823 6.68653C6.78584 6.77276 6.8166 6.87414 6.8166 6.97785C6.8166 7.11692 6.76135 7.25029 6.66302 7.34862C6.56468 7.44696 6.43131 7.5022 6.29224 7.5022Z" fill="#00B1BB"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4175_1014">
                                <rect width="12.5845" height="12.5845" fill="white" transform="translate(0 0.685547)"/>
                            </clipPath>
                            </defs>
                    </svg>
                    <p>${card.salary}</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.8228 5.56211C11.7484 4.78755 11.4747 4.04547 11.0283 3.40811C10.5819 2.77076 9.97805 2.25987 9.27558 1.92518C8.5731 1.59049 7.79593 1.44342 7.01974 1.49827C6.24355 1.55313 5.49479 1.80806 4.84638 2.23822C4.28932 2.61071 3.82167 3.10196 3.47703 3.67666C3.13239 4.25137 2.91931 4.89527 2.8531 5.56211C2.78815 6.22459 2.87149 6.89321 3.09705 7.51948C3.32262 8.14575 3.68476 8.71395 4.15721 9.18287L6.96688 11.9978C7.01616 12.0475 7.0748 12.087 7.1394 12.1139C7.204 12.1408 7.27329 12.1547 7.34327 12.1547C7.41325 12.1547 7.48254 12.1408 7.54714 12.1139C7.61175 12.087 7.67038 12.0475 7.71966 11.9978L10.5187 9.18287C10.9912 8.71395 11.3533 8.14575 11.5789 7.51948C11.8045 6.89321 11.8878 6.22459 11.8228 5.56211ZM9.77655 8.4354L7.33797 10.874L4.89939 8.4354C4.54001 8.076 4.26472 7.64144 4.09332 7.16296C3.92191 6.68449 3.85864 6.17398 3.90805 5.66814C3.95779 5.1545 4.12104 4.65833 4.386 4.21551C4.65096 3.77269 5.01101 3.39427 5.44012 3.10763C6.00255 2.73402 6.66275 2.53472 7.33797 2.53472C8.01319 2.53472 8.67339 2.73402 9.23582 3.10763C9.66363 3.39316 10.0229 3.76991 10.2878 4.21079C10.5527 4.65167 10.7166 5.14575 10.7679 5.65754C10.8189 6.16509 10.7564 6.67764 10.585 7.15808C10.4135 7.63852 10.1374 8.07482 9.77655 8.4354ZM7.33797 3.63775C6.86615 3.63775 6.40492 3.77767 6.01262 4.0398C5.62032 4.30192 5.31455 4.6745 5.13399 5.1104C4.95344 5.54631 4.90619 6.02597 4.99824 6.48872C5.09029 6.95148 5.31749 7.37654 5.65112 7.71017C5.98475 8.0438 6.40981 8.271 6.87257 8.36305C7.33532 8.4551 7.81498 8.40786 8.25089 8.2273C8.68679 8.04674 9.05937 7.74098 9.3215 7.34867C9.58362 6.95637 9.72354 6.49514 9.72354 6.02332C9.72214 5.39106 9.47035 4.7851 9.02327 4.33802C8.5762 3.89094 7.97023 3.63916 7.33797 3.63775ZM7.33797 7.34864C7.07585 7.34864 6.81961 7.27091 6.60166 7.12528C6.38372 6.97965 6.21385 6.77267 6.11354 6.5305C6.01323 6.28833 5.98698 6.02185 6.03812 5.76477C6.08926 5.50768 6.21548 5.27153 6.40083 5.08618C6.58618 4.90083 6.82233 4.77461 7.07941 4.72347C7.3365 4.67233 7.60298 4.69858 7.84515 4.79889C8.08732 4.8992 8.2943 5.06907 8.43993 5.28702C8.58556 5.50496 8.66328 5.7612 8.66328 6.02332C8.66328 6.37482 8.52365 6.71192 8.27511 6.96046C8.02656 7.20901 7.68946 7.34864 7.33797 7.34864Z" fill="#00B1BB"/>
                    </svg>
                    <p>${card.city}</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <g clip-path="url(#clip0_4175_1158)">
                            <path d="M5.48109 8.63349C5.57065 8.63349 5.65821 8.60694 5.73268 8.55718C5.80715 8.50742 5.86519 8.43669 5.89947 8.35394C5.93374 8.27119 5.94271 8.18014 5.92524 8.0923C5.90776 8.00445 5.86463 7.92376 5.8013 7.86043C5.73797 7.7971 5.65728 7.75397 5.56943 7.73649C5.48159 7.71902 5.39054 7.72799 5.30779 7.76226C5.22504 7.79654 5.15431 7.85458 5.10456 7.92905C5.0548 8.00352 5.02824 8.09108 5.02824 8.18064C5.02824 8.30075 5.07595 8.41593 5.16087 8.50086C5.2458 8.58578 5.36098 8.63349 5.48109 8.63349ZM7.74534 8.63349C7.83491 8.63349 7.92246 8.60694 7.99693 8.55718C8.0714 8.50742 8.12945 8.43669 8.16372 8.35394C8.198 8.27119 8.20696 8.18014 8.18949 8.0923C8.17202 8.00445 8.12889 7.92376 8.06556 7.86043C8.00222 7.7971 7.92153 7.75397 7.83369 7.73649C7.74584 7.71902 7.65479 7.72799 7.57204 7.76226C7.4893 7.79654 7.41857 7.85458 7.36881 7.92905C7.31905 8.00352 7.29249 8.09108 7.29249 8.18064C7.29249 8.30075 7.3402 8.41593 7.42513 8.50086C7.51005 8.58578 7.62524 8.63349 7.74534 8.63349ZM7.74534 6.82209C7.83491 6.82209 7.92246 6.79553 7.99693 6.74577C8.0714 6.69601 8.12945 6.62529 8.16372 6.54254C8.198 6.45979 8.20696 6.36874 8.18949 6.28089C8.17202 6.19305 8.12889 6.11236 8.06556 6.04903C8.00222 5.98569 7.92153 5.94256 7.83369 5.92509C7.74584 5.90762 7.65479 5.91658 7.57204 5.95086C7.4893 5.98514 7.41857 6.04318 7.36881 6.11765C7.31905 6.19212 7.29249 6.27967 7.29249 6.36924C7.29249 6.48934 7.3402 6.60453 7.42513 6.68945C7.51005 6.77438 7.62524 6.82209 7.74534 6.82209ZM5.48109 6.82209C5.57065 6.82209 5.65821 6.79553 5.73268 6.74577C5.80715 6.69601 5.86519 6.62529 5.89947 6.54254C5.93374 6.45979 5.94271 6.36874 5.92524 6.28089C5.90776 6.19305 5.86463 6.11236 5.8013 6.04903C5.73797 5.98569 5.65728 5.94256 5.56943 5.92509C5.48159 5.90762 5.39054 5.91658 5.30779 5.95086C5.22504 5.98514 5.15431 6.04318 5.10456 6.11765C5.0548 6.19212 5.02824 6.27967 5.02824 6.36924C5.02824 6.48934 5.07595 6.60453 5.16087 6.68945C5.2458 6.77438 5.36098 6.82209 5.48109 6.82209ZM8.65104 1.38788H8.19819V0.935029C8.19819 0.814925 8.15048 0.699741 8.06556 0.614815C7.98063 0.529889 7.86544 0.482178 7.74534 0.482178C7.62524 0.482178 7.51005 0.529889 7.42513 0.614815C7.3402 0.699741 7.29249 0.814925 7.29249 0.935029V1.38788H3.66968V0.935029C3.66968 0.814925 3.62197 0.699741 3.53705 0.614815C3.45212 0.529889 3.33694 0.482178 3.21683 0.482178C3.09673 0.482178 2.98154 0.529889 2.89662 0.614815C2.81169 0.699741 2.76398 0.814925 2.76398 0.935029V1.38788H2.31113C1.95082 1.38788 1.60527 1.53101 1.35049 1.78579C1.09571 2.04057 0.952578 2.38612 0.952578 2.74643V9.08634C0.952578 9.44666 1.09571 9.79221 1.35049 10.047C1.60527 10.3018 1.95082 10.4449 2.31113 10.4449H8.65104C9.01135 10.4449 9.35691 10.3018 9.61168 10.047C9.86646 9.79221 10.0096 9.44666 10.0096 9.08634V2.74643C10.0096 2.38612 9.86646 2.04057 9.61168 1.78579C9.35691 1.53101 9.01135 1.38788 8.65104 1.38788ZM9.10389 9.08634C9.10389 9.20645 9.05618 9.32163 8.97126 9.40656C8.88633 9.49149 8.77115 9.5392 8.65104 9.5392H2.31113C2.19103 9.5392 2.07584 9.49149 1.99092 9.40656C1.90599 9.32163 1.85828 9.20645 1.85828 9.08634V5.01069H9.10389V9.08634ZM9.10389 4.10498H1.85828V2.74643C1.85828 2.62633 1.90599 2.51114 1.99092 2.42622C2.07584 2.34129 2.19103 2.29358 2.31113 2.29358H2.76398V2.74643C2.76398 2.86654 2.81169 2.98172 2.89662 3.06665C2.98154 3.15157 3.09673 3.19928 3.21683 3.19928C3.33694 3.19928 3.45212 3.15157 3.53705 3.06665C3.62197 2.98172 3.66968 2.86654 3.66968 2.74643V2.29358H7.29249V2.74643C7.29249 2.86654 7.3402 2.98172 7.42513 3.06665C7.51005 3.15157 7.62524 3.19928 7.74534 3.19928C7.86544 3.19928 7.98063 3.15157 8.06556 3.06665C8.15048 2.98172 8.19819 2.86654 8.19819 2.74643V2.29358H8.65104C8.77115 2.29358 8.88633 2.34129 8.97126 2.42622C9.05618 2.51114 9.10389 2.62633 9.10389 2.74643V4.10498ZM3.21683 6.82209C3.3064 6.82209 3.39395 6.79553 3.46842 6.74577C3.54289 6.69601 3.60094 6.62529 3.63521 6.54254C3.66949 6.45979 3.67846 6.36874 3.66098 6.28089C3.64351 6.19305 3.60038 6.11236 3.53705 6.04903C3.47371 5.98569 3.39302 5.94256 3.30518 5.92509C3.21733 5.90762 3.12628 5.91658 3.04353 5.95086C2.96079 5.98514 2.89006 6.04318 2.8403 6.11765C2.79054 6.19212 2.76398 6.27967 2.76398 6.36924C2.76398 6.48934 2.81169 6.60453 2.89662 6.68945C2.98154 6.77438 3.09673 6.82209 3.21683 6.82209ZM3.21683 8.63349C3.3064 8.63349 3.39395 8.60694 3.46842 8.55718C3.54289 8.50742 3.60094 8.43669 3.63521 8.35394C3.66949 8.27119 3.67846 8.18014 3.66098 8.0923C3.64351 8.00445 3.60038 7.92376 3.53705 7.86043C3.47371 7.7971 3.39302 7.75397 3.30518 7.73649C3.21733 7.71902 3.12628 7.72799 3.04353 7.76226C2.96079 7.79654 2.89006 7.85458 2.8403 7.92905C2.79054 8.00352 2.76398 8.09108 2.76398 8.18064C2.76398 8.30075 2.81169 8.41593 2.89662 8.50086C2.98154 8.58578 3.09673 8.63349 3.21683 8.63349Z" fill="#00B1BB"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4175_1158">
                                <rect width="10.8684" height="10.8684" fill="white" transform="translate(0.046875 0.0292969)"/>
                            </clipPath>
                            </defs>
                    </svg>
                    <p>${card.date}</p>
                </div>
            </div>
            <div class="Info-more">
                <button>Ver más</button>
            </div>
            <hr>
            </article>
        `).join("");

        const pageEnd = Math.min(this.currentPage + this.pageSize, totalCards);
        const pageCounter = `${pageEnd} de ${totalCards} ofertas`;

        const paginationButtons = [];
        for (let i = 0; i < totalPages; i++) {
            const pageNumber = i + 1;
            const isActive = i === this.currentPage / this.pageSize ? "active" : "";

            paginationButtons.push(`<button class="page-btn ${isActive}">${pageNumber}</button>`);
        }

        this.innerHTML = `
        <div class="DesktopFilter">
                <div class="DesktopFilter-selects">
                    <div class="DesktopFilter-work">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3249 12.8955L19.7044 18.2767C19.8928 18.4654 20 18.7226 20 18.9912C20 19.2598 19.8928 19.5142 19.7044 19.7056C19.516 19.8943 19.258 20 18.9914 20C18.7247 20 18.4668 19.8943 18.2784 19.7056L12.8989 14.3244C11.2903 15.5704 9.26722 16.1562 7.24414 15.9648C5.21815 15.7733 3.34286 14.8159 1.998 13.2898C0.653144 11.7638 -0.0598288 9.78044 0.00393607 7.74853C0.0705993 5.71376 0.905359 3.78187 2.34297 2.34439C3.78347 0.906908 5.71378 0.0695673 7.74845 0.00383742C9.78023 -0.0590346 11.7628 0.652562 13.2873 1.9986C14.8148 3.34463 15.7713 5.21936 15.9625 7.24555C16.1567 9.27175 15.5712 11.2951 14.3249 12.904V12.8955ZM8.00065 13.9957C9.59187 13.9957 11.1193 13.3641 12.2439 12.2382C13.3685 11.1122 14.0003 9.58611 14.0003 7.9943C14.0003 6.40249 13.3685 4.87642 12.2439 3.75044C11.1193 2.62446 9.59187 1.99288 8.00065 1.99288C6.40943 1.99288 4.88483 2.62446 3.75735 3.75044C2.63277 4.87642 2.0009 6.40249 2.0009 7.9943C2.0009 9.58611 2.63277 11.1122 3.75735 12.2382C4.88483 13.3641 6.40943 13.9957 8.00065 13.9957Z" fill="#797979"/>
                        </svg>
                        <p>Seleccionar área de trabajo</p>
                    </div>
                    <div class="DesktopFilter-city">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                            <path d="M21.5454 9.63C21.402 8.16892 20.8746 6.76909 20.0145 5.56682C19.1544 4.36456 17.9909 3.40083 16.6375 2.7695C15.284 2.13816 13.7866 1.86072 12.291 1.96421C10.7955 2.06769 9.35283 2.54856 8.10349 3.36C7.03018 4.06265 6.12914 4.9893 5.46511 6.07339C4.80107 7.15749 4.39052 8.37211 4.26295 9.63C4.13781 10.8797 4.29837 12.1409 4.73298 13.3223C5.16759 14.5036 5.86535 15.5755 6.77565 16.46L12.1892 21.77C12.2841 21.8637 12.3971 21.9381 12.5216 21.9889C12.646 22.0397 12.7795 22.0658 12.9144 22.0658C13.0492 22.0658 13.1827 22.0397 13.3072 21.9889C13.4317 21.9381 13.5446 21.8637 13.6396 21.77L19.0327 16.46C19.943 15.5755 20.6408 14.5036 21.0754 13.3223C21.51 12.1409 21.6705 10.8797 21.5454 9.63ZM17.6027 15.05L12.9042 19.65L8.20564 15.05C7.5132 14.3721 6.98279 13.5523 6.65253 12.6498C6.32227 11.7472 6.20037 10.7842 6.29558 9.83C6.39141 8.86111 6.70595 7.92516 7.21646 7.08985C7.72697 6.25453 8.4207 5.54071 9.24748 5C10.3312 4.29524 11.6032 3.9193 12.9042 3.9193C14.2051 3.9193 15.4772 4.29524 16.5609 5C17.3851 5.53862 18.0773 6.24928 18.5877 7.08094C19.0981 7.9126 19.414 8.84461 19.5128 9.81C19.6111 10.7674 19.4907 11.7343 19.1604 12.6406C18.83 13.5468 18.2979 14.3698 17.6027 15.05ZM12.9042 6C11.9951 6 11.1064 6.26392 10.3506 6.75839C9.59468 7.25286 9.00555 7.95566 8.65766 8.77793C8.30977 9.6002 8.21874 10.505 8.3961 11.3779C8.57345 12.2508 9.01121 13.0526 9.65403 13.682C10.2968 14.3113 11.1158 14.7399 12.0075 14.9135C12.8991 15.0872 13.8233 14.9981 14.6631 14.6575C15.503 14.3169 16.2209 13.7401 16.7259 13.0001C17.231 12.26 17.5006 11.39 17.5006 10.5C17.4979 9.30734 17.0127 8.16428 16.1513 7.32094C15.2899 6.4776 14.1224 6.00265 12.9042 6ZM12.9042 13C12.3991 13 11.9054 12.8534 11.4855 12.5787C11.0656 12.304 10.7383 11.9135 10.545 11.4567C10.3517 10.9999 10.3012 10.4972 10.3997 10.0123C10.4982 9.52733 10.7414 9.08187 11.0985 8.73224C11.4557 8.38261 11.9107 8.1445 12.406 8.04804C12.9013 7.95158 13.4148 8.00109 13.8814 8.1903C14.348 8.37952 14.7468 8.69996 15.0274 9.11108C15.308 9.5222 15.4577 10.0056 15.4577 10.5C15.4577 11.163 15.1887 11.7989 14.7098 12.2678C14.2309 12.7366 13.5814 13 12.9042 13Z" fill="#797979"/>
                          </svg>
                        <select name="" id="">
                            <option value="">Seleccionar Ciudad</option>
                        </select>
                    </div>
                </div>
                <button>Buscar</button>
            </div>

            <main class="Main">
                <article class="Left">
                    <div class="Left-salary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M8.99994 16.5C8.70327 16.5 8.41326 16.5879 8.16658 16.7528C7.91991 16.9176 7.72765 17.1519 7.61412 17.4259C7.50059 17.7 7.47088 18.0016 7.52876 18.2926C7.58664 18.5836 7.7295 18.8509 7.93928 19.0606C8.14906 19.2704 8.41633 19.4133 8.7073 19.4711C8.99827 19.529 9.29987 19.4993 9.57396 19.3858C9.84805 19.2723 10.0823 19.08 10.2471 18.8333C10.412 18.5867 10.4999 18.2966 10.4999 18C10.4999 17.6021 10.3419 17.2206 10.0606 16.9393C9.77929 16.658 9.39776 16.5 8.99994 16.5ZM26.9999 16.5C26.7033 16.5 26.4133 16.5879 26.1666 16.7528C25.9199 16.9176 25.7277 17.1519 25.6141 17.4259C25.5006 17.7 25.4709 18.0016 25.5288 18.2926C25.5866 18.5836 25.7295 18.8509 25.9393 19.0606C26.1491 19.2704 26.4163 19.4133 26.7073 19.4711C26.9983 19.529 27.2999 19.4993 27.574 19.3858C27.8481 19.2723 28.0823 19.08 28.2471 18.8333C28.412 18.5867 28.4999 18.2966 28.4999 18C28.4999 17.6021 28.3419 17.2206 28.0606 16.9393C27.7793 16.658 27.3978 16.5 26.9999 16.5ZM29.9999 7.49997H5.99994C4.80646 7.49997 3.66187 7.97408 2.81796 8.81799C1.97404 9.6619 1.49994 10.8065 1.49994 12V24C1.49994 25.1934 1.97404 26.338 2.81796 27.1819C3.66187 28.0259 4.80646 28.5 5.99994 28.5H29.9999C31.1934 28.5 32.338 28.0259 33.1819 27.1819C34.0258 26.338 34.4999 25.1934 34.4999 24V12C34.4999 10.8065 34.0258 9.6619 33.1819 8.81799C32.338 7.97408 31.1934 7.49997 29.9999 7.49997ZM31.4999 24C31.4999 24.3978 31.3419 24.7793 31.0606 25.0606C30.7793 25.3419 30.3978 25.5 29.9999 25.5H5.99994C5.60211 25.5 5.22058 25.3419 4.93928 25.0606C4.65797 24.7793 4.49994 24.3978 4.49994 24V12C4.49994 11.6021 4.65797 11.2206 4.93928 10.9393C5.22058 10.658 5.60211 10.5 5.99994 10.5H29.9999C30.3978 10.5 30.7793 10.658 31.0606 10.9393C31.3419 11.2206 31.4999 11.6021 31.4999 12V24ZM17.9999 13.5C17.1099 13.5 16.2399 13.7639 15.4999 14.2584C14.7599 14.7528 14.1831 15.4556 13.8425 16.2779C13.5019 17.1002 13.4128 18.005 13.5864 18.8779C13.76 19.7508 14.1886 20.5526 14.818 21.1819C15.4473 21.8113 16.2491 22.2399 17.122 22.4135C17.9949 22.5871 18.8997 22.498 19.722 22.1574C20.5443 21.8168 21.2471 21.2401 21.7416 20.5C22.236 19.76 22.4999 18.89 22.4999 18C22.4999 16.8065 22.0258 15.6619 21.1819 14.818C20.338 13.9741 19.1934 13.5 17.9999 13.5ZM17.9999 19.5C17.7033 19.5 17.4133 19.412 17.1666 19.2472C16.9199 19.0824 16.7277 18.8481 16.6141 18.574C16.5006 18.2999 16.4709 17.9983 16.5288 17.7073C16.5866 17.4164 16.7295 17.1491 16.9393 16.9393C17.1491 16.7295 17.4163 16.5867 17.7073 16.5288C17.9983 16.4709 18.2999 16.5006 18.574 16.6141C18.8481 16.7277 19.0823 16.9199 19.2471 17.1666C19.412 17.4133 19.4999 17.7033 19.4999 18C19.4999 18.3978 19.3419 18.7793 19.0606 19.0606C18.7793 19.3419 18.3978 19.5 17.9999 19.5Z" fill="#00B1BB"/>
                        </svg>
                        <p>Salario (en millones de pesos)</p>
                    </div>
                    <div class="Left-checkboxes">
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>$1 a $1,5</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>$1,5 a $2</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>$2 a $2,5</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>$3,5 a $4</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>$4,5 a $5,5</p>
                        </label>
                    </div>
                    <div class="Left-salary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 25.3333C16.2637 25.3333 16.5215 25.2551 16.7408 25.1086C16.96 24.9621 17.1309 24.7539 17.2319 24.5102C17.3328 24.2666 17.3592 23.9985 17.3077 23.7399C17.2563 23.4812 17.1293 23.2437 16.9428 23.0572C16.7564 22.8707 16.5188 22.7437 16.2601 22.6923C16.0015 22.6408 15.7334 22.6672 15.4898 22.7682C15.2461 22.8691 15.0379 23.04 14.8914 23.2592C14.7449 23.4785 14.6667 23.7363 14.6667 24C14.6667 24.3536 14.8072 24.6928 15.0572 24.9428C15.3073 25.1929 15.6464 25.3333 16 25.3333ZM22.6667 25.3333C22.9304 25.3333 23.1882 25.2551 23.4074 25.1086C23.6267 24.9621 23.7976 24.7539 23.8985 24.5102C23.9994 24.2666 24.0258 23.9985 23.9744 23.7399C23.923 23.4812 23.796 23.2437 23.6095 23.0572C23.423 22.8707 23.1854 22.7437 22.9268 22.6923C22.6682 22.6408 22.4001 22.6672 22.1564 22.7682C21.9128 22.8691 21.7046 23.04 21.5581 23.2592C21.4116 23.4785 21.3334 23.7363 21.3334 24C21.3334 24.3536 21.4738 24.6928 21.7239 24.9428C21.9739 25.1929 22.3131 25.3333 22.6667 25.3333ZM22.6667 20C22.9304 20 23.1882 19.9218 23.4074 19.7753C23.6267 19.6288 23.7976 19.4205 23.8985 19.1769C23.9994 18.9333 24.0258 18.6652 23.9744 18.4065C23.923 18.1479 23.796 17.9103 23.6095 17.7239C23.423 17.5374 23.1854 17.4104 22.9268 17.359C22.6682 17.3075 22.4001 17.3339 22.1564 17.4348C21.9128 17.5357 21.7046 17.7066 21.5581 17.9259C21.4116 18.1452 21.3334 18.403 21.3334 18.6667C21.3334 19.0203 21.4738 19.3594 21.7239 19.6095C21.9739 19.8595 22.3131 20 22.6667 20ZM16 20C16.2637 20 16.5215 19.9218 16.7408 19.7753C16.96 19.6288 17.1309 19.4205 17.2319 19.1769C17.3328 18.9333 17.3592 18.6652 17.3077 18.4065C17.2563 18.1479 17.1293 17.9103 16.9428 17.7239C16.7564 17.5374 16.5188 17.4104 16.2601 17.359C16.0015 17.3075 15.7334 17.3339 15.4898 17.4348C15.2461 17.5357 15.0379 17.7066 14.8914 17.9259C14.7449 18.1452 14.6667 18.403 14.6667 18.6667C14.6667 19.0203 14.8072 19.3594 15.0572 19.6095C15.3073 19.8595 15.6464 20 16 20ZM25.3334 4H24V2.66667C24 2.31305 23.8595 1.97391 23.6095 1.72386C23.3594 1.47381 23.0203 1.33334 22.6667 1.33334C22.3131 1.33334 21.9739 1.47381 21.7239 1.72386C21.4738 1.97391 21.3334 2.31305 21.3334 2.66667V4H10.6667V2.66667C10.6667 2.31305 10.5262 1.97391 10.2762 1.72386C10.0261 1.47381 9.68698 1.33334 9.33335 1.33334C8.97973 1.33334 8.64059 1.47381 8.39054 1.72386C8.1405 1.97391 8.00002 2.31305 8.00002 2.66667V4H6.66669C5.60582 4 4.58841 4.42143 3.83826 5.17158C3.08811 5.92172 2.66669 6.93914 2.66669 8V26.6667C2.66669 27.7275 3.08811 28.7449 3.83826 29.4951C4.58841 30.2452 5.60582 30.6667 6.66669 30.6667H25.3334C26.3942 30.6667 27.4116 30.2452 28.1618 29.4951C28.9119 28.7449 29.3334 27.7275 29.3334 26.6667V8C29.3334 6.93914 28.9119 5.92172 28.1618 5.17158C27.4116 4.42143 26.3942 4 25.3334 4ZM26.6667 26.6667C26.6667 27.0203 26.5262 27.3594 26.2762 27.6095C26.0261 27.8595 25.687 28 25.3334 28H6.66669C6.31306 28 5.97393 27.8595 5.72388 27.6095C5.47383 27.3594 5.33335 27.0203 5.33335 26.6667V14.6667H26.6667V26.6667ZM26.6667 12H5.33335V8C5.33335 7.64638 5.47383 7.30724 5.72388 7.05719C5.97393 6.80714 6.31306 6.66667 6.66669 6.66667H8.00002V8C8.00002 8.35362 8.1405 8.69276 8.39054 8.94281C8.64059 9.19286 8.97973 9.33334 9.33335 9.33334C9.68698 9.33334 10.0261 9.19286 10.2762 8.94281C10.5262 8.69276 10.6667 8.35362 10.6667 8V6.66667H21.3334V8C21.3334 8.35362 21.4738 8.69276 21.7239 8.94281C21.9739 9.19286 22.3131 9.33334 22.6667 9.33334C23.0203 9.33334 23.3594 9.19286 23.6095 8.94281C23.8595 8.69276 24 8.35362 24 8V6.66667H25.3334C25.687 6.66667 26.0261 6.80714 26.2762 7.05719C26.5262 7.30724 26.6667 7.64638 26.6667 8V12ZM9.33335 20C9.59706 20 9.85485 19.9218 10.0741 19.7753C10.2934 19.6288 10.4643 19.4205 10.5652 19.1769C10.6661 18.9333 10.6925 18.6652 10.6411 18.4065C10.5896 18.1479 10.4626 17.9103 10.2762 17.7239C10.0897 17.5374 9.85211 17.4104 9.59347 17.359C9.33483 17.3075 9.06674 17.3339 8.82311 17.4348C8.57947 17.5357 8.37124 17.7066 8.22473 17.9259C8.07822 18.1452 8.00002 18.403 8.00002 18.6667C8.00002 19.0203 8.1405 19.3594 8.39054 19.6095C8.64059 19.8595 8.97973 20 9.33335 20ZM9.33335 25.3333C9.59706 25.3333 9.85485 25.2551 10.0741 25.1086C10.2934 24.9621 10.4643 24.7539 10.5652 24.5102C10.6661 24.2666 10.6925 23.9985 10.6411 23.7399C10.5896 23.4812 10.4626 23.2437 10.2762 23.0572C10.0897 22.8707 9.85211 22.7437 9.59347 22.6923C9.33483 22.6408 9.06674 22.6672 8.82311 22.7682C8.57947 22.8691 8.37124 23.04 8.22473 23.2592C8.07822 23.4785 8.00002 23.7363 8.00002 24C8.00002 24.3536 8.1405 24.6928 8.39054 24.9428C8.64059 25.1929 8.97973 25.3333 9.33335 25.3333Z" fill="#00B1BB"/>
                        </svg>
                        <p>Fecha de publicación</p>
                    </div>
                    <div class="Left-checkboxes">
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>Hoy y ayer</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>Hace 1 semana</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>Hace 2 semanas</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>Hace 1 mes</p>
                        </label>
                        <label for="">
                            <input type="checkbox" name="" id="">
                            <p>Hace más de 1 mes</p>
                        </label>
                    </div>
                </article>

                <section class="Right">
                    <div class="Right-title">
                        <h2 class="Title-works">Empleo en BANCO W S.A.</h2>
                        <p>${pageCounter}</p>
                    </div>
                    <hr class="line">
                    <nav class="Filter">
                        <input type="text" placeholder="Seleccionar área de trabajo">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M12.2043 2.2644H3.22319C2.71277 2.2644 2.22326 2.46717 1.86234 2.82809C1.50142 3.189 1.29866 3.67852 1.29866 4.18893V4.9395C1.29857 5.20441 1.35317 5.46648 1.45904 5.70931V5.7478C1.54967 5.95371 1.67804 6.14083 1.83753 6.2995L5.78923 10.2255V14.4531C5.78901 14.5621 5.81658 14.6694 5.86933 14.7648C5.92209 14.8602 5.99829 14.9406 6.09074 14.9984C6.19283 15.0616 6.31063 15.095 6.43074 15.0946C6.53116 15.094 6.63004 15.0698 6.71942 15.024L9.28545 13.741C9.39125 13.6877 9.48021 13.6061 9.54249 13.5054C9.60477 13.4046 9.63793 13.2885 9.63828 13.1701V10.2255L13.5643 6.2995C13.7238 6.14083 13.8522 5.95371 13.9428 5.7478V5.70931C14.0575 5.46838 14.1209 5.20623 14.1289 4.9395V4.18893C14.1289 3.67852 13.9261 3.189 13.5652 2.82809C13.2043 2.46717 12.7147 2.2644 12.2043 2.2644ZM8.5413 9.50705C8.48185 9.56699 8.43481 9.63808 8.40288 9.71624C8.37096 9.7944 8.35478 9.87809 8.35527 9.96252V12.7723L7.07225 13.4138V9.96252C7.07273 9.87809 7.05655 9.7944 7.02463 9.71624C6.9927 9.63808 6.94566 9.56699 6.88621 9.50705L3.48621 6.11346H11.9413L8.5413 9.50705ZM12.8458 4.83044H2.58168V4.18893C2.58168 4.01879 2.64927 3.85562 2.76957 3.73532C2.88988 3.61501 3.05305 3.54742 3.22319 3.54742H12.2043C12.3745 3.54742 12.5376 3.61501 12.6579 3.73532C12.7782 3.85562 12.8458 4.01879 12.8458 4.18893V4.83044Z" fill="white"/>
                            </svg>
                        </button>
                    </nav>
    
                    <section class="Info">
                        <div class="Info-counter">
                            <p>${pageCounter}</p>
                        </div>

                        ${cards}
                        
                        <div class="Info-pagination">
                        <button id="previousBtn">Anterior</button>
                            ${paginationButtons.join('')}
                        <button id="nextBtn">Siguiente</button>
                        </div>
                    </section>
                </section>
            </main>
        `;

        const previousBtn = this.querySelector('#previousBtn');
        const nextBtn = this.querySelector('#nextBtn');
        const pageButtons = this.querySelectorAll('.page-btn');

        previousBtn.addEventListener('click', () => {
            if (this.currentPage > 0) {
                this.currentPage -= this.pageSize;
                this.render();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (this.currentPage + this.pageSize < totalCards) {
                this.currentPage += this.pageSize;
                this.render();
            }
        });

        pageButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.currentPage = index * this.pageSize;
                this.render();
            });
        });

    }
}

customElements.define('offers-home', OffersHome)