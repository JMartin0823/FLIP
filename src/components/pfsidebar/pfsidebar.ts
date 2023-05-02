import styles from './pfsidebar.css'
class PFSidebar extends HTMLElement {

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
                <Button class="selected">Profile</Button>
                <Button>Edit profile</Button>
                <Button>Change password</Button>
                <Button>Connected apps</Button>
                <Button>Push notifications</Button>
                <Button>Manage contacts</Button>
                <Button>Privacy and security</Button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-pfsidebar", PFSidebar);
    export default PFSidebar;