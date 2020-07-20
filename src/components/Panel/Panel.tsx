import React, { Component, HTMLAttributes, RefCallback } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform, HasRootRef } from '../../types';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { PanelContext, PanelContextProps } from './PanelContext';
import { IOS } from '../../lib/platform';
import { setRef } from '../../lib/utils';

export interface PanelProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasRootRef<HTMLDivElement>, AdaptivityProps {
  id: string;
  separator?: boolean;
  centered?: boolean;
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

  getContext(): PanelContextProps {
    return {
      panel: this.props.id,
      separator: this.props.separator,
    };
  }

  container: HTMLDivElement;

  getRef: RefCallback<HTMLDivElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  render() {
    const { className, centered, children, platform, separator, getRootRef, sizeX, ...restProps } = this.props;

    return (
      <PanelContext.Provider value={this.getContext()}>
        <div
          {...restProps}
          ref={this.getRef}
          className={classNames(getClassName('Panel', platform), className, `Panel--${sizeX}`, {
            'Panel--centered': centered,
            [`Panel--sizeX-${sizeX}`]: true,
          })}
        >
          <Touch className="Panel__in">
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

export default withAdaptivity(withPlatform(Panel), {
  sizeX: true,
});
