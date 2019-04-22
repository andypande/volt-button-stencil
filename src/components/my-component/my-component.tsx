import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'torq-button',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  container: HTMLElement;
  window: Window | any;
  document: Document | any;
  root:Element | any;
  _element: any;

init() {
    return Promise.resolve(this._init());
}

async componentWillLoad() {
    this.window = window;
    await this._init();
}
componentDidLoad() {
    console.log("torq-button loaded");

} 

async _init(): Promise<void> {
  // init some variables
  this.document = this.window.document;
  this.root = this.document.documentElement;

}
  /**
   * The text to show inside the button
   */
  @Prop() buttontext: string = "Button";
  /**
   * Four button choices are: primary, callToAction, outline, and text
   */
  @Prop() buttontype: string = "primary";


  private getText(): string {
    return this.buttontext;
  }
  private getClass(): string {
    return this.buttontype;
  }

  render() {
    return <button type="button" class={this.getClass()}>{this.getText()}</button>;
  }
}
