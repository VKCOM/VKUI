import React, { createRef, HTMLAttributes, Component, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import PopoutRoot from '../PopoutRoot/PopoutRoot';

export interface SplitLayoutProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasPlatform {
  popout?: ReactNode;
  modal?: ReactNode;
  header?: ReactNode;
}

class SplitLayout extends Component<SplitLayoutProps> {
  render() {
    const { popout, modal, header, children, className, platform, ...restProps } = this.props;
    const _class = getClassName('SplitLayout', platform);
    const innerClass = classNames('SplitLayout__inner', className, {
      'SplitLayout__inner--header': !!header,
    });

    return <PopoutRoot className={_class} popout={popout} modal={modal}>
      {header}
      <div {...restProps} className={innerClass}>
        {children}
      </div>
    </PopoutRoot>;
  }
}

export default withPlatform(SplitLayout);

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  animate?: boolean;
  spaced?: boolean;
}

export interface SplitContextProps {
  colRef: React.RefObject<HTMLDivElement>;
  animate: boolean;
}

export const SplitContext = React.createContext<SplitContextProps>({
  colRef: null,
  animate: true,
});

export class SplitCol extends Component<ColProps> {
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
    const { children, width, maxWidth, minWidth, spaced, className, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        style={{
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
        }}
        ref={this.baseRef}
        className={classNames(className, 'SplitCol', { 'SplitCol--spaced': spaced })}
      >
        <SplitContext.Provider value={this.getContext()}>
          {children}
        </SplitContext.Provider>
      </div>
    );
  }
}

export class SplitFixedCol extends Component<ColProps> {
  render() {
    const { children, ...restProps } = this.props;

    return <SplitCol {...restProps} className="SplitCol--fixed">
      <div className="SplitCol__fixedInner">
        {children}
      </div>
    </SplitCol>;
  }
}
