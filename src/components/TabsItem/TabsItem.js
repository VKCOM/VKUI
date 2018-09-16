import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Tappable, {ACTIVE_EFFECT_DELAY} from '../Tappable/Tappable';

import classnames from '../../lib/classnames';
import {IOS, platform} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('TabsItem');

export default class TabsItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    selected: false
  };

  render () {
    const { children, selected, className, ...restProps } = this.props;

    return (
      <Tappable
        {...restProps}
        className={classnames(baseClassName, { 'TabsItem--selected': selected }, className)}
        activeEffectDelay={osname === IOS ? 0 : ACTIVE_EFFECT_DELAY}
      >
        <span className="TabsItem__in">{children}</span>
      </Tappable>
    );
  }
}
