import styles from '@/assets/main.styles.scss'

class MyComponent extends HTMLElement {
  private templateEl: HTMLTemplateElement
  private shadow: ShadowRoot

  constructor() {
    super()

    this.templateEl = document.createElement('template')
    this.templateEl.innerHTML = /*html*/ `<h1>hey!</h1>`
    this.shadow = this.attachShadow({ mode: 'open' })

    const styleEl = document.createElement('style')
    styleEl.textContent = styles

    this.shadow.appendChild(styleEl)
    this.shadow.appendChild(this.templateEl.content.cloneNode(true))
  }
}

window.customElements.define('my-component', MyComponent)
