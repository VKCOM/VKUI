import React, { ReactElement, ReactNode, Component, Fragment } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import ReactDOM from 'react-dom';
import { OldRef } from '../../types';
import { canUseDOM } from '../../lib/dom';

interface TooltipPortalProps extends Partial<TooltipProps> {
  target?: HTMLElement;
}

interface TooltipPortalState {
  x: number;
  y: number;
}

interface TooltipPortalContextType {
  document: Requireable<{}>;
  panel: Requireable<string>;
}

type GetBoundingTargetRect = () => {
  x: number;
  y: number;
  width: number;
  height: number;
};

const isDOMTypeElement = (element: ReactElement) => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const baseClassName = getClassName('Tooltip');

class TooltipPortal extends Component<TooltipPortalProps, TooltipPortalState> {
  constructor(props: TooltipPortalProps) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };

    this.fixedPortal = false;

    const { target } = props;
    const closestFixed = target.closest<HTMLElement>('.FixedLayout');
    const closestHeader = target.closest<HTMLElement>('.PanelHeader__in');
    const closestPanel = target.closest<HTMLElement>('.Panel__in');

    if (closestFixed || closestHeader) {
      this.fixedPortal = true;
    }

    this.portalTarget = closestFixed || closestHeader || closestPanel;
  }

  static contextTypes: TooltipPortalContextType = {
    document: PropTypes.object,
    panel: PropTypes.string,
  };

  get document() {
    return this.context.document || document;
  }

  fixedPortal: boolean;

  el: HTMLDivElement;

  portalTarget: HTMLElement;

  getBoundingTargetRect: GetBoundingTargetRect = () => {
    const { target } = this.props;
    const targetBounds = target.getBoundingClientRect();
    const portalBounds = this.portalTarget.getBoundingClientRect();

    return {
      width: targetBounds.width,
      height: targetBounds.height,
      x: targetBounds.left - portalBounds.left,
      y: targetBounds.top - portalBounds.top,
    };
  };

  componentWillUnmount() {
    this.document.removeEventListener('click', this.props.onClose);
  }

  componentDidMount() {
    const { offsetY, offsetX, alignX, alignY } = this.props;
    const coords = this.getBoundingTargetRect();

    this.document.addEventListener('click', this.props.onClose);

    this.setState({
      x: coords.x + offsetX + (alignX === 'right' ? coords.width - this.el.offsetWidth : 0),
      y: coords.y + (alignY === 'top' ? -this.el.offsetHeight - offsetY : coords.height + offsetY),
    });
  }

  getRef: OldRef<HTMLDivElement> = (el: HTMLDivElement) => this.el = el;

  render() {
    const { header, text, alignX, alignY, cornerOffset } = this.props;

    return ReactDOM.createPortal(
      <div className={
        classNames(
          baseClassName,
          `Tooltip--x-${alignX}`,
          `Tooltip--y-${alignY}`,
          {
            'Tooltip--fixed': this.fixedPortal,
          },
        )}>
        <div className="Tooltip__container" style={{ top: this.state.y, left: this.state.x }} ref={this.getRef}>
          <div className="Tooltip__corner" style={{ [alignX]: 20 + cornerOffset }} />
          <div className="Tooltip__content">
            {header && <div className="Tooltip__title">{header}</div>}
            {text && <div className="Tooltip__text">{text}</div>}
          </div>
        </div>
      </div>, this.portalTarget);
  }
}

export interface TooltipProps {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: ReactNode;
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown: boolean;
  /**
   * Текст тултипа.
   */
  text?: ReactNode;
  /**
   * Заголовок тултипа.
   */
  header?: ReactNode;
  /**
   * Положение по горизонтали (прижатие к левому или правому краю `children`).
   */
  alignX?: 'left' | 'right';
  /**
   * Положение по вертикали (расположение над или под `children`).
   */
  alignY?: 'top' | 'bottom';
  /**
   * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
   */
  offsetX?: number;
  /**
   * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
   */
  offsetY?: number;
  /**
   * Сдвиг треугольника (относительно ширины тултипа).
   */
  cornerOffset?: number;
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose(): void;
}

export interface TooltipState {
  ready: boolean;
}

export default class Tooltip extends Component<TooltipProps, TooltipState> {
  static defaultProps: Partial<TooltipProps> = {
    offsetX: 0,
    offsetY: 15,
    alignX: 'left',
    alignY: 'bottom',
    cornerOffset: 0,
    isShown: true,
  };

  state: TooltipState = {
    ready: false,
  };

  targetEl: HTMLElement;

  componentDidMount() {
    if (canUseDOM) {
      this.targetEl && this.setState({ ready: true });
    }
  }

  getRef: OldRef<HTMLDivElement> = (el: HTMLDivElement) => this.targetEl = el;

  render() {
    const { children, isShown, ...portalProps } = this.props;

    const child = React.cloneElement(children as ReactElement, {
      [isDOMTypeElement(children as ReactElement) ? 'ref' : 'getRootRef']: this.getRef,
    });

    if (!isShown || !this.state.ready) {
      return child;
    }

    return (
      <Fragment>
        {child}
        <TooltipPortal {...portalProps} target={this.targetEl} />
      </Fragment>
    );
  }
}
