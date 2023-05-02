import styles from './login.css'
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
                <section class="all">
                <h1>Login to your account</h1>
                <section class="two">
                <section class="one">
    <form action="" class="email">
        <input type="text" placeholder="Email" class="emailbar">
    </form>
    <form action="" class="password">
        <input type="text" placeholder="Password" class="passbar">
    </form></section>
    <button class="signin">Sign in</button>
</section>
                <h2>New here?</h2>
                <p>Let’s Wow your online presence</p>
                <button class="register">Register</button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-login", Login);
    export default Login;