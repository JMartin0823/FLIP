import "./screens/homepage"
import "./screens/loginpage"
import "./screens/registerpage"
import "./components/export"
import styles from "./index.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const dashboard = this.ownerDocument.createElement('app-homepage');
        this.shadowRoot?.appendChild(dashboard);

        // const dashboard = this.ownerDocument.createElement('app-loginpage');
        // this.shadowRoot?.appendChild(dashboard);

        // const dashboard = this.ownerDocument.createElement('app-registerpage');
        // this.shadowRoot?.appendChild(dashboard);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('app-container', AppContainer)