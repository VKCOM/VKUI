import React, { HTMLAttributes, Component, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import PopoutRoot from '../PopoutRoot/PopoutRoot';

export interface SplitLayoutProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasPlatform {
  popout?: ReactNode;
  modal?: ReactNode;
};

class SplitLayout extends Component<SplitLayoutProps> {
  render() {
    const { children, className, platform, ...restProps } = this.props;
    const _class = getClassName('SplitLayout', platform);
    const innerClass = classNames('SplitLayout__inner', className);
    const { popout, modal } = this.props;

    return <PopoutRoot className={_class} popout={popout} modal={modal}>
      <div {...restProps} className={innerClass}>
        {children}
      </div>
    </PopoutRoot>;
  }
}

export default withPlatform(SplitLayout);

interface ColProps extends HTMLAttributes<HTMLDivElement>, HasChildren {
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  className?: string;
}

export class SplitCol extends Component<ColProps> {
  render() {
    const { children, width, maxWidth, minWidth, ...rest } = this.props;

    return <div style={{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
    }} {...rest} className="SplitLayout__col">
      {children}
    </div>;
  }
}

interface FixedColProps extends ColProps {
  fixedClassName?: string;
}

export class SplitFixedCol extends Component<FixedColProps> {
  render() {
    const { children, width, maxWidth, minWidth, ...rest } = this.props;

    return <div style={{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
    }} {...rest} className="SplitLayout__colFixedWrap">
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
