import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/store';
import styles from './create.css'
class Create extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                const all = this.ownerDocument.createElement("section")
                all.className = "all"

                const header = this.ownerDocument.createElement("h1")
                header.textContent="New post"

                const two = this.ownerDocument.createElement("section")
                two.className = "two"

                const one = this.ownerDocument.createElement("section")
                one.className = "one"

                const input2 = this.ownerDocument.createElement("input")
                input2.className = "passbar"
                input2.placeholder="Caption"

                const login = this.ownerDocument.createElement("button")
                login.className = "signin"
                login.textContent="Post"
                login.addEventListener("click", () =>{
                    dispatch(navigate(Screens.HOMEPAGE))
                } )

                const header2 = this.ownerDocument.createElement("h2")
                header2.textContent="Select files"

                const text = this.ownerDocument.createElement("p")
                text.textContent="Great Choice!"

                const register = this.ownerDocument.createElement("button")
                register.className = "register"
                register.textContent="Upload"
                register.addEventListener("click", () =>{
                    dispatch(navigate(Screens.REGISTER))
                } )

                all.appendChild(header)
                all.appendChild(two)
                two.appendChild(one)
                one.appendChild(input2)
                two.appendChild(login)
                all.appendChild(header2)
                all.appendChild(text)
                all.appendChild(register)

                this.shadowRoot.appendChild(all)
                

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-create", Create);
    export default Create;