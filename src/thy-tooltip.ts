import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('thy-tooltip')
export class ThyTooltip extends LitElement {

  @property({ type: Boolean, reflect: true })
  opened = false

  @property({ type: String, reflect: true })
  text = ""

  render() {
    return html`
      <div class="tooltip" @mouseover=${this._toggleTooltip} @mouseout=${this._toggleTooltip}>
        <slot></slot>
        <div class="tooltiptext">${this.text}</div>
      </div>
    `
  }

  private _toggleTooltip(evt: MouseEvent) {
    this.opened = !this.opened;
    console.log('open tooltip', evt);
  }

  static styles = css`
    .tooltip {
      position: relative;
      display:inline-block;
    }

  .tooltip .tooltiptext {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 50%;

      transform: translateX(-50%) translateY(-100%);
      
      max-width: 200px;
      background-color: #666;
      color: #FFF;
      font-size: 12px;
      border:1px solid #333;
      border-radius: 3px;
      padding: 5px;
      visibility: hidden;
      font-family: courier;
  }

    :host([opened]) .tooltiptext {
      visibility: visible;
    }
    `
}

declare global {
  interface HTMLElementTagNameMap {
    'thy-tooltip': ThyTooltip
  }
}
