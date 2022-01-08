export default class Main {
  constructor(targetEl: HTMLElement) {
    const targetDOM = targetEl?.querySelector('#wrapper')
    targetDOM!.innerHTML = /*html*/ `
      <h1>WebComponent</h1>
    `
  }
}
