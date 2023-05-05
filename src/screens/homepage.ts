import dataCard from "../mocks/data";
import dataSidebar from "../mocks/data2";
import dataAbout from "../mocks/data3";
import data4 from "../mocks/data4";
import styles from "./homepage.css"
import About, { Attribute } from "../components/about/about";
import Card, { Attribut } from "../components/card/card";

class AppHomePage extends HTMLElement {
    AboutS: About[] = [];
    CardS: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        dataAbout.forEach((user:any) => {
            const aboutCard = this.ownerDocument.createElement(
                "my-about"
                ) as About;
                aboutCard.setAttribute(Attribute.name, user.name);
                aboutCard.setAttribute(Attribute.description, user.description);
                this.AboutS.push(aboutCard);
            });
            dataCard.forEach((user:any) => {
                const sectionCard = this.ownerDocument.createElement(
                    "my-card"
                    ) as Card;
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

        }

        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {

                this.shadowRoot.innerHTML += `<h1>About</h1>`;
                this.shadowRoot.innerHTML += `<my-search></my-search>`;
                this.shadowRoot.innerHTML += `<my-bottom></my-bottom>`;
                this.shadowRoot.innerHTML += `<a href="index.html"><img src="../../src/img/fliplogo.png" alt=""></a>`;
                this.shadowRoot.innerHTML += `<button>Post</button>`;

                const aboutSection=this.ownerDocument.createElement("section")
                aboutSection.className="aboutSection"
                this.AboutS.forEach((ab) => {
                   aboutSection.appendChild(ab);
                  });
                

                const sectionCard=this.ownerDocument.createElement("section")
                sectionCard.className="cardSection"
                this.CardS.forEach((ab) => {
                   sectionCard.appendChild(ab);
                  });

                  const sectionBar=this.ownerDocument.createElement("my-sidebar")

                  const sidebar=this.ownerDocument.createElement("my-sidebar")
                  sectionBar.className="BarSection"

                  sectionBar.appendChild(sidebar)


                const all=this.ownerDocument.createElement("section")
                all.className="all"
                all.appendChild(aboutSection)
                all.appendChild(sectionCard)
                all.appendChild(sectionBar)

                this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
        }
    }
}
    customElements.define("app-homepage", AppHomePage);

