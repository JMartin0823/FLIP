import styles from './pfpost.css'
class PFPost extends HTMLElement {

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
                <img  class="primera" src="" alt="">
                <img class="segunda" src="" alt="">
                <img class="tercera" src="" alt="">

                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-pfpost", PFPost);
    export default PFPost;