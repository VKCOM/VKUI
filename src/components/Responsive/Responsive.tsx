import React, { RefObject, ReactNode } from 'react';

interface ResponsiveProps {
  match: any;
  children: (matched: any) => ReactNode;
}

interface ResponsiveState {
  matched: any;
}

export default class Responsive extends React.Component<ResponsiveProps, ResponsiveState> {
  baseRef: RefObject<HTMLDivElement> = React.createRef();
  matched: any = {};

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  onResize = () => {
    const target = this.baseRef.current.parentNode as HTMLElement;
    const width = target.offsetWidth;
    const height = target.offsetHeight;

    const keys = Object.keys(this.props.match);
    const matched: any = {};
    let shouldUpdate = false;

    for (let key of keys) {
      const matcher = this.props.match[key];
      matched[key] = matcher(width, height);

      if (!this.state.matched || this.state.matched[key] !== matched[key]) {
        shouldUpdate = true;
      }
    }

    if (shouldUpdate) {
      this.setState({ matched });
    }
  };

  render() {
    return <div ref={this.baseRef}>
      {this.state.matched && this.props.children(this.state.matched)}
    </div>;
  }
}
