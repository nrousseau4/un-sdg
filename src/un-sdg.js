import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.title = '';
    this.goal = '1';
    this.label = '';
    this.height = '254px';
    this.width = '254px';
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: String },
      label: { type: String },
      height: { type: String },
      width: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
      img {
        height: var(--img-height, 254px);
        width: var(--img-width, 254px);
      }
    `];
  }

  getSvgImg(goal) {
    switch (goal) {
      case 1: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal1", import.meta.url).svg;
      case 2: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal2", import.meta.url).svg;
      case 3: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal3", import.meta.url).svg;
      case 4: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal4", import.meta.url).svg;
      case 5: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal5", import.meta.url).svg;
      case 6: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal6", import.meta.url).svg;
      case 7: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal7", import.meta.url).svg;
      case 8: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal8", import.meta.url).svg;
      case 9: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal9", import.meta.url).svg;
      case 10: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal10", import.meta.url).svg;
      case 11: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal11", import.meta.url).svg;
      case 12: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal12", import.meta.url).svg;
      case 13: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal13", import.meta.url).svg;
      case 14: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal14", import.meta.url).svg;
      case 15: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal15", import.meta.url).svg;
      case 16: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal16", import.meta.url).svg;
      case 17: return new url("/Users/nickrousseau/Documents/git/un-sdg/sdg/goal17", import.meta.url).svg;
    }
  }

  render() {
    const svgImg = this.getSvgImg(this.goal)
    const imgSize = `--img-width: ${this.width}; --img-height: ${this.height};`;

    return html`
    <div class="wrapper">
      <div>${this.title}</div>
      <img style=${imgSize} src="${svgImg}">
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);