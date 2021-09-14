import * as React from 'react';
import { DOMProps, withDOM } from '../../lib/dom';
import { multiRef, setRef } from '../../lib/utils';
import './CustomScrollView.css';

interface Props extends DOMProps {
  windowResize?: boolean;
  boxRef: React.Ref<HTMLDivElement>;
}

class CustomScrollView extends React.Component<Props> {
  private ratio = NaN;
  private lastTrackerTop = 0;
  private clientHeight = 0;
  private trackerHeight = 0;
  private scrollHeight = 0;
  private transformProp = '';

  private startY = 0;
  private trackerTop = 0;

  private readonly box = multiRef<HTMLDivElement>((e) => setRef(e, this.props.boxRef));
  private readonly barY = React.createRef<HTMLDivElement>();
  private readonly trackerY = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.chooseTransformProp();

    this.resize();

    if (this.props.windowResize) {
      this.props.window.addEventListener('resize', this.resize);
    }
  }

  componentDidUpdate() {
    this.resize();
  }

  componentWillUnmount() {
    this.props.window.removeEventListener('resize', this.resize);
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
    let ratio = clientHeight / scrollHeight;
    let trackerHeight = Math.max(clientHeight * ratio, 40);

    this.ratio = ratio;
    this.clientHeight = clientHeight;
    this.scrollHeight = scrollHeight;
    this.trackerHeight = trackerHeight;

    if (ratio >= 1) {
      this.barY.current.style.display = 'none';
    } else {
      this.barY.current.style.display = '';
      this.trackerY.current.style.height = `${trackerHeight}px`;

      this.setTrackerPositionFromScroll(this.box.current.scrollTop);
    }
  };

  scroll = () => {
    if (this.ratio >= 1) {
      return;
    }

    this.setTrackerPositionFromScroll(this.box.current.scrollTop);
  };

  setTrackerPosition(scrollTop: number) {
    this.lastTrackerTop = scrollTop;
    (this.trackerY.current.style as any)[this.transformProp] = `translate(0, ${scrollTop}px)`;
  }

  setTrackerPositionFromScroll(scrollTop: number) {
    const progress = scrollTop / (this.scrollHeight - this.clientHeight);
    this.setTrackerPosition((this.clientHeight - this.trackerHeight) * progress);
  }

  setScrollPositionFromTracker(trackerTop: number) {
    const progress = trackerTop / (this.clientHeight - this.trackerHeight);
    this.box.current.scrollTop = (this.scrollHeight - this.clientHeight) * progress;
  }

  onDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    this.startY = e.clientY;
    this.trackerTop = this.lastTrackerTop;

    this.props.document.addEventListener('mousemove', this.onMove);
    this.props.document.addEventListener('mouseup', this.onUp);
  };

  onMove = (e: MouseEvent) => {
    e.preventDefault();
    const diff = e.clientY - this.startY;
    const position = Math.min(Math.max(this.trackerTop + diff, 0), this.clientHeight - this.trackerHeight);

    this.setScrollPositionFromTracker(position);
  };

  onUp = (e: MouseEvent) => {
    e.preventDefault();
    this.props.document.removeEventListener('mousemove', this.onMove);
    this.props.document.removeEventListener('mouseup', this.onUp);
  };

  render() {
    return <div vkuiClass="CustomScrollView">
      <div vkuiClass="CustomScrollView__barY" ref={this.barY}>
        <div vkuiClass="CustomScrollView__trackerY" ref={this.trackerY} onMouseDown={this.onDragStart} />
      </div>

      <div vkuiClass="CustomScrollView__box" tabIndex={-1} ref={this.box} onScroll={this.scroll}>
        {this.props.children}
      </div>
    </div>;
  }
}

export default withDOM(CustomScrollView);
