import styles from "./about.css"
export enum Attribute {
    "name" = "name",
    "description" = "description",
}

class About extends HTMLElement {
    name?: string;
    description?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            description: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./about.css">
                <section>
                <h3>${this.name}</h3>
                <p>${this.description}<span>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-about", About);
    export default About;