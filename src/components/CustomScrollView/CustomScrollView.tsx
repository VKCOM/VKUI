import React, { createRef } from 'react';

interface Props {
  windowResize?: boolean;
}

export default class CustomScrollView extends React.Component<Props> {
  private ratio = NaN;
  private trackerTop = 0;
  private clientHeight = 0;
  private trackerHeight = 0;
  // private scrollHeight = 0;
  // private trackerMax = 0;
  private transformProp = '';

  public readonly box = createRef<HTMLDivElement>();
  public readonly barY = createRef<HTMLDivElement>();
  public readonly trackerY = createRef<HTMLDivElement>();

  private onDragStart: (e: MouseEvent) => void;

  componentDidMount() {
    this.trackerTop = 0;
    this.ratio = NaN;

    this.chooseTransformProp();

    this.resize();
    this.initDragging();

    if (this.props.windowResize) {
      window.addEventListener('resize', this.resize);
    }

    this.box.current.addEventListener('scroll', this.scroll);
  }

  componentDidUpdate() {
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    this.box.current.removeEventListener('scroll', this.scroll);
    this.stopDragging();
  }

  chooseTransformProp() {
    let style = this.trackerY.current.style;
    let prop = '';

    if ('transform' in style) {
      prop = 'transform';
    } else if ('webkitTransform' in style) {
      prop = 'webkitTransform';
    }

    this.transformProp = prop;
  }

  resize = () => {
    const clientHeight = this.box.current.clientHeight;
    const scrollHeight = this.box.current.scrollHeight;
    const ratio = clientHeight / scrollHeight;
    const trackerHeight = Math.max(clientHeight * ratio, 40);

    if (ratio >= 1) {
      this.barY.current.style.display = 'none';
    } else {
      this.barY.current.style.display = '';
      this.trackerY.current.style.height = `${trackerHeight}px`;

      this.setTrackerPosition(this.box.current.scrollTop * ratio);
    }

    this.ratio = ratio;
    this.clientHeight = clientHeight;
    // this.scrollHeight = scrollHeight;
    this.trackerHeight = trackerHeight;
    // this.trackerMax = clientHeight * ratio - trackerHeight;
  };

  scroll = () => {
    if (this.ratio >= 1) {
      return;
    }

    this.setTrackerPosition(this.box.current.scrollTop * this.ratio);
  };

  setTrackerPosition(scrollTop: number) {
    this.trackerTop = scrollTop;
    (this.trackerY.current.style as any)[this.transformProp] = `translate(0, ${scrollTop}px)`;
  }

  setScrollPositionFromTracker(scrollTop: number) {
    this.box.current.scrollTop = scrollTop / this.ratio;
  }

  initDragging() {
    let startY = 0;
    let startTop = 0;

    const onMove = (e: MouseEvent) => {
      e.preventDefault();
      const diff = e.clientY - startY;
      const position = Math.min(Math.max(startTop + diff, 0), this.clientHeight - this.trackerHeight);

      this.setTrackerPosition(position);
      this.setScrollPositionFromTracker(position);
    };

    const onUp = (e: MouseEvent) => {
      e.preventDefault();

      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      this.trackerY.current.classList.remove('CustomScrollView__trackerY--dragging');
    };

    this.onDragStart = (e: MouseEvent) => {
      e.preventDefault();
      startY = e.clientY;
      startTop = this.trackerTop;

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      this.trackerY.current.classList.add('CustomScrollView__trackerY--dragging');
    };

    this.trackerY.current.addEventListener('mousedown', this.onDragStart);
  }

  stopDragging() {
    if (this.onDragStart) {
      this.trackerY.current.removeEventListener('mousedown', this.onDragStart);
      this.onDragStart = null;
    }
  }

  render() {
    return <div className="CustomScrollView">
      <div className="CustomScrollView__box" ref={this.box}>
        { this.props.children }
      </div>

      <div className="CustomScrollView__barY" ref={this.barY}>
        <div className="CustomScrollView__trackerY" ref={this.trackerY} />
      </div>
    </div>;
  }
}
