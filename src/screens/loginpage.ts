class AppLogIn extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML += `<link rel="stylesheet" href="./loginpage.css">`;
                this.shadowRoot.innerHTML += `<my-login></my-login>`;
                  }
                }
            }

    customElements.define("app-loginpage", AppLogIn);
            
