import './ListItem.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
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
        checked: props.hasOwnProperty('defaultChecked') ? props.defaultChecked : props.initialChecked
      };
    }
  }

  static propTypes = {
    before: PropTypes.node,
    indicator: PropTypes.node,
    asideContent: PropTypes.node,
    expandable: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
    multiline: PropTypes.bool,
    description: PropTypes.node,
    className: PropTypes.string,

    selectable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,

    /**
     * @deprecated since v1.4.3 Use defaultChecked prop instead
     */
    initialChecked: PropTypes.bool
  };

  static defaultProps = {
    before: null,
    indicator: '',
    asideContent: '',
    expandable: false,
    children: '',
    selectable: false,
    initialChecked: false,
    defaultChecked: false,
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
    const {
      before,
      indicator,
      asideContent,
      expandable,
      onClick,
      children,
      description,
      value,
      name,
      checked,
      defaultChecked,
      initialChecked,
      selectable,
      multiline,
      onChange,
      className,
      ...restProps
    } = this.props;
    const modifiers = {
      'ListItem--expandable': expandable,
      'ListItem--multiline': multiline || description
    };

    return (
      <li className={classnames(baseClassNames, modifiers, className)} {...restProps}>
        <Tappable component={selectable ? 'label' : 'div'} className="ListItem__in" onClick={selectable ? this.emptyClickHandler : onClick}>
          {selectable &&
            <input
              type="checkbox"
              className="ListItem__checkbox"
              name={name}
              checked={this.controled ? checked : this.state.checked}
              value={value}
              onChange={this.onChange}
            />
          }
          <div className="ListItem__before">
            {selectable && osname === IOS && <div className="ListItem__checkbox-marker" />}
            {before && <div className="ListItem__icon">{before}</div>}
          </div>
          <div className="ListItem__main">
            {children}
            {description &&
            <div className="ListItem__description">
              {description}
            </div>
            }
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
