import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import './FixedTabs.css';
import FixedLayout from '../FixedLayout/FixedLayout';
import Tabs from '../Tabs/Tabs';
import {IOS, platform} from '../../lib/platform';
import classnames from '../../lib/classnames';

const osname = platform();
const baseClassName = getClassName('FixedTabs');

export default class FixedTabs extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    vertical: PropTypes.oneOf(['top', 'bottom']),
    style: PropTypes.object,
    theme: osname === IOS ? PropTypes.oneOf(['white', 'gray']) : PropTypes.oneOf(['white']),
    background: osname === IOS ? PropTypes.oneOf(['transparent', 'gray', 'white']) : PropTypes.oneOf(['blue'])
  };

  static defaultProps = {
    background: osname === IOS ? 'gray' : 'blue',
    theme: osname === IOS ? 'gray' : 'white',
    vertical: 'top'
  };

  render () {
    return (
      <FixedLayout vertical={this.props.vertical} className={classnames(baseClassName, {
        [`FixedTabs--${this.props.background}`]: true
      }, this.props.className)} style={this.props.style}>
        <Tabs theme={this.props.theme}>
          {this.props.children}
        </Tabs>
      </FixedLayout>
    );
  }
}
