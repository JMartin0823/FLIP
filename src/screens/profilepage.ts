import styles from "./profilepage.css"
class AppProfile extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                const login=this.ownerDocument.createElement("my-pfsidebar")

                const all=this.ownerDocument.createElement("section")
                all.className="all"
                all.appendChild(login)
                this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                  }
                }
            }

    customElements.define("app-profilepage", AppProfile);
            