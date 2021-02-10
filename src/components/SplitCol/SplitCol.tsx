import React, { Component, createRef, HTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';

export interface SplitColContextProps {
  colRef: React.RefObject<HTMLDivElement>;
  animate: boolean;
}

export const SplitColContext = React.createContext<SplitColContextProps>({
  colRef: null,
  animate: true,
});

interface SplitColProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  /**
   * Если false, то переходы между Panel происходят без анимации
   */
  animate?: boolean;
  /**
   * Если true, то добавляются боковые отступы фиксированной величины
   */
  spaced?: boolean;
  fixed?: boolean;
}

export class SplitCol extends Component<SplitColProps> {
  static defaultProps = {
    animate: false,
  };

  baseRef: React.RefObject<HTMLDivElement> = createRef();

  getContext() {
    return {
      colRef: this.baseRef,
      animate: this.props.animate,
    };
  }

  render() {
    const { children, width, maxWidth, minWidth, spaced, className, animate, fixed, style, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        style={{
          ...style,
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
        }}
        ref={this.baseRef}
        className={classNames(className, 'SplitCol', {
          'SplitCol--spaced': spaced,
          'SplitCol--fixed': fixed,
        })}
      >
        <SplitColContext.Provider value={this.getContext()}>
          {fixed ? <div className="SplitCol__fixedInner">{children}</div> : children}
        </SplitColContext.Provider>
      </div>
    );
  }
}
