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
import { HasPlatform, HasInsets } from '../../types/props';

export interface PanelProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasInsets {
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

  render() {
    const { className, centered, children, insets, platform, separator, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;

    return (
      <div {...restProps} className={classNames(getClassName('Panel', platform), className, {
        'Panel--centered': centered,
      })}>
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
