import "./buttonDuoIcon.scss";

class ButtonDuoIcon extends HTMLElement {
    constructor() {
        super();
        this.text;
        this.icon;
        this.additional_text;
        this.link;
    }

    static get observedAttributes() {
        return [
            "text",
            "icon",
            "additional_text",
            "link",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "text":

                this.text = newValue

                break;

            case "icon":

                this.icon = newValue

                break;

            case "additional_text":
                this.additional_text
                break;

            case "link":

                this.link = newValue

                break;
        }

    }


    connectedCallback() {
        this.render()
    }

    render() {

        const additionalText = this.getAttribute('additional_text');

        this.innerHTML = `
    <link rel="stylesheet" href="../ButtonDuoIcon/buttonDuoIcon.scss">
    

    <button type="button" class="buttonDuoIcon">

		<span class="buttonDuoIcon__icon">
			<ion-icon>${this.icon}</ion-icon>
		</span>
        <div class="buttonDuoIcon__info-container">
        <div class="buttonDuoIcon__text-container" style="flex-direction: ${additionalText ? 'column' : 'row'};align-items: ${additionalText ? 'start' : 'center'}">
        <span class="buttonDuoIcon__text">${this.text}</span>
        <span class="buttonDuoIcon__additional-text" style="display: ${additionalText ? 'block' : 'none'}">${additionalText}</span>
        </div>
        <figure class="buttonDuoIcon__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
            <path d="M16.7804 12.7694L10.6953 6.69497C10.5953 6.5942 10.4764 6.51422 10.3454 6.45964C10.2144 6.40505 10.0738 6.37695 9.93192 6.37695C9.78999 6.37695 9.64947 6.40505 9.51846 6.45964C9.38745 6.51422 9.26854 6.5942 9.16859 6.69497C8.96835 6.89641 8.85596 7.16889 8.85596 7.45292C8.85596 7.73695 8.96835 8.00944 9.16859 8.21088L14.4904 13.5864L9.16859 18.9083C8.96835 19.1097 8.85596 19.3822 8.85596 19.6662C8.85596 19.9502 8.96835 20.2227 9.16859 20.4242C9.26816 20.5257 9.3869 20.6066 9.51793 20.6619C9.64896 20.7173 9.78968 20.7461 9.93192 20.7467C10.0742 20.7461 10.2149 20.7173 10.3459 20.6619C10.4769 20.6066 10.5957 20.5257 10.6953 20.4242L16.7804 14.3498C16.8895 14.2491 16.9766 14.1269 17.0362 13.9909C17.0958 13.8549 17.1265 13.708 17.1265 13.5596C17.1265 13.4111 17.0958 13.2642 17.0362 13.1282C16.9766 12.9922 16.8895 12.87 16.7804 12.7694Z" fill="#ACACAC"/>
            </svg></figure>
        </div>
	</button>
    `
    }

}

customElements.define('button-duo-icon', ButtonDuoIcon)