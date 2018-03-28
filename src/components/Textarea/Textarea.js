import './Textarea.css';
import './Textarea.new.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import requestAnimationFrame from '../../lib/requestAnimationFrame';
import {ANDROID, platform} from '../../lib/platform';
import classnames from '../../lib/classnames';

const osname = platform();

export default class Textarea extends Component {
  constructor (props) {
    super(props);

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      this.state = {
        value: props.defaultValue || props.initialValue || ''
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
    v: PropTypes.oneOf(['old', 'new']),
    className: PropTypes.string,
    getRef: PropTypes.func,

    /**
     * @deprecated since v1.5.0 Use defaultValue prop instead
     */
    initialValue: PropTypes.string
  };

  static defaultProps = {
    style: {},
    defaultValue: '',
    grow: true,
    v: 'old',
    onResize: () => {}
  };

  get baseClass () { return this.props.v === 'old' ? 'Textarea' : 'TextareaNew'; }

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

      // const top = document.body.scrollTop;

      this.setState({ height: 0 }, () => {
        const height = el.scrollHeight - diff;

        this.setState({ height });
        // TODO fix problem with scroll to top
        // document.body.scrollTop = top;

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
    const { initialValue, defaultValue, grow, style, onResize, v, className, ...restProps } = this.props;
    const height = this.state.height || style.height || 66;

    return (
      <div className={classnames(getClassName(this.baseClass), className)}>
        <textarea
          value={this.value}
          onChange={this.onChange}
          ref={this.getRef}
          style={Object.assign({}, style, { height })}
          {...restProps}
        />
        {osname === ANDROID && <div className={`${this.baseClass}-underline`} />}
      </div>
    );
  }
}
