export var Attribu;
(function (Attribu) {
    Attribu["name"] = "name";
})(Attribu || (Attribu = {}));
class Sidebar extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            name: null,
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
                <link rel="stylesheet" href="./components/sidebar/sidebar.css">
                <section>
                <Button>${this.name}</Button>
                </section>
                `;
        }
    }
}
customElements.define("my-sidebar", Sidebar);
export default Sidebar;
