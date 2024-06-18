import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

const TT_COLOR = css`#333`;
const TT_BG_COLOR = css`#FFF`;
const TT_BORDER = css`1px solid #333`;
const TT_BORDER_RADIUS = css`3px`;
const TT_SHADOW = css`2px 2px 5px rgba(0,0,0,0.3)`;
const TT_FONT_FAMILY = css`sans-serif`;
const TT_FONT_SIZE = css`12px`;
const TT_WIDTH = css`auto`;
const TT_PADDING = css`7px 5px 5px 5px`;
const TT_TRANSITION_DURATION_ON = css`0.5s`;
const TT_TRANSITION_DURATION_OFF = css`0.25s`;

@customElement('thy-tooltip')
export class ThyTooltip extends LitElement {

  @property({ type: Boolean, reflect: true })
  opened = false

  @property({ type: String, reflect: true })
  text = ""

  @property({ type: String, reflect: true })
  position = "top";

  @property({ type: Number, reflect: true })
  offset = 0;

  @property({ type: Number, reflect: true })
  arrowsize = 5;



  @state()
  public slotWidth: Number = 0;

  @state()
  public slotHeight: number = 0;

  render() {
    return html`
      <div class="tooltip" @mouseover=${this._toggleTooltip} @mouseout=${this._toggleTooltip}>
        <slot id="slot"></slot>
        <div class="tooltiptext ${this.position}">${this.text}</div>
      </div>
    `
  }

  firstUpdated() {
    const tt = this.shadowRoot?.querySelector(".tooltip") as HTMLDivElement
    const tt_text = this.shadowRoot?.querySelector(".tooltiptext") as HTMLDivElement;

    this.slotWidth = tt?.clientWidth;
    this.slotHeight = tt?.clientHeight;

    if (this.position === "bottom") {
      tt_text!.style.transform = `translate(-50%, calc(0% + ${this.slotHeight + this.arrowsize + this.offset}px))`;
    }
    if (this.position === "top") {
      tt_text!.style.transform = `translate(-50%, calc(-100% - ${this.arrowsize}px - ${this.offset}px))`;
    }
    if (this.position === "left") {
      tt_text!.style.transform = `translate(calc(-100% - ${this.arrowsize + this.offset}px), calc(-50% + ${this.slotHeight / 2}px))`;
    }
    if (this.position === "right") {
      tt_text!.style.transform = `translate(calc(0% + ${this.arrowsize + this.offset}px), calc(-50% + ${this.slotHeight / 2}px))`;
    }
    tt_text!.style.setProperty('--arrowBorderWidth',`${this.arrowsize}px`);
  }

  private _toggleTooltip() {
      this.opened = !this.opened;
  }

  static styles = css`
    .tooltip {
      position: relative;
      display: inline-block;
      line-height: 1;
    }

    .tooltip .tooltiptext {
      position: absolute;
      z-index: 999;
      top: 0;
      left: 50%;
      visibility: hidden;
      opacity: 0;
      transition: all var(--tt-transition-duration-off, ${TT_TRANSITION_DURATION_OFF});
      width: var(--tt-width, ${TT_WIDTH});
      color: var(--tt-color, ${TT_COLOR});
      background-color: var(--tt-bg-color, ${TT_BG_COLOR});
      box-shadow: var(--tt-shadow, ${TT_SHADOW});
      border: var(--tt-border, ${TT_BORDER});
      font-size: var(--tt-font-size, ${TT_FONT_SIZE});
      border-radius: var(--tt-border-radius, ${TT_BORDER_RADIUS});
      padding: var(--tt-padding, ${TT_PADDING});
      font-family: var(--tt-font-family, ${TT_FONT_FAMILY});
    }

    .tooltip .tooltiptext.top {
      transform-origin: bottom center;
      // transform: translate(-50%, -100%);
    }

    .tooltip .tooltiptext.bottom {
      transform-origin: top center;
      // transform: translate(-50%, 0));
    }

    .tooltip .tooltiptext.left {
      left: 0;
      transform-origin: center left;
      // transform: translate(-100%, -50%);
    }

    .tooltip .tooltiptext.right {
      left: 100%;
      transform-origin: center right;
      // transform: translate(0%, -50%);
    }

    .tooltip .tooltiptext.top::before {
      content: '';
      position: absolute;
      display: block;    
      width: 0px;        
      left: 50%;
      bottom: 0;
      border-color: transparent;
      border-style: solid;
      border-width: var(--arrowBorderWidth, 3px);
      border-bottom: 0;
      border-top-color: var(--tt-bg-color, ${TT_BG_COLOR});
      transform: translate(-50%, 100%);
    }

    .tooltip .tooltiptext.bottom::before {
      content: '';
      position: absolute;
      display: block;    
      width: 0px;        
      left: 50%;
      top: 0;
      border-color: transparent;
      border-style: solid;
      border-width: var(--arrowBorderWidth, 3px);
      border-top: 0;
      border-bottom-color: var(--tt-bg-color, ${TT_BG_COLOR});
      transform: translate(-50%, -100%);
    }

    .tooltip .tooltiptext.left::before {
      content: '';
      position: absolute;
      display: block;    
      width: 0px;        
      right: 0;
      top: 50%;
      border-color: transparent;
      border-style: solid;
      border-width: var(--arrowBorderWidth, 3px);
      border-right: 0;
      border-left-color: var(--tt-bg-color, ${TT_BG_COLOR});
      transform: translate(100%, -50%); 
    }

    .tooltip .tooltiptext.right::before {
      content: '';
      position: absolute;
      display: block;    
      width: 0px;        
      left: 0;
      top: 50%;
      border-color: transparent;
      border-style: solid;
      border-width: var(--arrowBorderWidth, 3px);
      border-left: 0;
      border-right-color: var(--tt-bg-color, ${TT_BG_COLOR});
      transform: translate(-100%, -50%);
    }

    :host([opened]) .tooltiptext {
      transition: all var(--tt-transition-duration-on, ${TT_TRANSITION_DURATION_ON});
      opacity: 1;
      visibility: visible;
      line-heihgt: 1;
    }
    `
}

declare global {
  interface HTMLElementTagNameMap {
    'thy-tooltip': ThyTooltip
  }
}
