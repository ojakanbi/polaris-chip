import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 16px 16px 0;
      }

      .link{ 
        font-weight:bold;
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px;
        text-decoration: none;
      }
      .link:focus,
      .link:hover,
      :host([active]) .link{
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      }

      /* .link:hover {
        background-color: #444;
        color: #fff;
        text-decoration: none;
      } */

    `;
  }

  constructor() {
    super();
    this.name = 'Football';
    this.link = 'https://www.psu.edu/'
  }

  render() {
    return html`<a class='link' href="${this.link}"> 
    <slot>${this.name}</slot>
  </a>`;
  }
}
