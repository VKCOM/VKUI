import React, { Component, ReactNode, MouseEvent, Fragment, InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import IconButton from '../IconButton/IconButton';
import Touch, { TouchEvent } from '../Touch/Touch';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import Icon24ReorderIos from '@vkontakte/icons/dist/24/reorder_ios';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import withPlatform from '../../hoc/withPlatform';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';
import { HasPlatform } from '../../types';
import { setRef } from '../../lib/utils';

export interface CellProps extends SimpleCellProps, HasPlatform, Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'checked' | 'defaultChecked'> {
  /**
   * В режиме перетаскивания ячейка перестает быть кликабельной, то есть при клике переданный onClick вызываться не будет
   */
  draggable?: boolean;
  /**
   * В режиме перетаскивания ячейка перестает быть кликабельной, то есть при клике переданный onClick вызываться не будет
   */
  removable?: boolean;
  selectable?: boolean;
  /**
   * В режиме selectable реагирует на входящие значения пропса cheсked, как зависящий напрямую от входящего значения
   */
  checked?: boolean;
  /**
   * В режиме selectable реагирует на входящие значения пропса defaultChecked как неконтролируемый компонент
   */
  defaultChecked?: boolean;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?(e: MouseEvent, rootEl: HTMLElement): void;
  /**
   * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
   */
  removePlaceholder?: ReactNode;
  /**
   * Коллбэк срабатывает при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onDragFinish?({ from, to }: { from: number; to: number }): void;
}

export interface CellState {
  isRemoveActivated: boolean;
  removeOffset: number;
  dragging: boolean;
  checked?: boolean;
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
    removePlaceholder: 'Удалить',
  };

  static contextTypes = {
    document: PropTypes.any,
  };

  get document() {return this.context.document || document;}

  private readonly onRemoveActivateClick = (e: MouseEvent) => {
    e.nativeEvent.stopPropagation();
    e.preventDefault();
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
    setRef(element, this.props.getRootRef);
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

  private readonly onDragClick = (e: MouseEvent) => {
    e.nativeEvent.stopPropagation();
    e.preventDefault();
  };

  render() {
    let {
      onRemove,
      removePlaceholder,
      onDragFinish,
      className,
      style,
      getRootRef,
      platform,
      before,
      after,
      disabled,
      removable,
      draggable,
      selectable,
      Component,
      onChange,
      name,
      checked,
      defaultChecked,
      ...restProps
    } = this.props;

    return (
      <div
        className={classNames(getClassName('Cell', platform), {
          'Cell--dragging': this.state.dragging,
          'Cell--removable': removable,
        }, className)}
        style={style}
        ref={this.getRootRef}
      >
        <div
          className="Cell__in"
          style={platform === IOS && removable ? { transform: `translateX(-${this.state.removeOffset}px)` } : null}
        >
          <SimpleCell
            {...restProps}
            disabled={draggable || removable || disabled}
            Component={selectable ? 'label' : Component}
            before={
              <Fragment>
                {platform === IOS && removable && <div className="Cell__remove-marker" onClick={this.onRemoveActivateClick} />}
                {selectable &&
                  <Fragment>
                    <input type="checkbox" className="Cell__checkbox" name={name} onChange={onChange} defaultChecked={defaultChecked} checked={checked} />
                    <div className="Cell__marker"><Icon16Done /></div>
                  </Fragment>
                }
                {(platform === ANDROID || platform === VKCOM) && draggable &&
                <Touch
                  onStart={this.onDragStart}
                  onMoveY={this.onDragMove}
                  onEnd={this.onDragEnd}
                  onClick={this.onDragClick}
                  className="Cell__dragger"
                ><Icon24Reorder /></Touch>
                }
                {before}
              </Fragment>
            }
            after={
              <Fragment>
                {(platform === ANDROID || platform === VKCOM) && removable &&
                <div className="Cell__remove-marker">
                  <IconButton icon={<Icon24Cancel />} onClick={this.onRemoveClick} />
                </div>
                }
                {platform === IOS && draggable &&
                <Touch
                  className="Cell__dragger"
                  onStart={this.onDragStart}
                  onMoveY={this.onDragMove}
                  onEnd={this.onDragEnd}
                  onClick={this.onDragClick}
                ><Icon24ReorderIos /></Touch>
                }
                {after}
              </Fragment>
            }
          />
        </div>
        {platform === IOS && removable &&
        <div
          ref={this.getRemoveRef}
          className="Cell__remove"
          onClick={this.onRemoveClick}
          style={{ transform: `translateX(-${this.state.removeOffset}px)` }}
        >
          <span className="Cell__remove-in">{removePlaceholder}</span>
        </div>
        }
      </div>
    );
  }
}

export default withPlatform(Cell);
