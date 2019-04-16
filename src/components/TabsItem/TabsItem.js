import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Tappable, {ACTIVE_EFFECT_DELAY} from '../Tappable/Tappable';

import classNames from '../../lib/classNames';
import {IOS, platform} from '../../lib/platform';
import Counter from '../Counter/Counter';

const osname = platform();
const baseClassName = getClassName('TabsItem');

export default class TabsItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
    className: PropTypes.string,
    counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    selected: false
  };

  render () {
    const { children, selected, className, counter, ...restProps } = this.props;

    return (
      <Tappable
        {...restProps}
        className={classNames(baseClassName, { 'TabsItem--selected': selected }, className)}
        activeEffectDelay={osname === IOS ? 0 : ACTIVE_EFFECT_DELAY}
      >
        <span className="TabsItem__in">{children}</span>
        {counter && <Counter>{counter}</Counter>}
      </Tappable>
    );
  }
}
