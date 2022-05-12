const template = document.createElement("template");
template.innerHTML = `
  <style>
   :host {
    cursor: pointer;
    z-index: 15;
    border-radius: 50px;
    transition: all 300ms;
    }
    
    .tag {
     position: relative;
     width: 100% ;
     display: flex;
     align-items: center;
     height: 100%;
     

    } 
    
    .tag-p {
      /*position: absolute;*/
      /*margin: 0;*/
      color: white;
      font-size: 12px;
      display: none;
      padding: 0 16px;
      /*opacity: 0.8;*/
      /*transform: translateY(-200%);*/
      transition: all;
      /*transition-timing-function: ease-in;*/
      transition-duration: 400ms;
      transition-delay: 400ms;
    }
   
  </style>
  <div class="tag" >
  <p class="tag-p">
   <slot></slot>
  </p>
  </div>
`;

class PeggTag extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.buyEvent = new CustomEvent("buy", {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {
        id: this.leftPos,
      },
    });
  }

  static get observedAttribute() {
    return ["topPos", "leftPos"];
  }

  get topPos() {
    return this.getAttribute("topPos");
  }

  set topPos(nV) {
    this.setAttribute("topPos", nV);
  }

  get leftPos() {
    return this.getAttribute("leftPos");
  }

  set leftPos(nV) {
    this.setAttribute("leftPos", nV);
  }

  get textInfo() {
    return this.shadowRoot.querySelector(".tag-p");
  }

  modeOpen() {
    this.style.width = "auto";
    this.style.height = "30px";
    this.style.borderRadius = "30px";
    this.style.backgroundColor = "black";
    this.style.opacity = "0.95";
    this.textInfo.style.display = "flex";
    this.textInfo.style.opacity = "1";
  }

  modeCollapse() {
    this.style.backgroundColor = "white";
    this.style.opacity = "1";
    this.style.width = "20px";
    this.style.height = "20px";
    this.style.borderRadius = "50px";
    this.textInfo.style.display = "none";
    this.textInfo.style.opacity = "0";
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", () => {
      if (this.style.width === "20px") {
        this.modeOpen();
      } else {
        this.dispatchEvent(this.buyEvent);
        this.modeCollapse();
      }
    });
  }

  render() {
    this.style.top = `${this.topPos}%`;
    this.style.left = `${this.leftPos}%`;
    this.style.position = "absolute";
    this.style.width = "20px";
    this.style.height = "20px";
    this.style.cursor = "pointer";
    this.style.backgroundColor = "white";
    // console.log(this.textInfo)
  }
}

// eslint-disable-next-line no-unused-expressions
window.customElements.get("pegg-tag") || window.customElements.define("pegg-tag", PeggTag);

export default PeggTag;
