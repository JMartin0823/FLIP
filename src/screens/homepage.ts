import dataCard from "../mocks/data";
import dataSidebar from "../mocks/data2";
import dataAbout from "../mocks/data3";
import data4 from "../mocks/data4";

import "./components/index";
import About, { Attribute } from "../components/about/about";
import Card, { Attribut } from "../components/card/card";
import Sidebar, { Attribu } from "../components/sidebar/sidebar";

class AppHomePage extends HTMLElement {
    AboutS: About[] = [];
    CardS: Card[] = [];
    SideB: Sidebar[] = [];

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

                dataSidebar.forEach((user:any) => {
                const sectionBar = this.ownerDocument.createElement(
                    "my-sidebar"
                    ) as Sidebar;
                    sectionBar.setAttribute(Attribu.name, user.name);
                    this.SideB.push(sectionBar);
                });
        }

        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML += `<link rel="stylesheet" href="./homepage.css">`;
                this.shadowRoot.innerHTML += `<h1>About</h1>`;
                this.shadowRoot.innerHTML += `<my-search></my-search>`;
                this.shadowRoot.innerHTML += `<my-bottom></my-bottom>`;
                this.shadowRoot.innerHTML += `<a href="index.html"><img src="./img/fliplogo.png" alt=""></a>`;
                this.shadowRoot.innerHTML += `<button>Post</button>`;

                const aboutSection=this.ownerDocument.createElement("section")
                aboutSection.className="aboutSection"
                this.AboutS.forEach((ab) => {
                   aboutSection.appendChild(ab);
                  });
                  this.shadowRoot?.appendChild(aboutSection)
                }

                const sectionCard=this.ownerDocument.createElement("section")
                sectionCard.className="cardSection"
                this.CardS.forEach((ab) => {
                   sectionCard.appendChild(ab);
                  });
                  this.shadowRoot?.appendChild(sectionCard)

                  const sectionBar=this.ownerDocument.createElement("section")
                  sectionBar.className="BarSection"
                  this.SideB.forEach((ab) => {
                     sectionBar.appendChild(ab);
                    });
                    this.shadowRoot?.appendChild(sectionBar)

                  }
                }

    customElements.define("app-homepage", AppHomePage);

