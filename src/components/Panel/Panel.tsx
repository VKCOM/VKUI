import React, { Component, HTMLAttributes } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';
import Separator from '../Separator/Separator';
import { HasInsets, HasPlatform, HasRootRef, OldRef } from '../../types';

export interface PanelProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasInsets, HasRootRef<HTMLDivElement> {
  id: string;
  separator?: boolean;
  centered?: boolean;
}

export interface PanelChildContext {
  panel: Requireable<string>;
}

export interface PanelContext {
  hasTabbar: Requireable<boolean>;
}

class Panel extends Component<PanelProps> {
  static childContextTypes: PanelChildContext = {
    panel: PropTypes.string,
  };

  static defaultProps: Partial<PanelProps> = {
    children: '',
    centered: false,
    separator: true,
  };

  static contextTypes: PanelContext = {
    hasTabbar: PropTypes.bool,
  };

  getChildContext() {
    return {
      panel: this.props.id,
    };
  }

  container: HTMLDivElement;

  getRef: OldRef<HTMLDivElement> = (container: HTMLDivElement) => {
    this.container = container;

    const getRootRef = this.props.getRootRef;
    if (getRootRef) {
      if (typeof getRootRef === 'function') {
        getRootRef(container);
      } else {
        getRootRef.current = container;
      }
    }
  };

  render() {
    const { className, centered, children, insets, platform, separator, getRootRef, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;

    return (
      <div
        {...restProps}
        ref={this.getRef}
        className={classNames(getClassName('Panel', platform), className, {
          'Panel--centered': centered,
        })}
      >
        <Touch className="Panel__in" style={{
          paddingBottom: isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null,
        }}>
          <div className="Panel__in-before" />
          {separator && <Separator className="Panel__separator" />}
          {centered ? <div className="Panel__centered">{children}</div> : children}
          <div className="Panel__in-after" />
        </Touch>
      </div>
    );
  }
}

export default withPlatform(withInsets(Panel));
