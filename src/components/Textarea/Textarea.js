import './Textarea.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Textarea');

export default class Textarea extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: typeof props.value === 'undefined' ? props.initialValue || '' : undefined
    };

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    }
  }
  static propTypes = {
    style: PropTypes.object,
    value: PropTypes.string,
    initialValue: PropTypes.string,
    grow: PropTypes.bool,
    onChange: PropTypes.func,
    height: PropTypes.number
  };
  static defaultProps = {
    style: {},
    initialValue: '',
    grow: true
  };
  getRef = (element) => {
    this.element = element;
  }
  onChange = (e) => {
    let el = this.element;

    if (el && this.props.grow) {
      const { offsetHeight, scrollHeight } = el;
      const style = window.getComputedStyle(el);
      const paddingTop = parseInt(style.paddingTop);
      const paddingBottom = parseInt(style.paddingBottom);

      let diff = paddingTop + paddingBottom;

      if (scrollHeight + diff <= offsetHeight) {
        diff = 0;
      }

      if (el.value) {
        this.setState({ height: scrollHeight - diff });
      }

      const top = document.body.scrollTop;

      this.setState({ height: 0 });

      window.requestAnimationFrame(() => {
        this.setState({ height: el.scrollHeight - diff });
        document.body.scrollTop = top;
      });
    }

    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render () {
    const props = this.props;
    const value = this.isControlledOutside ? props.value : this.state.value;
    const height = this.state.height || 66;

    return (
      <textarea
        className={baseClassNames}
        {...removeObjectKeys(props, ['initialValue', 'grow', 'style'])}
        value={value}
        onChange={this.onChange}
        ref={this.getRef}
        style={Object.assign({}, props.style, { height })}
      />
    );
  }
}
