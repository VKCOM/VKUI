import React, { Component, HTMLAttributes } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';
import { HasInsets, HasPlatform, HasRootRef, OldRef } from '../../types';
import { PanelContext, PanelContextProps } from './PanelContext';

export interface PanelProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasInsets, HasRootRef<HTMLDivElement> {
  id: string;
  separator?: boolean;
  centered?: boolean;
}

export interface PanelContext {
  hasTabbar: Requireable<boolean>;
}

class Panel extends Component<PanelProps> {
  static defaultProps: Partial<PanelProps> = {
    children: '',
    centered: false,
    /**
     * @deprecated будет удалено в 4-й версии. Сепаратор теперь устанавливается в PanelHeader
     */
    separator: true,
  };

  static contextTypes: PanelContext = {
    hasTabbar: PropTypes.bool,
  };

  getContext(): PanelContextProps {
    return {
      panel: this.props.id,
      separator: this.props.separator,
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
      <PanelContext.Provider value={this.getContext()}>
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
            {centered ? <div className="Panel__centered">{children}</div> : children}
            <div className="Panel__in-after" />
          </Touch>
        </div>
      </PanelContext.Provider>
    );
  }
}

export default withPlatform(withInsets(Panel));
