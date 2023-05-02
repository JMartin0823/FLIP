import styles from './register.css'
class Register extends HTMLElement {

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
                <section class="all">
                <h1>Create an account</h1>
                <section class="two">
                <section class="one">
    <form action="" class="email">
        <input type="text" placeholder="Username" class="emailbar">
    </form>
    <form action="" class="password">
        <input type="text" placeholder="Password" class="passbar">
    </form></section>
    <button class="signin">Create</button>
</section>
                <h2>Done yet?</h2>
                <p>Yes, my account is created!</p>
                <button class="register">Sign in</button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-register", Register);
    export default Register;