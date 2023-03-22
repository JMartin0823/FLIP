export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["description"] = "description";
})(Attribute || (Attribute = {}));
class About extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
    attributeChangedCallback(propName, _, newValue) {
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
                <link rel="stylesheet" href="./components/about/about.css">
                <section>
                <h3>${this.name}</h3>
                <p>${this.description}<span>
                </section>
                `;
        }
    }
}
customElements.define("my-about", About);
export default About;
