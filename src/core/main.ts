export default class Main {
  constructor(targetEl: HTMLElement) {
    const targetDOM = targetEl.shadowRoot?.getElementById('wrapper')
    targetDOM!.innerHTML = 'Content from Main Class'
  }
}
