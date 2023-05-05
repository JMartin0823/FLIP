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
            if (this.shadowRoot) {const user = this.ownerDocument.createElement("my-pfuser")
            const post = this.ownerDocument.createElement("my-pfpost")
            const login=this.ownerDocument.createElement("my-pfsidebar")
            this.shadowRoot.innerHTML += `<img src="./img/fliplogo2.png" alt="">`

            const all=this.ownerDocument.createElement("section")
            all.className="all"
            all.appendChild(login)
            all.appendChild(user)
            all.appendChild(post)
            this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                  }
                }
            }

    customElements.define("app-profilepage", AppProfile);
