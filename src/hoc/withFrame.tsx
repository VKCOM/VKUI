import React, { Component, ComponentType } from 'react';
import { any } from 'prop-types';

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
          window={this.context.window || window}
          document={this.context.document || document}
          {...this.props}
        >{this.props.children}</Cmp>
      );
    }
  };
}
