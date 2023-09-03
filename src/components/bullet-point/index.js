const template = document.createElement('template')

template.innerHTML = `
<style>.points 
{
    margin: 0;
    font-family: Bariol, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: 1.125rem;
    color: #676767;
}

path fill {
    color: var(--bullet-color, #676767);
}
</style>
<p class="points"><svg width="17" height="17" viewBox="0 0 17 17" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path
    d="M16.4608 8.23042C16.4608 12.7759 12.7759 16.4608 8.23042 16.4608C3.68488 16.4608 0 12.7759 0 8.23042C0 3.68488 3.68488 0 8.23042 0C12.7759 0 16.4608 3.68488 16.4608 8.23042ZM4.44145 8.23042C4.44145 10.323 6.13783 12.0194 8.23042 12.0194C10.323 12.0194 12.0194 10.323 12.0194 8.23042C12.0194 6.13783 10.323 4.44145 8.23042 4.44145C6.13783 4.44145 4.44145 6.13783 4.44145 8.23042Z"
    fill="var(--bullet-color, #676767)" />
</svg> <slot></slot></p>
`

export class BulletPoint extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'color') {
            this.style.setProperty('--bullet-color', newValue);
        }
    }

    static get observedAttributes() {
        return ['color'];
    }
}

customElements.define('bullet-point', BulletPoint)
