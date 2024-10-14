import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

// list of all goals and colors
const goalData = [
  {
    name: 'No Poverty',
    color: '#e5243b',
    image: new URL('../lib/svgs/goal-1.svg', import.meta.url).href,
  },
  { name: 'Zero Hunger', color: '#dda63a' },
  { name: 'Good Health and Well-being', color: '#4c9f38' },
  { name: 'Quality Education', color: '#c5192d' },
  { name: 'Gender Equality', color: '#ff3a21' },
  { name: 'Clean Water and Sanitation', color: '#26bde2' },
  { name: 'Affordable and Clean Energy', color: '#fcc30b' },
  { name: 'Decent Work and Economic Growth', color: '#a21942' },
  { name: 'Industry, Innovation and Infrastructure', color: '#fd6925' },
  { name: 'Reduced Inequalities', color: '#dd1367' },
  { name: 'Sustainable Cities and Communities', color: '#fd9d24' },
  { name: 'Responsible Consumption and Production', color: '#bf8b2e' },
  { name: 'Climate Action', color: '#3f7e44' },
  { name: 'Life Below Water', color: '#0a97d9' },
  { name: 'Life on Land', color: '#56c02b' },
  { name: 'Peace, Justice and Strong Institutions', color: '#00689d' },
  { name: 'Partnerships for the Goals', color: '#19486a' },
];

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  // setting default values for variables
  constructor() {
    super();
    this.goal = '1';
    this.label = '';
    this.alt = '';
    this.source = '';
    this.colorOnly = false;
    this.height = '254px';
    this.width = '254px';
  }

  // establishing variables
  static get properties() {
    return {
      title: { type: String },
      goal: { type: String },
      label: { type: String },
      alt: { type: String },
      source: { type: String },
      colorOnly: { type: Boolean, attribute: 'color-only' },
      height: { type: String },
      width: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`

      /* styles applied to whole page */
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
      }

      /* creating and setting default values for image height and width based off constraints */
      img {
        height: var(--img-height, 254px);
        width: var(--img-width, 254px);
      }
      
      /* styling for when colorOnly is true */
      .color-only { 
        width: 100%;
        height: 100%;
      }
    `];
  }

  // if the goal has changed, update the image and color
  updated(changedProperties) {
    if (changedProperties.has('goal')) {
      this.updateGoalImage();
      this.getColor();
    }
  }

  // looks at what goal is set to and sets the correct image and alt text accordingly
  updateGoalImage() {
    if(this.goal === 'circle') {
      this.source = new URL('../lib/svgs/circle.png', import.meta.url).href;
      this.alt = 'Sustainable Development Goals Circle';
    } 
    else if(this.goal === 'all') {
      this.source = new URL('../lib/svgs/all.png', import.meta.url).href;
      this.alt = 'All Sustainable Development Goals';
    }
    else {
      const goalNumber = parseInt(this.goal);
      this.source = new URL(`../lib/svgs/goal-${goalNumber}.svg`, import.meta.url).href;
      this.alt = `Goal ${goalNumber}: ${goalData[goalNumber - 1].name}`;
    }
  }

  // if the un-sdg tag is set to colorOnly, get the color for that goal
  getColor() {
    if (this.colorOnly === 'true') {
      const goalNumber = parseInt(this.goal);
      color = goalData[goalNumber - 1].color;
    }
  }

  render() {

    // allows user to edit image height and width in html file
    const imgSize = `--img-width: ${this.width}; --img-height: ${this.height};`;
    // html constructor
    return html`
      <img style=${imgSize}
        src="${this.source}" 
        alt="${this.label || this.alt}" 
        fetchpriority="low" 
        loading="lazy"
      />
    `;
  }

  // haxProperties integration via file reference
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);