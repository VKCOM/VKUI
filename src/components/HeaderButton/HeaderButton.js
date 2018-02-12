import React from 'react';
import {platform, IOS} from '../../lib/platform';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './HeaderButton.css';

const baseClassName = getClassName('HeaderButton');

const osname = platform();

export default class HeaderButton extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
  };

  render () {
    const { children, style, className, ...restProps } = this.props;
    return (
      <Tappable className={classnames(baseClassName, className)} style={{ ...style, padding: osname === IOS ? 0 : 12 }} {...restProps}>
        {children}
      </Tappable>
    );
  }
}
