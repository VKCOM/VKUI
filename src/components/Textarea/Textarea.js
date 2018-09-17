
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import requestAnimationFrame from '../../lib/requestAnimationFrame';
import {ANDROID, platform} from '../../lib/platform';
import classnames from '../../lib/classnames';

const osname = platform();
const baseClassName = getClassName('Textarea');

export default class Textarea extends Component {
  constructor (props) {
    super(props);

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
      this.state = {};
    } else {
      this.state = {
        value: props.defaultValue || ''
      };
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
    defaultValue: PropTypes.string,
    grow: PropTypes.bool,
    onChange: PropTypes.func,
    onResize: PropTypes.func,
    className: PropTypes.string,
    getRef: PropTypes.func,
    getRootRef: PropTypes.func
  };

  static defaultProps = {
    style: {},
    defaultValue: '',
    grow: true,
    onResize: () => {}
  };

  getRef = element => {
    this.element = element;
    this.props.getRef && this.props.getRef(element);
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

      this.setState({ height: 0 }, () => {
        const height = el.scrollHeight - diff;

        this.setState({ height });

        this.props.onResize(el);
      });
    }
  };

  get value () { return this.isControlledOutside ? this.props.value : this.state.value; }

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
  };

  componentDidUpdate (prevProps) {
    if (prevProps.value && this.props.value === '') {
      // Fix iOS extra indent on removing content
      requestAnimationFrame(() => {
        this.element.value = '';
      });
    }
  }

  render () {
    const { defaultValue, value, onChange, grow, style, onResize, className, getRootRef, ...restProps } = this.props;
    const height = this.state.height || style.height || 66;

    return (
      <div className={classnames(baseClassName, className)} style={style} ref={getRootRef}>
        <textarea
          {...restProps}
          value={this.value}
          onChange={this.onChange}
          ref={this.getRef}
          style={{ height }}
        />
        {osname === ANDROID && <div className="Textarea-underline" />}
      </div>
    );
  }
}
