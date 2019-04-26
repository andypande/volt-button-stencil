import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'torq-button',
  styleUrl: 'my-component.css',
  shadow: true
})
export class TorqButton {
  /**
   * Four button choices are: primary, callToAction, outline, and text
   */
  @Prop() buttontype: 'primary' | 'callToAction' | 'outline' | 'text' = "primary";

  render() {
    return (
      <button class={this.buttontype}>
        <slot/>
      </button>
    );
  }
}
