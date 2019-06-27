import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';

import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS } from '../../lib/platform';
import { HasChildren, HasClassName } from '../../types/props';

const baseClassName = getClassName('TabsItem');

export interface TabsItemProps extends HasChildren, HasClassName {
  after?: React.ReactNode;
  selected?: boolean;
}

export default class TabsItem extends React.Component<TabsItemProps> {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
    className: PropTypes.string,
    after: PropTypes.node
  };

  static defaultProps = {
    selected: false
  };

  render () {
    const { children, selected, className, after, ...restProps } = this.props;

    return (
      <Tappable
        {...restProps}
        className={classNames(baseClassName, { 'TabsItem--selected': selected }, className)}
        activeEffectDelay={IS_PLATFORM_IOS ? 0 : ACTIVE_EFFECT_DELAY}
      >
        <div className="TabsItem__in">{children}</div>
        {after && <div className="TabsItem__after">{after}</div>}
      </Tappable>
    );
  }
}
