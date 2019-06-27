import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasChildren } from '../../types/props';

const baseClassName = getClassName('InnerScroll');

export interface InnerScrollProps extends HasStyleObject, HasChildren {
  className: string;
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
}

export default class InnerScroll extends React.Component<InnerScrollProps> {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    onScroll: PropTypes.func
  };

  el: HTMLDivElement;

  onScroll = e => {
    if (this.el.scrollTop <= 0) {
      this.el.scrollTop = 1;
    } else if (this.el.scrollTop >= this.el.scrollHeight - this.el.offsetHeight) {
      this.el.scrollTop = this.el.scrollHeight - this.el.offsetHeight - 1;
    }

    this.props.onScroll && this.props.onScroll(e);
  };

  componentDidMount () {
    this.el.scrollTop = 1;
  }

  getRef = (el: HTMLDivElement) => (this.el = el);

  render () {
    const { className, children, onScroll, ...restProps } = this.props;

    return (
      <div {...restProps} className={classNames(baseClassName, className)} onScroll={this.onScroll} ref={this.getRef}>
        {children}
      </div>
    );
  }
}
