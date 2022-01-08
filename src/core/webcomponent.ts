import styles from '@/assets/main.styles.scss'
import Main from './main'

class MyComponent extends HTMLElement {
  private templateEl: HTMLTemplateElement
  private shadow: ShadowRoot

  constructor() {
    super()

    this.templateEl = document.createElement('template')
    this.templateEl.innerHTML = /*html*/ `<div id="wrapper"></div>`
    this.shadow = this.attachShadow({ mode: 'open' })

    const styleEl = document.createElement('style')
    styleEl.textContent = styles

    this.shadow.appendChild(styleEl)
    this.shadow.appendChild(this.templateEl.content.cloneNode(true))

    //TODO: Fix implementation
    //@ts-ignore
    new Main(this.shadowRoot)
  }
}

window.customElements.define('my-component', MyComponent)
