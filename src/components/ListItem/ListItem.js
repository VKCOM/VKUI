import './ListItem.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { platform, IOS, ANDROID } from '../../lib/platform';
import Icon24Chevron from '../../../dist/icons/24/chevron';
import Icon16Done from '../../../dist/icons/16/done';

let osname = platform();

const baseClassNames = getClassName('ListItem');

export default class ListItem extends Component {

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

    selectable: PropTypes.bool
  };

  static defaultProps = {
    before: null,
    indicator: '',
    asideContent: '',
    expandable: false,
    children: '',
    selectable: false,
    multiline: false
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
      selectable,
      multiline,
      className,
      ...restProps
    } = this.props;
    const modifiers = {
      'ListItem--expandable': expandable,
      'ListItem--multiline': multiline || description
    };

    const rootProps = selectable ? {} : restProps;
    const inputProps = selectable ? rootProps : {};

    return (
      <li className={classnames(baseClassNames, modifiers, className)} {...rootProps}>
        <Tappable
          component={selectable ? 'label' : 'div'}
          className="ListItem__in"
          onClick={selectable ? this.emptyClickHandler : onClick}
        >
          {selectable &&
            <input
              type="checkbox"
              className="ListItem__checkbox"
              {...inputProps}
            />
          }
          <div className="ListItem__before">
            {selectable && osname === IOS && <div className="ListItem__checkbox-marker"><Icon16Done /></div>}
            {before && <div className="ListItem__before-in">{before}</div>}
          </div>
          <div className="ListItem__main">
            {children}
            <div className="ListItem__description">{description}</div>
          </div>
          <div className="ListItem__indicator">{indicator}</div>
          <div className="ListItem__aside">
            {asideContent}
            {selectable && osname === ANDROID && <div className="ListItem__checkbox-marker"><Icon16Done /></div>}
          </div>
          {osname === IOS && expandable && <Icon24Chevron className="ListItem__chevron"/>}
        </Tappable>
      </li>
    );
  }
}
