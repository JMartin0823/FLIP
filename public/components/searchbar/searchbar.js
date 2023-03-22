class Searchbar extends HTMLElement {
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
                <link rel="stylesheet" href="./components/searchbar/searchbar.css">
                <section class="container">
            <form action="" class="searchbar"><input type="text" placeholder="search anything" class="bar">
            <button class="buttonsearch "type="submit"><img src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" height ="35" width="35"></button>
            </form>
            </section>
                `;
        }
    }
}
customElements.define("my-search", Searchbar);
export default Searchbar;
