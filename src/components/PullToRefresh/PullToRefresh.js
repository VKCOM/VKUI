import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Touch, { TouchRootContext } from '../Touch/Touch';
import FixedLayout from '../FixedLayout/FixedLayout';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '../../lib/platform';
import getClassName from '../../helpers/getClassName';
import PullToRefreshSpinner from './PullToRefreshSpinner';

const baseClassName = getClassName('PullToRefresh');

function cancelEvent (event) {
  if (!event) return false;
  while (event.originalEvent) event = event.originalEvent;
  if (event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();
  return false;
}

export default class PullToRefresh extends PureComponent {
  constructor (props) {
    super(props);

    this.params = {
      start: IS_PLATFORM_ANDROID ? -45 : -10,
      max: IS_PLATFORM_ANDROID ? 80 : 50,
      maxY: IS_PLATFORM_ANDROID ? 80 : 400,
      refreshing: IS_PLATFORM_ANDROID ? 50 : 36,

      positionMultiplier: IS_PLATFORM_ANDROID ? 1 : 0.21
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

    this.contentRef = React.createRef();
  }

  static propTypes = {
    children: PropTypes.node,
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

  componentDidUpdate (prevProps) {
    if (prevProps.isFetching && !this.props.isFetching) {
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

      if (progress > 85 && !refreshing && IS_PLATFORM_IOS) {
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
        spinnerY: IS_PLATFORM_ANDROID ? this.params.refreshing : this.state.spinnerY
      });

      this.props.onRefresh();
    }
  }

  onRefreshingFinish = () => {
    this.setState({
      refreshingFinished: true
    }, () => {
      !this.state.touchDown && this.resetRefreshingState();
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

    const spinnerTransform = `translate3d(0, ${spinnerY}px, 0)`;
    const contentTransform = refreshing && !touchDown && IS_PLATFORM_IOS ? `translate3d(0, 100px, 0)` : IS_PLATFORM_IOS && contentShift ? `translate3d(0, ${contentShift}px, 0)` : '';

    return (
      <TouchRootContext.Provider value={true}>
        <Touch
          {...restProps}
          onStart={this.onTouchStart}
          onMove={this.onTouchMove}
          onEnd={this.onTouchEnd}
          className={classNames(baseClassName, className, {
            'PullToRefresh--watching': watching,
            'PullToRefresh--refreshing': refreshing
          })}
        >
          <FixedLayout className="PullToRefresh__controls">
            <PullToRefreshSpinner
              style={{
                transform: spinnerTransform,
                WebkitTransform: spinnerTransform,
                opacity: watching || refreshing || canRefresh ? 1 : 0
              }}
              on={refreshing}
              progress={refreshing ? null : spinnerProgress}
            />
          </FixedLayout>

          <div
            className="PullToRefresh__content"
            ref={this.contentRef}
            style={{
              transform: contentTransform,
              WebkitTransform: contentTransform
            }}
          >
            {children}
          </div>
        </Touch>
      </TouchRootContext.Provider>
    );
  }
}
