import React, { createRef, HTMLAttributes, Component, ReactNode, ReactElement } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import PopoutRoot from '../PopoutRoot/PopoutRoot';

export interface SplitLayoutProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasPlatform {
  popout?: ReactNode;
  modal?: ReactNode;
  header?: ReactNode;
};

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

interface ColProps extends HTMLAttributes<HTMLDivElement>, HasChildren {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  animate?: boolean;
  spaced?: boolean;
  headerRight?: ReactElement;
}

export interface SplitContextProps {
  colRef: React.RefObject<HTMLDivElement>;
  animate: boolean;
  headerRight?: ReactElement;
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
      headerRight: this.props.headerRight,
    };
  }

  render() {
    const { children, width, maxWidth, minWidth, spaced } = this.props;

    return <div style={{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
      margin: spaced ? '0 16px' : null,
    }} ref={this.baseRef} className="SplitLayout__col">
      <SplitContext.Provider value={this.getContext()}>
        {children}
      </SplitContext.Provider>
    </div>;
  }
}

export class SplitFixedCol extends Component<ColProps> {
  render() {
    const { children, width, maxWidth, minWidth, spaced } = this.props;

    return <div style={{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
      margin: spaced ? '0 16px' : null,
    }} className="SplitLayout__colFixedWrap">
      <div style={{
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
      }} className="SplitLayout__colFixedInner">
        {children}
      </div>
    </div>;
  }
}
