import React, { HTMLAttributes, PureComponent } from 'react';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasFormStatus, HasRef, HasRootRef } from '../../types/props';

export interface TextareaProps extends
  HTMLAttributes<HTMLTextAreaElement>,
  HasRef<HTMLTextAreaElement>,
  HasRootRef<HTMLElement>,
  HasFormStatus
{
  children?: string;
  grow?: boolean;
  onResize?(el: HTMLTextAreaElement): void;
  value?: string;
}

export interface TextareaState {
  value?: string;
  height?: number;
}

export default class Textarea extends PureComponent<TextareaProps, TextareaState> {
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

  isControlledOutside?: boolean
  element: HTMLTextAreaElement

  componentDidMount () {
    if (this.props.grow) {
      this.resize();
    }
  }

  static defaultProps = {
    style: {},
    defaultValue: '',
    grow: true,
    onResize: () => {}
  };

  getRef = (element) => {
    this.element = element;

    const getRef = this.props.getRef;
    if (getRef) {
      if (typeof getRef === 'function') {
        getRef(element);
      } else {
        getRef.current = element;
      }
    }
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
      window.requestAnimationFrame(() => {
        this.element.value = '';
      });
    }
  }

  render () {
    const { defaultValue, value, onChange, grow, style, onResize, className,
      getRootRef, getRef, status, ...restProps } = this.props;

    const height = this.state.height || style.height || 66;

    return (
      <FormField
        className={classNames('Textarea', className)}
        style={style}
        getRootRef={getRootRef}
        status={status}
      >
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
