import dataCard from "./data.js";
import dataSidebar from "./data2.js";
import dataAbout from "./data3.js";
import "./components/index.js";
import { Attribute } from "./components/about/about.js";
import { Attribut } from "./components/card/card.js";
import { Attribu } from "./components/sidebar/sidebar.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.AboutS = [];
        this.CardS = [];
        this.SideB = [];
        this.attachShadow({ mode: "open" });
        dataAbout.forEach((user) => {
            const aboutCard = this.ownerDocument.createElement("my-about");
            aboutCard.setAttribute(Attribute.name, user.name);
            aboutCard.setAttribute(Attribute.description, user.description);
            this.AboutS.push(aboutCard);
        });
        dataCard.forEach((user) => {
            const sectionCard = this.ownerDocument.createElement("my-card");
            sectionCard.setAttribute(Attribut.name, user.name);
            sectionCard.setAttribute(Attribut.username, user.username);
            sectionCard.setAttribute(Attribut.profile, user.profile);
            sectionCard.setAttribute(Attribut.image, user.image);
            sectionCard.setAttribute(Attribut.image2, user.image2);
            sectionCard.setAttribute(Attribut.image3, user.image3);
            sectionCard.setAttribute(Attribut.image4, user.image4);
            sectionCard.setAttribute(Attribut.date, user.date);
            this.CardS.push(sectionCard);
        });
        dataSidebar.forEach((user) => {
            const sectionBar = this.ownerDocument.createElement("my-sidebar");
            sectionBar.setAttribute(Attribu.name, user.name);
            this.SideB.push(sectionBar);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `<link rel="stylesheet" href="./index.css">`;
            this.shadowRoot.innerHTML += `<h1>About</h1>`;
            this.shadowRoot.innerHTML += `<my-search></my-search>`;
            this.shadowRoot.innerHTML += `<a href="index.html"><img src="./fliplogo.png" alt=""></a>`;
            this.shadowRoot.innerHTML += `<button>Post</button>`;
            const aboutSection = this.ownerDocument.createElement("section");
            aboutSection.className = "aboutSection";
            this.AboutS.forEach((ab) => {
                aboutSection.appendChild(ab);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(aboutSection);
        }
        const sectionCard = this.ownerDocument.createElement("section");
        sectionCard.className = "cardSection";
        this.CardS.forEach((ab) => {
            sectionCard.appendChild(ab);
        });
        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(sectionCard);
        const sectionBar = this.ownerDocument.createElement("section");
        sectionBar.className = "BarSection";
        this.SideB.forEach((ab) => {
            sectionBar.appendChild(ab);
        });
        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(sectionBar);
    }
}
customElements.define("app-container", AppContainer);
