import React from 'react';
import {platform, IOS} from '../../lib/platform';
import PropTypes from 'prop-types';

const osname = platform();

export default class HeaderButton extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
  };

  render () {
    const { children, style, ...restProps } = this.props;
    return (
      <div style={{ ...style, padding: osname === IOS ? 0 : 12 }} {...restProps}>
        {children}
      </div>
    );
  }
}
