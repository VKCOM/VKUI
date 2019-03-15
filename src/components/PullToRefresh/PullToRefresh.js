import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Touch from '../Touch/Touch';
import FixedLayout from '../FixedLayout/FixedLayout';
import classNames from '../../lib/classNames';
import { platform, ANDROID, IOS } from '../../lib/platform';
import getClassName from '../../helpers/getClassName';
import PullToRefreshSpinner from './PullToRefreshSpinner';

const baseClassName = getClassName('PullToRefresh');

const osname = platform();
const isAndroid = osname === ANDROID;
const isIOS = osname === IOS;

function cancelEvent (event) {
  if (!event) return false;
  while (event.originalEvent) event = event.originalEvent;
  if (event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();
  if (event.stopImmediatePropagation) event.stopImmediatePropagation();
  event.cancelBubble = true;
  event.returnValue = false;
  return false;
}

export default class PullToRefresh extends PureComponent {
  constructor (props) {
    super(props);

    this.params = {
      start: isAndroid ? -40 : -10,
      max: isAndroid ? 80 : 50,
      maxY: isAndroid ? 80 : 400,
      refreshing: isAndroid ? 50 : 36,

      positionMultiplier: isAndroid ? 1 : 0.21
    };

    this.state = {
      watching: false,
      refreshing: false,
      canRefresh: false,

      touchDown: false,
      refreshingFinished: false,

      touchY: 0,
      spinnerY: this.params.start,
      spinnerProgress: 0,
      contentShift: 0
    };

    this._contentElement = React.createRef();
  }

  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,

    /**
     * Будет вызвана для обновления контента
     */
    onRefresh: PropTypes.func.isRequired,

    /**
     * Определяет, выполняется ли обновление. Для скрытия спиннера после получения контента необходимо передать `false`
     */
    isFetching: PropTypes.bool
  };

  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any
  };

  get document () {
    return this.context.document || document;
  }

  get window () {
    return this.context.window || window;
  }

  componentDidMount () {
    this.document.addEventListener('touchmove', this.onWindowTouchMove, { cancelable: true, passive: false });
  }

  componentWillUnmount () {
    this.document.removeEventListener('touchmove', this.onWindowTouchMove);
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.isFetching && this.props.isFetching) {
      this.onRefreshingFinish();
    }
  }

  get scrollTop () {
    return this.document.scrollingElement.scrollTop;
  }

  onTouchStart = (e) => {
    if (this.state.refreshing) cancelEvent(e);
    this.setState({ touchDown: true });
  };

  onWindowTouchMove = (e) => {
    if (this.state.refreshing) cancelEvent(e);
  };

  onTouchMove = (e) => {
    const { isY, shiftY } = e;
    const { start, max } = this.params;
    const pageYOffset = this.window.pageYOffset;

    const { refreshing, watching, touchDown } = this.state;

    if (watching && touchDown) {
      cancelEvent(e);

      const { positionMultiplier } = this.params;

      const shift = Math.max(0, shiftY - this.state.touchY);

      const currentY = Math.max(start, Math.min(this.params.maxY, start + (shift * positionMultiplier)));
      const progress = currentY > -10 ? Math.abs((currentY + 10) / max) * 80 : 0;

      this.setState({
        spinnerY: currentY,
        spinnerProgress: Math.min(80, Math.max(0, progress)),
        canRefresh: progress > 80,
        contentShift: (currentY + 10) * 2.3
      });

      if (progress > 85 && !refreshing && isIOS) {
        this.runRefreshing();
      }
    } else if (isY && pageYOffset === 0 && shiftY > 0 && !refreshing && touchDown) {
      cancelEvent(e);

      this.setState({
        watching: true,
        touchY: shiftY,
        spinnerY: start,
        spinnerProgress: 0
      });
    }
  };

  onTouchEnd = () => {
    const { refreshing, canRefresh, refreshingFinished } = this.state;

    this.setState({
      watching: false,
      touchDown: false
    }, () => {
      if (canRefresh && !refreshing) {
        this.runRefreshing();
      } else if (refreshing && refreshingFinished) {
        this.resetRefreshingState();
      } else {
        this.setState({
          spinnerY: refreshing ? this.params.refreshing : this.params.start,
          spinnerProgress: 0,
          contentShift: 0
        });
      }
    });
  };

  runRefreshing () {
    if (!this.state.refreshing && this.props.onRefresh) {
      this.setState({
        refreshing: true,
        spinnerY: isAndroid ? this.params.refreshing : this.state.spinnerY
      });

      this.props.onRefresh();
    }
  }

  onRefreshingFinish = () => {
    this.setState({
      refreshingFinished: true
    }, () => {
      this.resetRefreshingState();
    });
  }

  resetRefreshingState () {
    this.setState({
      watching: false,
      canRefresh: false,
      refreshing: false,
      refreshingFinished: false,
      spinnerY: this.params.start,
      spinnerProgress: 0,
      contentShift: 0
    });
  }

  render () {
    const { children, className, onRefresh, isFetching, ...restProps } = this.props;
    const { watching, refreshing, spinnerY, spinnerProgress, canRefresh, touchDown, contentShift } = this.state;

    return (
      <Touch
        onStart={this.onTouchStart}
        onMove={this.onTouchMove}
        onEnd={this.onTouchEnd}
        className={classNames(baseClassName, className, {
          'PullToRefresh--watching': watching,
          'PullToRefresh--refreshing': refreshing
        })}
        {...restProps}
      >
        <FixedLayout className="PullToRefresh__controls">
          <PullToRefreshSpinner
            style={{
              transform: `translate3d(0, ${spinnerY}px, 0)`,
              opacity: watching || refreshing || canRefresh ? 1 : 0
            }}
            on={refreshing}
            progress={refreshing ? null : spinnerProgress}
          />
        </FixedLayout>

        <div
          className="PullToRefresh__content"
          ref={this._contentElement}
          style={{
            transform: refreshing && !touchDown && isIOS ? `translate3d(0, 100px, 0)` : isIOS && contentShift ? `translate3d(0, ${contentShift}px, 0)` : ''
          }}
        >
          {children}
        </div>
      </Touch>
    );
  }
}
