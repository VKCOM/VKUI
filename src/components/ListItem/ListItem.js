import './ListItem.css';

import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';
import TappableWrapper from '../TappableWrapper/TappableWrapper';

const baseClassNames = getClassName('ListItem');

export default class ListItem extends Component {
  static propTypes = {
    icon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
    indicator: PropTypes.string,
    asideContent: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
    expandable: PropTypes.bool,
    indented: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func
  };
  static defaultProps = {
    icon: null,
    indicator: '',
    asideContent: '',
    expandable: false,
    indented: false,
    children: ''
  };
  render () {
    const { icon, indicator, asideContent, expandable, indented, onClick, children } = this.props;
    const modifiers = {
      'ListItem--expandable': expandable,
      'ListItem--indented': indented
    };
    const nativeProps = removeObjectKeys(this.props, [
      'icon',
      'indicator',
      'asideContent',
      'expandable',
      'indented',
      'onClick'
    ]);

    return (
      <li className={classnames(baseClassNames, modifiers)} {...nativeProps}>
        <TappableWrapper component="div" className="ListItem__in" onClick={onClick}>
          <div className="ListItem__icon">
            {icon && <div className="ListItem__icon-in">{icon}</div>}
          </div>
          <div className="ListItem__main">
            {children}
          </div>
          <div className="ListItem__indicator">{indicator}</div>
          <div className="ListItem__aside">
            {asideContent}
          </div>
        </TappableWrapper>
      </li>
    );
  }
}
