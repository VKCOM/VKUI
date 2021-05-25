import React, { FC, ReactElement, ReactNode, Component, Fragment, RefCallback, isValidElement, useState, cloneElement } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import ReactDOM from 'react-dom';
import { DOMProps, withDOM } from '../../lib/dom';
import Subhead from '../Typography/Subhead/Subhead';
import { tooltipContainerAttr } from './TooltipContainer';
import { useExternRef } from '../../hooks/useExternRef';

interface TooltipPortalProps extends Partial<TooltipProps> {
  target?: HTMLElement;
}

interface TooltipPortalState {
  x: number;
  y: number;
}

type GetBoundingTargetRect = () => {
  x: number;
  y: number;
  width: number;
  height: number;
};

const isDOMTypeElement = (element: ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const baseClassName = getClassName('Tooltip');

const TooltipPortal = withDOM<TooltipPortalProps>(
  class TooltipPortalClass extends Component<TooltipPortalProps & DOMProps, TooltipPortalState> {
    constructor(props: TooltipPortalProps) {
      super(props);

      this.state = {
        x: 0,
        y: 0,
      };

      const { target } = props;
      /* eslint-disable no-restricted-properties */
      this.fixedPortal = target.closest(`[${tooltipContainerAttr}=fixed]`) != null;
      this.portalTarget = target.closest(`[${tooltipContainerAttr}]`);
      /* eslint-enable no-restricted-properties */
    }

    get document() {
      return this.props.document;
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

    getRef: RefCallback<HTMLDivElement> = (el) => this.el = el;

    render() {
      const { header, text, alignX, alignY, cornerOffset, mode } = this.props;

      return ReactDOM.createPortal(
        <div vkuiClass={
          classNames(
            baseClassName,
            `Tooltip--x-${alignX}`,
            `Tooltip--y-${alignY}`,
            `Tooltip--${mode}`,
            {
              'Tooltip--fixed': this.fixedPortal,
            },
          )}>
          <div vkuiClass="Tooltip__container" style={{ top: this.state.y, left: this.state.x }} ref={this.getRef}>
            <div vkuiClass="Tooltip__corner" style={{ [alignX]: 20 + cornerOffset }} />
            <div vkuiClass="Tooltip__content">
              {header && <Subhead weight="semibold" vkuiClass="Tooltip__title">{header}</Subhead>}
              {text && <Subhead weight="regular" vkuiClass="Tooltip__text">{text}</Subhead>}
            </div>
          </div>
        </div>, this.portalTarget);
    }
  },
);

export interface TooltipProps {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: ReactElement;
  mode?: 'accent' | 'light';
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown?: boolean;
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
  onClose?: () => void;
}

const Tooltip: FC<TooltipProps> = ({ children = null, isShown, ...portalProps }) => {
  const [target, setTarget] = useState<HTMLElement>();

  const childRef = isValidElement(children) && (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTarget, childRef);
  const child = isValidElement(children) ? cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

  return (
    <Fragment>
      {child}
      {isShown && target != null && <TooltipPortal {...portalProps} target={target} />}
    </Fragment>
  );
};

Tooltip.defaultProps = {
  offsetX: 0,
  offsetY: 15,
  alignX: 'left',
  alignY: 'bottom',
  cornerOffset: 0,
  isShown: true,
  mode: 'accent',
};

export default Tooltip;
