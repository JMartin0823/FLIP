class Login extends HTMLElement {

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
                <link rel="stylesheet" href="./login.css">
                <section>
           
            </section>
                `;
            }
        }
    }

    customElements.define("my-login", Login);
    export default Login;