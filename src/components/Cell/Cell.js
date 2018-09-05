import './Cell.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { platform, IOS, ANDROID } from '../../lib/platform';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

const osname = platform();
const baseClassNames = getClassName('Cell');

export default class Cell extends Component {
  static propTypes = {
    before: PropTypes.node,
    indicator: PropTypes.node,
    asideContent: PropTypes.node,
    expandable: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
    multiline: PropTypes.bool,
    description: PropTypes.node,
    getRootRef: PropTypes.func,
    /**
     * Контейнер для произвольного содержимого под `description`. Рисуется только если передать `size="l"`.
     */
    bottomContent: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * Размер влияет на выравнивание блоков по вертикали, виду сепаратора (iOS) и возможности вставлять `bottomContent`.
     */
    size: PropTypes.oneOf(['m', 'l']),

    selectable: PropTypes.bool,

    removable: PropTypes.bool,
    onRemove: PropTypes.func,
    /**
     * iOS only
     */
    removePlaceholder: PropTypes.node,

    href: PropTypes.string
  };

  static defaultProps = {
    before: null,
    indicator: '',
    asideContent: '',
    bottomContent: null,
    expandable: false,
    children: '',
    selectable: false,
    multiline: false,
    removable: false,
    size: 'm',
    removePlaceholder: 'Удалить'
  };

  static contextTypes = {
    document: PropTypes.any
  };

  state = {
    isRemoveActivated: false,
    removeOffset: 0
  };

  get document () { return this.context.document || document; }

  /**
   * предотвращает двойное срабатывание в случае с input
   * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
   * @param e
   */
  onClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
      e.stopPropagation();
    } else {
      this.props.onClick && this.props.onClick(e);
    }
  };

  activateRemove = () => {
    this.setState({ isRemoveActivated: true });
    this.document.addEventListener('click', this.deactivateRemove);
  };

  deactivateRemove = () => {
    this.setState({ isRemoveActivated: false, removeOffset: 0 });
    this.document.removeEventListener('click', this.deactivateRemove);
  };

  onRemoveClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    this.props.onRemove && this.props.onRemove(e, this.rootEl);
  };

  componentWillUnmount () {
    this.document.removeEventListener('click', this.deactivateRemove);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
      this.setState({ removeOffset: this.removeButton.offsetWidth });
    }
  }

  getRemoveRef = el => this.removeButton = el;

  getRootRef = el => {
    this.rootEl = el;
    this.props.getRootRef && this.props.getRootRef(el);
  };

  render () {
    const {
      before,
      indicator,
      asideContent,
      expandable,
      onClick,
      children,
      getRootRef,
      description,
      selectable,
      multiline,
      className,
      onRemove,
      removable,
      removePlaceholder,
      href,
      size,
      bottomContent,
      ...restProps
    } = this.props;

    const rootProps = selectable ? {} : restProps;
    const inputProps = selectable ? restProps : {};
    const linkProps = href ? restProps : {};

    return (
      <div
        {...rootProps}
        onClick={href ? null : this.onClick}
        className={classnames(baseClassNames, {
          'Cell--expandable': expandable,
          'Cell--multiline': multiline,
          [`Cell--${size}`]: size,
          'Cell--removing': this.state.removing
        }, className)}
        ref={this.getRootRef}
      >
        <Tappable
          {...linkProps}
          onClick={href ? this.onClick : null}
          component={selectable ? 'label' : href ? 'a' : 'div'}
          className="Cell__in"
          href={href}
          disabled={!selectable && !onClick && !href}
          style={removable ? { transform: `translateX(-${this.state.removeOffset}px)` } : null}
        >
          {selectable && <input {...inputProps} type="checkbox" className="Cell__checkbox" />}
          <div className="Cell__before">
            {selectable && osname === IOS && <div className="Cell__checkbox-marker"><Icon16Done /></div>}
            {removable && osname === IOS && <div className="Cell__remove-marker" onClick={this.activateRemove}/>}
            {before && <div className="Cell__before-in">{before}</div>}
          </div>
          <div className="Cell__main">
            <div className="Cell__children">{children}</div>
            {description && <div className="Cell__description">{description}</div>}
            {size === 'l' && bottomContent && <div className="Cell__bottom">{bottomContent}</div>}
          </div>
          <div className="Cell__indicator">{indicator}</div>
          <div className="Cell__aside">
            {asideContent}
            {selectable && osname === ANDROID && <div className="Cell__checkbox-marker"><Icon16Done /></div>}
            {removable && osname === ANDROID &&
            <div className="Cell__remove-marker" onClick={this.onRemoveClick}><Icon24Cancel /></div>
            }
            {osname === IOS && expandable && <Icon24Chevron className="Cell__chevron"/>}
          </div>
        </Tappable>
        {removable && osname === IOS &&
        <div
          ref={this.getRemoveRef}
          className="Cell__remove"
          onClick={this.onRemoveClick}
          style={removable ? { transform: `translateX(-${this.state.removeOffset}px)` } : null}
        >
          <span className="Cell__remove-in">{removePlaceholder}</span>
        </div>
        }
      </div>
    );
  }
}
