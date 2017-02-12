import './List.css';

import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import TappableWrapper from '../TappableWrapper/TappableWrapper';

const osname = platform();

export class List extends Component {
  static propTypes = {
    style: PropTypes.object,
    indented: PropTypes.bool
  };
  static defaultProps = {
    style: {},
    indented: false
  };
  render() {
    const { style, indented } = this.props;
    const modifiers = {
      'List--android': osname === ANDROID,
      'List--ios': osname === IOS,
      'List--indented': indented
    };

    return (
      <ul className={classnames('List', modifiers)} style={{ style }}>
        {this.props.children}
      </ul>
    );
  }
}

export class ListItem extends Component {
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
  };
  static defaultProps = {
    icon: null,
    indicator: '',
    asideContent: '',
    expandable: false,
    indented: false
  };
  render() {
    const { icon, indicator, asideContent, expandable, indented, onClick, children } = this.props;
    const modifiers = {
      'ListItem--android': osname === ANDROID,
      'ListItem--ios': osname === IOS,
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
      <li className={classnames('ListItem', modifiers)} {...nativeProps}>
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
