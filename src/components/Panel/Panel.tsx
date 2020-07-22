import React, { Component, HTMLAttributes, RefCallback } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';
import { HasInsets, HasPlatform, HasRootRef } from '../../types';
import { PanelContext, PanelContextProps } from './PanelContext';
import { IOS } from '../../lib/platform';
import { withScrolls } from '../../hoc/withScrolls';
import { PanelScrolls } from '../../lib/ScrollContext';

export interface PanelProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasInsets, HasRootRef<HTMLDivElement> {
  id: string;
  separator?: boolean;
  centered?: boolean;
  setScroll(payload: PanelScrolls): void;
  scrolls: PanelScrolls;
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

  componentDidMount(): void {
    const { id, setScroll, scrolls } = this.props;
    const { scrollHeight, clientHeight } = this.container;
    const maxScroll = Math.abs(scrollHeight - clientHeight);

    if (maxScroll < scrolls[id]) {
      setScroll({ [id]: maxScroll });
    }
  }

  getContext(): PanelContextProps {
    return {
      panel: this.props.id,
      separator: this.props.separator,
    };
  }

  container: HTMLDivElement;

  getRef: RefCallback<HTMLDivElement> = (container) => {
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
            {platform === IOS && <div className="Panel__fade" />}
            <div className="Panel__in-before" />
            {centered ? <div className="Panel__centered">{children}</div> : children}
            <div className="Panel__in-after" />
          </Touch>
        </div>
      </PanelContext.Provider>
    );
  }
}

export default withScrolls(withPlatform(withInsets(Panel)));
