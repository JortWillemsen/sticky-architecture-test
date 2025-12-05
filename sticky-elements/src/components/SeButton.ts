import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("se-button")
export class SeButton extends LitElement {
  static styles = css`
    button {
      background-color: var(--board-primary, "#000");
      border-radius: var(--board-border-radius, 0px);
      height: 50px;
      cursor: pointer;
      color: white;
      border: none;
    }
  `;

  @property({ type: Boolean })
  clicked = false;

  @property({ type: String })
  text = "Hello World";

  render() {
    return html`<button>${this.text}</button>`;
  }
}
