export enum Attribu {
    "name" = "name",
}

class Sidebar extends HTMLElement {
    name?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribu, null> = {
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
    
    attributeChangedCallback(
        propName: Attribu,
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