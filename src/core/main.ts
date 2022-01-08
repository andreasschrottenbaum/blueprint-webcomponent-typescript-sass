export default class Main {
  constructor(targetEl: HTMLElement) {
    const targetDOM = targetEl?.querySelector('#wrapper')
    targetDOM!.innerHTML = 'Content from Main Class'
  }
}
