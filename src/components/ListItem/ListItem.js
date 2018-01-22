import './ListItem.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { platform, IOS, ANDROID } from '../../lib/platform';

let osname = platform();

const baseClassNames = getClassName('ListItem');

export default class ListItem extends Component {

  constructor (props) {
    super(props);

    this.controled = props.selectable && props.hasOwnProperty('checked') && props.onChange;

    if (!this.controled) {
      this.state = {
        checked: props.initialChecked
      };
    }
  }

  static propTypes = {
    icon: PropTypes.node,
    indicator: PropTypes.string,
    asideContent: PropTypes.node,
    expandable: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
    avatar: PropTypes.node,

    selectable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    initialChecked: PropTypes.bool
  };

  static defaultProps = {
    icon: null,
    indicator: '',
    asideContent: '',
    expandable: false,
    children: '',
    selectable: false,
    initialChecked: false
  };

  onChange = (e) => {
    if (this.controled) {
      this.props.onChange(e);
    } else {
      this.setState({ checked: !this.state.checked });
    }
  };

  emptyClickHandler () {}

  render () {
    const { icon, indicator, asideContent, expandable, onClick, children, value, name, selectable, avatar } = this.props;
    const modifiers = {
      'ListItem--expandable': expandable
    };
    const nativeProps = removeObjectKeys(this.props, [
      'icon',
      'indicator',
      'asideContent',
      'expandable',
      'value',
      'name',
      'selectable',
      'checked',
      'initialChecked',
      'onChange',
      'onClick'
    ]);

    return (
      <li className={classnames(baseClassNames, modifiers)} {...nativeProps}>
        <Tappable component={selectable ? 'label' : 'div'} className="ListItem__in" onClick={selectable ? this.emptyClickHandler : onClick}>
          {selectable &&
            <input
              type="checkbox"
              className="ListItem__checkbox"
              name={name}
              checked={this.controled ? this.props.checked : this.state.checked}
              value={value}
              onChange={this.onChange}
            />
          }
          <div className="ListItem__before">
            {selectable && osname === IOS && <div className="ListItem__checkbox-marker" />}
            {icon && <div className="ListItem__icon">{icon}</div>}
            {avatar && <div className="ListItem__avatar">{avatar}</div>}
          </div>
          <div className="ListItem__main">
            {children}
          </div>
          <div className="ListItem__indicator">{indicator}</div>
          <div className="ListItem__aside">
            {asideContent}
            {selectable && osname === ANDROID && <div className="ListItem__checkbox-marker" />}
          </div>
        </Tappable>
      </li>
    );
  }
}
