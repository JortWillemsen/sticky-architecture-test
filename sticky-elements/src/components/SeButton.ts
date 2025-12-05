import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("se-button")
export class SeButton extends LitElement {
  @property({ type: Boolean })
  clicked = false;

  @property({ type: String })
  text = "Hello World";

  render() {
    return html`<button>${this.text}</button>`;
  }
}
