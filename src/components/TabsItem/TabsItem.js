import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Tappable, {ACTIVE_EFFECT_DELAY} from '../Tappable/Tappable';
import './TabsItem.css';
import classnames from '../../lib/classnames';
import {IOS, platform} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('TabsItem');

export default class TabsItem extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    selected: PropTypes.bool,
    className: PropTypes.string,
    theme: osname === IOS ? PropTypes.oneOf(['white', 'gray']) : PropTypes.oneOf(['white'])
  };

  static defaultProps = {
    selected: false
  };

  render () {
    const { onClick, children, selected, className, theme } = this.props;

    return (
      <Tappable
        className={classnames(baseClassName, {
          'TabsItem--selected': selected,
          [`TabsItem--${theme}`]: true
        }, className)}
        onClick={onClick}
        activeEffectDelay={osname === IOS ? 0 : ACTIVE_EFFECT_DELAY}
      >
        {children}
      </Tappable>
    );
  }
}
