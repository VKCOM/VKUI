import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import Touch from '../Touch/Touch';
import { platform, IOS, ANDROID } from '../../lib/platform';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import Icon24ReorderIos from '@vkontakte/icons/dist/24/reorder_ios';

const osname = platform();
const baseClassNames = getClassName('Cell');

export default class Cell extends Component {
  static propTypes = {
    /**
     * Контейнер для контента от `children`.
     */
    before: PropTypes.node,
    /**
     * Контейнер для текста справа от `children`.
     */
    indicator: PropTypes.node,
    /**
     * Контейнер для контента справа от `children` и `indicator`.
     */
    asideContent: PropTypes.node,
    /**
     * Выставляйте этот флаг, если клик по ячейке вызывает переход на другую панель. Флаг нужен для корректной
     * стилизации такой ячейки.
     */
    expandable: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
    /**
     * Добавляет возможность переноса содержимого `children` и `description`. Без этого флага текст будет уходить
     * в троеточие.
     */
    multiline: PropTypes.bool,
    /**
     * Контейнер для дополнительного содержимого под `children`.
     */
    description: PropTypes.node,
    getRootRef: PropTypes.func,
    /**
     * Контейнер для произвольного содержимого под `description`. Рисуется только если передать `size="l"`.
     */
    bottomContent: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * Размер влияет на выравнивание блоков по вертикали, вид сепаратора (iOS) и возможность вставлять `bottomContent`.
     */
    size: PropTypes.oneOf(['m', 'l']),
    /**
     * Флаг для перехода в режим ячеек-чекбоксов.
     * **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
     * **Важно:** этот режим несовместим с `draggable`. В случае истинности двух этих флагов, приоритет отдается
     * `draggable`.
     */
    selectable: PropTypes.bool,
    /**
     * Флаг для перехода в режим удаляемых ячеек. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
     */
    removable: PropTypes.bool,
    /**
     * Коллбэк срабатывает при клике на контрол удаления.
     */
    onRemove: PropTypes.func,
    /**
     * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
     */
    removePlaceholder: PropTypes.node,
    /**
     * Флаг для перехода в режим перетаскивания. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
     */
    draggable: PropTypes.bool,
    /**
     * Коллбэк срабатывает при завершении перетаскивания.
     * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
     * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
     * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
     */
    onDragFinish: PropTypes.func,
    /**
     * При передаче `href`, ячейка становится полноценной ссылкой. Поддерживаются все валидные для этого элемента
     * атрибуты (`target`, `rel` и т.д.).
     */
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
    removeOffset: 0,
    dragging: false
  };

  get document () { return this.context.document || document; }

  /**
   * предотвращает двойное срабатывание в случае с input
   * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
   * предотвращает клик в случае, когда включен режим removable
   * @param e
   */
  onClick = (e) => {
    const { removable, onClick } = this.props;
    if (e.target.tagName.toLowerCase() === 'input') {
      e.stopPropagation();
    } else if (removable) {
      return null;
    } else {
      onClick && onClick(e);
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

  onDragStart = () => {
    this.setState({ dragging: true });
    this.dragShift = 0;
    this.listEl = this.rootEl.closest('.List');
    this.listEl && this.listEl.classList.add('List--dragging');
    this.siblings = Array.prototype.slice.call(this.rootEl.parentElement.childNodes);
    this.dragStartIndex = this.siblings.indexOf(this.rootEl);
  };

  onDragMove = (e) => {
    e.originalEvent.preventDefault();
    this.rootEl.style.transform = `translateY(${e.shiftY}px)`;
    const rootGesture = this.rootEl.getBoundingClientRect();
    this.dragDirection = this.dragShift - e.shiftY < 0 ? 'down' : 'up';
    this.dragShift = e.shiftY;
    this.dragEndIndex = this.dragStartIndex;

    this.siblings.forEach((sibling, siblingIndex) => {
      const siblingGesture = sibling.getBoundingClientRect();
      if (this.dragStartIndex < siblingIndex) {
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
          if (this.dragDirection === 'down') sibling.style.transform = `translateY(-100%)`;
          this.dragEndIndex++;
        }
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 && this.dragDirection === 'up') {
          sibling.style.transform = `translateY(0)`;
        }
      } else if (this.dragStartIndex > siblingIndex) {
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
          if (this.dragDirection === 'up') sibling.style.transform = `translateY(100%)`;
          this.dragEndIndex--;
        }
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 && this.dragDirection === 'down') {
          sibling.style.transform = `translateY(0)`;
        }
      }
    });
  };

  onDragEnd = () => {
    this.setState({ dragging: false });
    this.listEl && this.listEl.classList.remove('List--dragging');
    this.props.onDragFinish && this.props.onDragFinish({ from: this.dragStartIndex, to: this.dragEndIndex });
    this.siblings.forEach(sibling => sibling.style.transform = null);
    delete this.dragShift;
    delete this.listEl;
    delete this.siblings;
    delete this.dragStartIndex;
    delete this.dragEndIndex;
    delete this.dragDirection;
  };

  render () {
    let {
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
      draggable,
      onDragFinish,
      href,
      size,
      bottomContent,
      ...restProps
    } = this.props;

    selectable = selectable && !draggable;

    const rootProps = selectable ? {} : restProps;
    const inputProps = selectable ? restProps : {};
    const linkProps = href ? restProps : {};

    return (
      <div
        {...rootProps}
        onClick={href || draggable ? null : this.onClick}
        className={classnames(baseClassNames, {
          'Cell--expandable': expandable,
          'Cell--multiline': multiline,
          [`Cell--${size}`]: size,
          'Cell--dragging': this.state.dragging,
          'Cell--draggable': draggable
        }, className)}
        ref={this.getRootRef}
      >
        <Tappable
          {...linkProps}
          onClick={href ? this.onClick : null}
          component={selectable ? 'label' : href ? 'a' : 'div'}
          className="Cell__in"
          href={href}
          disabled={(!selectable && !onClick && !href || removable || draggable)}
          style={removable ? { transform: `translateX(-${this.state.removeOffset}px)` } : null}
        >
          {selectable && <input {...inputProps} type="checkbox" className="Cell__checkbox" />}
          <div className="Cell__before">
            {selectable && osname === IOS && <div className="Cell__checkbox-marker"><Icon16Done /></div>}
            {removable && osname === IOS && <div className="Cell__remove-marker" onClick={this.activateRemove}/>}
            {osname === ANDROID && draggable &&
            <Touch
              onStart={this.onDragStart}
              onMoveY={this.onDragMove}
              onEnd={this.onDragEnd}
              className="Cell__dragger"
              getRootRef={this.getRootRef}
            ><Icon24Reorder/></Touch>
            }
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
            {osname === IOS && expandable && !draggable && <Icon24Chevron className="Cell__chevron"/>}
            {osname === IOS && draggable &&
            <Touch
              className="Cell__dragger"
              onStart={this.onDragStart}
              onMoveY={this.onDragMove}
              onEnd={this.onDragEnd}
              getRootRef={this.getRootRef}
            ><Icon24ReorderIos/></Touch>
            }
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
