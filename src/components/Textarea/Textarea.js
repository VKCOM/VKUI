import './Textarea.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';
import requestAnimationFrame from '../../lib/requestAnimationFrame';

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
  componentDidMount () {
    if (this.props.grow) {
      this.resize();
    }
  }
  static propTypes = {
    style: PropTypes.object,
    value: PropTypes.string,
    initialValue: PropTypes.string,
    grow: PropTypes.bool,
    onChange: PropTypes.func,
    onResize: PropTypes.func
  };
  static defaultProps = {
    style: {},
    initialValue: '',
    grow: true,
    onResize: () => {}
  };
  getRef = (element) => {
    this.element = element;
  };
  resize = () => {
    const el = this.element;

    if (el) {
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

      requestAnimationFrame(() => {
        const height = el.scrollHeight - diff;

        this.setState({ height });
        document.body.scrollTop = top;

        this.props.onResize(el);
      });
    }
  }
  onChange = (e) => {
    if (this.props.grow) {
      this.resize();
    }

    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  componentDidUpdate (prevProps) {
    if (prevProps.value && this.props.value === '') {
      // Fix iOS extra indent on removing content
      requestAnimationFrame(() => {
        this.element.value = '';
      });
    }
  }
  render () {
    const props = this.props;
    const value = this.isControlledOutside ? props.value : this.state.value;
    const height = this.state.height || this.props.style.height || 66;

    return (
      <textarea
        className={baseClassNames}
        {...removeObjectKeys(props, ['initialValue', 'grow', 'style', 'onResize'])}
        value={value}
        onChange={this.onChange}
        ref={this.getRef}
        style={Object.assign({}, props.style, { height })}
      />
    );
  }
}
