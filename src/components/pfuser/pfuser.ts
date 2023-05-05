import styles from './pfuser.css'
class PFUser extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                <img class="user" src="../../../dist/user.png">
                <img class="pencil" src="" alt="">
                <img class ="setting" src="" alt="">
                <img class="user" src="" alt="">
                <h2>JORGE</h2>
                <p>245 followers  |  235 following</p>

                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-pfuser", PFUser);
    export default PFUser;