import React, { Component, ComponentType } from 'react';
import { any } from 'prop-types';
import { canUseDOM } from '../lib/dom';

export type FrameProps = {
  window?: Window;
  document?: Document;
};

/**
 * Прокидывает window и document из react-frame-component в пропы
 */
export function withFrame<Props>(Cmp: ComponentType<Props & FrameProps>): ComponentType<Props> {
  return class WithFrame extends Component<Props> {
    static contextTypes = {
      window: any,
      document: any,
    };

    render() {
      return (
        <Cmp
          window={this.context.window || canUseDOM && window}
          document={this.context.document || canUseDOM && document}
          {...this.props}
        >{this.props.children}</Cmp>
      );
    }
  };
}
