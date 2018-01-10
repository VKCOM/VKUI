import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './Tabs.css';
import { platform, IOS } from '../../lib/platform';

const osname = platform();

const baseClassName = getClassName('Tabs');

export default class Tabs extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: osname === IOS ? PropTypes.oneOf(['white', 'gray']) : PropTypes.oneOf(['white'])
  };

  render () {
    const className = classnames(baseClassName, this.props.className);

    return (
      <div className={className}>
        {React.Children.map(this.props.children, Child => React.cloneElement(Child, {
          theme: this.props.theme
        }))}
      </div>
    );
  }
}
