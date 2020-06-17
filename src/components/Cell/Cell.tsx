import React, { Component, InputHTMLAttributes, ReactNode, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import Touch, { TouchEvent } from '../Touch/Touch';
import { ANDROID, IOS } from '../../lib/platform';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import Icon24ReorderIos from '@vkontakte/icons/dist/24/reorder_ios';
import { HasChildren, HasPlatform, HasRootRef } from '../../types';
import withPlatform from '../../hoc/withPlatform';

type ProxyInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLElement>, 'size'>;

export interface CellProps extends ProxyInputHTMLAttributes, HasChildren, HasRootRef<HTMLElement>, HasPlatform {
  /**
   * Контейнер для контента от `children`.
   */
  before?: ReactNode;
  /**
   * Контейнер для текста справа от `children`.
   */
  indicator?: ReactNode;
  /**
   * Контейнер для контента справа от `children` и `indicator`.
   */
  asideContent?: ReactNode;
  /**
   * Выставляйте этот флаг, если клик по ячейке вызывает переход на другую панель. Флаг нужен для корректной
   * стилизации такой ячейки.
   */
  expandable?: boolean;
  /**
   * Добавляет возможность переноса содержимого `children` и `description`. Без этого флага текст будет уходить
   * в троеточие.
   */
  multiline?: boolean;
  /**
   * Контейнер для дополнительного содержимого под `children`.
   */
  description?: ReactNode;
  /**
   * Контейнер для произвольного содержимого под `description`. Рисуется только если передать `size="l"`.
   */
  bottomContent?: ReactNode;
  /**
   * Размер влияет на выравнивание блоков по вертикали, вид сепаратора (iOS) и возможность вставлять `bottomContent`.
   */
  size?: 'm' | 'l';
  /**
   * Флаг для перехода в режим ячеек-чекбоксов.
   * **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
   * **Важно:** этот режим несовместим с `draggable`. В случае истинности двух этих флагов, приоритет отдается
   * `draggable`.
   */
  selectable?: boolean;
  /**
   * Флаг для перехода в режим удаляемых ячеек. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
   */
  removable?: boolean;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?(e: MouseEvent, rootEl: HTMLElement): void;
  /**
   * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
   */
  removePlaceholder?: ReactNode;
  /**
   * Флаг для перехода в режим перетаскивания. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
   */
  draggable?: boolean;
  /**
   * Коллбэк срабатывает при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onDragFinish?({ from, to }: { from: number; to: number }): void;
  href?: string;
  target?: string;
}

export interface CellState {
  isRemoveActivated: boolean;
  removeOffset: number;
  dragging: boolean;
}

class Cell extends Component<CellProps, CellState> {
  constructor(props: CellProps) {
    super(props);

    this.state = {
      isRemoveActivated: false,
      removeOffset: 0,
      dragging: false,
    };
  }

  rootEl: HTMLElement;
  removeButton: HTMLDivElement;

  static defaultProps = {
    indicator: '',
    asideContent: '',
    expandable: false,
    children: '',
    selectable: false,
    multiline: false,
    removable: false,
    size: 'm',
    removePlaceholder: 'Удалить',
  };

  static contextTypes = {
    document: PropTypes.any,
  };

  get document() {return this.context.document || document;}

  /*
   * предотвращает двойное срабатывание в случае с input
   * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
   * предотвращает клик в случае, когда включен режим removable
   */
  private readonly onClick = (e: MouseEvent<HTMLElement>): void => {
    const { removable, onClick } = this.props;
    const target = e.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'input') {
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

  private readonly onRemoveClick = (e: MouseEvent) => {
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    this.props.onRemove && this.props.onRemove(e, this.rootEl);
  };

  componentWillUnmount() {
    this.document.removeEventListener('click', this.deactivateRemove);
  }

  componentDidUpdate(_prevProps: CellProps, prevState: CellState) {
    if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
      this.setState({ removeOffset: this.removeButton.offsetWidth });
    }
  }

  getRemoveRef = (el: HTMLDivElement) => this.removeButton = el;

  getRootRef = (element: HTMLElement) => {
    this.rootEl = element;

    const getRootRef = this.props.getRootRef;
    if (getRootRef) {
      if (typeof getRootRef === 'function') {
        getRootRef(element);
      } else {
        getRootRef.current = element;
      }
    }
  };

  dragShift: number;
  listEl: HTMLElement;
  siblings: HTMLElement[];
  dragStartIndex: number;
  dragEndIndex: number;
  dragDirection: 'down' | 'up';

  onDragStart = () => {
    this.setState({ dragging: true });
    this.dragShift = 0;
    this.listEl = this.rootEl.closest('.List');
    this.listEl && this.listEl.classList.add('List--dragging');
    this.siblings = Array.prototype.slice.call(this.rootEl.parentElement.childNodes);
    this.dragStartIndex = this.siblings.indexOf(this.rootEl);
  };

  onDragMove = (e: TouchEvent) => {
    e.originalEvent.preventDefault();
    if (this.state.removeOffset) {
      return;
    }

    this.rootEl.style.transform = `translateY(${e.shiftY}px)`;
    const rootGesture = this.rootEl.getBoundingClientRect();
    this.dragDirection = this.dragShift - e.shiftY < 0 ? 'down' : 'up';
    this.dragShift = e.shiftY;
    this.dragEndIndex = this.dragStartIndex;

    this.siblings.forEach((sibling, siblingIndex) => {
      const siblingGesture = sibling.getBoundingClientRect();
      if (this.dragStartIndex < siblingIndex) {
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
          if (this.dragDirection === 'down') {
            sibling.style.transform = 'translateY(-100%)';
          }
          this.dragEndIndex++;
        }
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 && this.dragDirection === 'up') {
          sibling.style.transform = 'translateY(0)';
        }
      } else if (this.dragStartIndex > siblingIndex) {
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
          if (this.dragDirection === 'up') {
            sibling.style.transform = 'translateY(100%)';
          }
          this.dragEndIndex--;
        }
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 && this.dragDirection === 'down') {
          sibling.style.transform = 'translateY(0)';
        }
      }
    });
  };

  onDragEnd = () => {
    this.setState({ dragging: false });
    this.listEl && this.listEl.classList.remove('List--dragging');
    this.props.onDragFinish && this.props.onDragFinish({ from: this.dragStartIndex, to: this.dragEndIndex });
    this.siblings.forEach((sibling) => sibling.style.transform = null);
    delete this.dragShift;
    delete this.listEl;
    delete this.siblings;
    delete this.dragStartIndex;
    delete this.dragEndIndex;
    delete this.dragDirection;
  };

  render() {
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
      platform,
      onChange,
      ...restProps
    } = this.props;

    selectable = selectable && !draggable;

    const rootProps = selectable ? {} : restProps;
    const inputProps = selectable ? { ...restProps, onChange } : {};
    const linkProps = href ? restProps : {};
    const IS_PLATFORM_ANDROID = platform === ANDROID;
    const IS_PLATFORM_IOS = platform === IOS;

    return (
      <div
        {...rootProps}
        onClick={href || draggable ? null : this.onClick}
        className={classNames(getClassName('Cell', platform), {
          'Cell--expandable': expandable,
          'Cell--multiline': multiline,
          'Cell--dragging': this.state.dragging,
          'Cell--draggable': draggable,
        }, `Cell--${size}`, className)}
        ref={this.getRootRef}
      >
        <Tappable
          {...linkProps}
          onClick={href ? this.onClick : null}
          Component={selectable ? 'label' : href ? 'a' : 'div'}
          className="Cell__in"
          href={href}
          disabled={(!selectable && !onClick && !href || removable || draggable)}
          style={removable ? { transform: `translateX(-${this.state.removeOffset}px)` } : null}
        >
          {selectable && <input {...inputProps} type="checkbox" className="Cell__checkbox" />}
          <div className="Cell__before">
            {selectable && IS_PLATFORM_IOS && <div className="Cell__checkbox-marker"><Icon16Done /></div>}
            {removable && IS_PLATFORM_IOS && <div className="Cell__remove-marker" onClick={this.activateRemove} />}
            {IS_PLATFORM_ANDROID && draggable &&
            <Touch
              onStart={this.onDragStart}
              onMoveY={this.onDragMove}
              onEnd={this.onDragEnd}
              className="Cell__dragger"
            ><Icon24Reorder /></Touch>
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
            {selectable && IS_PLATFORM_ANDROID && <div className="Cell__checkbox-marker"><Icon16Done /></div>}
            {removable && IS_PLATFORM_ANDROID &&
            <div className="Cell__remove-marker" onClick={this.onRemoveClick}><Icon24Cancel /></div>
            }
            {IS_PLATFORM_IOS && expandable && !draggable && <Icon24Chevron className="Cell__chevron" />}
            {IS_PLATFORM_IOS && draggable &&
            <Touch
              className="Cell__dragger"
              onStart={this.onDragStart}
              onMoveY={this.onDragMove}
              onEnd={this.onDragEnd}
            ><Icon24ReorderIos /></Touch>
            }
          </div>
        </Tappable>
        {removable && IS_PLATFORM_IOS &&
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

export default withPlatform(Cell);
