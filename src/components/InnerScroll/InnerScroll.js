import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './InnerScroll.css';

const baseClassName = getClassName('InnerScroll');

export default class InnerScroll extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    onScroll: PropTypes.func
  };

  onScroll = (e) => {
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

  render () {
    const { className, children, onScroll, ...restProps } = this.props;

    return (
      <div
        className={classnames(baseClassName, className)}
        onScroll={this.onScroll}
        ref={el => this.el = el}
        {...restProps}
      >
        {children}
      </div>
    );
  }
}
