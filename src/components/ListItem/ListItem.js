import './ListItem.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { platform, IOS, ANDROID } from '../../lib/platform';
import Icon24Chevron from '../../../dist/icons/24/chevron';
import Icon16Done from '../../../dist/icons/16/done';
import Icon24Cancel from '../../../dist/icons/24/cancel';

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
    selectable: PropTypes.bool,
    removable: PropTypes.bool,
    onRemove: PropTypes.func,
    removePlaceholder: PropTypes.node
  };

  static defaultProps = {
    before: null,
    indicator: '',
    asideContent: '',
    expandable: false,
    children: '',
    selectable: false,
    multiline: false,
    removable: false,
    removePlaceholder: 'Удалить'
  };

  static contextTypes = {
    document: PropTypes.any
  };

  state = {
    isRemoveActivated: false,
    height: null,
    removeOffset: 0
  };

  get document () { return this.context.document || document; }

  onSelectableClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
      e.stopPropagation();
    } else {
      this.props.onClick && this.props.onClick(e);
    }
  };

  activateRemove = () => {
    this.setState({ isRemoveActivated: true, height: this.rootEl.offsetHeight });
    this.document.addEventListener('click', this.deactivateRemove);
  };

  deactivateRemove = () => {
    this.setState({ isRemoveActivated: false, removeOffset: 0, height: null });
    this.document.removeEventListener('click', this.deactivateRemove);
  };

  onRemoveClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    if (!this.state.removing) {
      this.rootEl.addEventListener('transitionend', this.onRemoveFinish);
      this.setState({ removing: true, height: 0 });
    }
  };

  onRemoveFinish = () => {
    this.rootEl.removeEventListener('transitionend', this.onRemoveFinish);
    this.props.onRemove();
  };

  componentWillUnmount () {
    this.rootEl.removeEventListener('transitionend', this.onRemoveFinish);
    this.document.removeEventListener('click', this.deactivateRemove);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
      this.setState({ removeOffset: this.removeButton.offsetWidth });
    }
  }

  getRemoveRef = el => this.removeButton = el;

  getRootRef = el => this.rootEl = el;

  emptyClickHandler = () => {};

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
      onRemove,
      removable,
      removePlaceholder,
      ...restProps
    } = this.props;

    const modifiers = {
      'ListItem--expandable': expandable,
      'ListItem--multiline': multiline || description,
      'ListItem--removing': this.state.removing
    };

    const rootProps = selectable ? {} : restProps;
    const inputProps = selectable ? restProps : {};

    return (
      <li
        className={classnames(baseClassNames, modifiers, className)}
        ref={this.getRootRef}
        style={{ height: this.state.height }}
        {...rootProps}
        onClick={selectable ? this.onSelectableClick : onClick}
      >
        <Tappable
          component={selectable ? 'label' : 'div'}
          className="ListItem__in"
          disabled={!selectable && !onClick}
          style={{ transform: `translateX(-${this.state.removeOffset}px)` }}
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
            {removable && osname === IOS && <div className="ListItem__remove-marker" onClick={this.activateRemove}/>}
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
            {removable && osname === ANDROID &&
              <div className="ListItem__remove-marker" onClick={onRemove}>
                <Icon24Cancel />
              </div>
            }
          </div>
          {osname === IOS && expandable && <Icon24Chevron className="ListItem__chevron"/>}
        </Tappable>
        {removable && osname === IOS &&
          <div
            ref={this.getRemoveRef}
            className="ListItem__remove"
            onClick={this.onRemoveClick}
            style={{ transform: `translateX(-${this.state.removeOffset}px)` }}
          >{removePlaceholder}</div>
        }
      </li>
    );
  }
}
