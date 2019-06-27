import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasStyleObject, HasRef, StatusTypes } from '../../types/props';

export interface TextareaProps extends HasStyleObject, HasRef {
  defaultValue?: string;
  getRef?: (instance: HTMLTextAreaElement) => void;
  grow?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onResize?: (element: HTMLTextAreaElement) => void;
  status?: StatusTypes;
  value?: string;
}

type TextareaState = {
  value?: string;
  height?: number;
};

export default class Textarea extends PureComponent<TextareaProps, TextareaState> {
  element: HTMLTextAreaElement;

  isControlledOutside = typeof this.props.value !== 'undefined';

  state: TextareaState = {
    value: typeof this.props.value !== 'undefined' ? undefined : this.props.defaultValue || ''
  };

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
    getRootRef: PropTypes.func,
    status: PropTypes.oneOf(['default', 'error', 'valid'])
  };

  static defaultProps = {
    style: {},
    defaultValue: '',
    grow: true,
    onResize: () => {}
  };

  getRef = (element: HTMLTextAreaElement) => {
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

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      window.requestAnimationFrame(() => {
        this.element.value = '';
      });
    }
  }

  render () {
    const {
      defaultValue,
      value,
      onChange,
      grow,
      style,
      onResize,
      className,
      getRootRef,
      getRef,
      status,
      ...restProps
    } = this.props;
    const height = this.state.height || style.height || 66;

    return (
      <FormField className={classNames('Textarea', className)} style={style} getRootRef={getRootRef} status={status}>
        <textarea
          {...restProps}
          className="Textarea__el"
          value={this.value}
          onChange={this.onChange}
          ref={this.getRef}
          style={{ height }}
        />
      </FormField>
    );
  }
}
