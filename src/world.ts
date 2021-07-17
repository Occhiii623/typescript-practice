export default class World {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      console.log('testメッセージ');

      console.log('husky+pre-commitの練習');
      elem.innerText = this.message;
    }
  }
}
