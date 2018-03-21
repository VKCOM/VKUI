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
    /**
     * @deprecated since v1.3.4 Use before prop instead
     */
    icon: PropTypes.node,
    before: PropTypes.node,
    indicator: PropTypes.node,
    asideContent: PropTypes.node,
    expandable: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,

    selectable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    initialChecked: PropTypes.bool,
    multiline: PropTypes.bool
  };

  static defaultProps = {
    icon: null,
    before: null,
    indicator: '',
    asideContent: '',
    expandable: false,
    children: '',
    selectable: false,
    initialChecked: false,
    multiline: false
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
    const { before, icon, indicator, asideContent, expandable, onClick, children, value, name, selectable, multiline } = this.props;
    const modifiers = {
      'ListItem--expandable': expandable,
      'ListItem--multiline': multiline
    };
    const nativeProps = removeObjectKeys(this.props, [
      'icon',
      'before',
      'indicator',
      'asideContent',
      'expandable',
      'value',
      'name',
      'selectable',
      'checked',
      'initialChecked',
      'onChange',
      'onClick',
      'multiline'
    ]);

    let beforeContent = before || icon;

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
            {beforeContent && <div className="ListItem__icon">{beforeContent}</div>}
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
