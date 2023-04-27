// import styles from './card.css';
// import { loadCss } from '../../utils/styles';

export enum Attribut {
    "name" = "name",
    "username"= "username",
    "profile"= "profile",
    "image"= "image",
    "image2"= "image2",
    "image3"= "image3",
    "image4"= "image4",
    "date"= "date",
    "count"= "count",
}

class Card extends HTMLElement {
    name?: string;
    username?: string;
    profile?: string;
    image?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    date?: string;
    count?: number;
    
    static get observedAttributes() {
        const attrs: Record<Attribut, null> = {
            name: null,
            username: null,
            profile: null,
            image: null,
            image2: null,
            image3: null,
            image4: null,
            date: null,
            count: null,
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        // this.onButtonClicked = this.onButtonClicked.bind(this);
    }
    
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribut,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                case Attribut.count:
                this.count = newValue ? Number(newValue) : undefined;
                break;

                default:
                this[propName] = newValue;
                break;
                
            }
            
            this.render();
        }

        // mount(){
        //     this.render();
        //     this.addEventListeners();
        // }
        
        // addEventListeners(){
        //     this.shadowRoot.querySelector("button")
        //     .addEventListener("click", this.onButtonClicked);
        // }
        
        // onButtonClicked(){
        //     const Value = Number(this.getAttribute("count")) || 0;
        //     this.setAttribute("count", Value + 1);
        // }
        
        render() {
            // loadCss(this, styles)
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./card.css">
                <section class="all">
            <section>
              <section class="top">
             
                <img class="pp" src="${this.profile}" alt="" height ="60" width="60">
               
                <h4>${this.name}</h4><h6> ${this.username}</h6> <p>${this.date}</p>
              
            
                <section >
                 
                </section>

              </section>
              <section class="tweet-img-wrap">
                <img src="${this.image}" alt="" class="tweet-img">
              </section>
              <label class="pepe">
              <button><img src="${this.image2}" height ="30" width="30"</button>
                <button><img src="${this.image3}" height ="30" width="30"</button>
                <p>${this.count || 0}</p>
                <button><img src="${this.image4}" height ="30" width="30"</button>
              </label>
              </section>
                `;
            }
        }
    }

    customElements.define("my-card", Card);
    export default Card;