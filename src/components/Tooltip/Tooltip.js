import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import ReactDOM from 'react-dom';

const isElement = element => React.isValidElement(element);
const isDOMTypeElement = element => isElement(element) && typeof element.type === 'string';
const baseClassName = getClassName('Tooltip');

class TooltipPortal extends React.Component {
  static propTypes = {
    target: PropTypes.object,
    text: PropTypes.node,
    title: PropTypes.node,
    alignX: PropTypes.oneOf(['left', 'right']),
    alignY: PropTypes.oneOf(['top', 'bottom']),
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    cornerOffset: PropTypes.number,
    onClose: PropTypes.func.isRequired
  };

  static contextTypes = {
    document: PropTypes.any,
    panel: PropTypes.string
  };

  state = {
    x: 0,
    y: 0
  };

  get document () {
    return this.context.document || document;
  }

  fixedPortal = false;

  findPortalTarget () {
    const { target } = this.props;
    const closestFixed = target.closest('.FixedLayout');
    const closestHeader = target.closest('.PanelHeader__in');
    const closestPanel = this.document.getElementById(this.context.panel).childNodes[0];

    if (closestFixed || closestHeader) {
      this.fixedPortal = true;
    }

    return closestFixed || closestHeader || closestPanel;
  }

  getBoundingTargetRect () {
    const { target } = this.props;
    const targetBounds = target.getBoundingClientRect();
    const portalBounds = this.portalTarget.getBoundingClientRect();

    return {
      width: targetBounds.width,
      height: targetBounds.height,
      x: targetBounds.x - portalBounds.x,
      y: targetBounds.y - portalBounds.y
    };
  }

  componentWillMount () {
    this.portalTarget = this.findPortalTarget();
    this.document.addEventListener('click', this.props.onClose);
  }

  componentWillUnmount () {
    this.document.removeEventListener('click', this.props.onClose);
  }

  componentDidMount () {
    const { offsetY, offsetX, alignX, alignY } = this.props;
    const coords = this.getBoundingTargetRect();

    this.setState({
      x: coords.x + offsetX + (alignX === 'right' ? coords.width - this.el.offsetWidth : 0),
      y: coords.y + (alignY === 'top' ? -this.el.offsetHeight - offsetY : coords.height + offsetY)
    });
  }

  getRef = el => this.el = el;

  render () {
    const { title, text, alignX, alignY, cornerOffset } = this.props;

    return ReactDOM.createPortal(
      <div className={classnames(baseClassName, {
        [`Tooltip--x-${alignX}`]: true,
        [`Tooltip--y-${alignY}`]: true,
        'Tooltip--fixed': this.fixedPortal
      })}>
        <div className="Tooltip__container" style={{ top: this.state.y, left: this.state.x }} ref={this.getRef}>
          <div className="Tooltip__corner" style={{ [alignX]: 20 + cornerOffset }}/>
          <div className="Tooltip__content">
            {title && <div className="Tooltip__title">{title}</div>}
            {text && <div className="Tooltip__text">{text}</div>}
          </div>
        </div>
      </div>, this.portalTarget);
  }
}

export default class Tooltip extends React.Component {
  static propTypes = {
    /**
     * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
     * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
     * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
     */
    children: PropTypes.node.isRequired,
    /**
     * Если передан `false`, то рисуется просто `children`.
     */
    isShown: PropTypes.bool.isRequired,
    /**
     * Текст тултипа.
     */
    text: PropTypes.node,
    /**
     * Заголовок тултипа.
     */
    title: PropTypes.node,
    /**
     * Положение по горизонтали (прижатие к левому или правому краю `children`).
     */
    alignX: PropTypes.oneOf(['left', 'right']),
    /**
     * Положение по вертикали (расположение над или под `children`).
     */
    alignY: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
     */
    offsetX: PropTypes.number,
    /**
     * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
     */
    offsetY: PropTypes.number,
    /**
     * Сдвиг треугольника (относительно ширины тултипа).
     */
    cornerOffset: PropTypes.number,
    /**
     * Callback, который вызывается при клике по любому месту в пределах экрана.
     */
    onClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    offsetX: 0,
    offsetY: 15,
    alignX: 'left',
    alignY: 'bottom',
    cornerOffset: 0,
    isShown: true
  };

  state = {
    ready: false
  };

  componentDidMount () {
    this.targetEl && this.setState({ ready: true });
  }

  getRef = el => this.targetEl = el;

  render () {
    const { children, isShown, ...portalProps } = this.props;

    const child = React.cloneElement(children, {
      [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: this.getRef, key: 'c'
    });

    if (!isShown || !this.state.ready) {
      return child;
    }

    return [child, <TooltipPortal {...portalProps} target={this.targetEl} key="t" />];
  }
}
