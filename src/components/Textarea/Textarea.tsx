import { ChangeEvent, ChangeEventHandler, PureComponent, TextareaHTMLAttributes, RefCallback } from 'react';
import { classNames } from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasRef, HasRootRef } from '../../types';
import { setRef } from '../../lib/utils';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { getClassName, HasPlatform } from '../..';
import { withPlatform } from '../../hoc/withPlatform';

export interface TextareaProps extends
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HasRef<HTMLTextAreaElement>,
  HasRootRef<HTMLElement>,
  AdaptivityProps,
  HasPlatform {
  grow?: boolean;
  onResize?(el: HTMLTextAreaElement): void;
  defaultValue?: string;
}

export interface TextareaState {
  value?: string;
  height?: number;
}

class Textarea extends PureComponent<TextareaProps, TextareaState> {
  constructor(props: TextareaProps) {
    super(props);

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
      this.state = {};
    } else {
      this.state = {
        value: props.defaultValue || '',
      };
    }
  }

  isControlledOutside?: boolean;
  element: HTMLTextAreaElement;

  componentDidMount() {
    if (this.props.grow) {
      this.resize();
    }
  }

  static defaultProps: TextareaProps = {
    style: {},
    defaultValue: '',
    grow: true,
  };

  getRef: RefCallback<HTMLTextAreaElement> = (element) => {
    this.element = element;
    setRef(element, this.props.getRef);
  };

  resize: VoidFunction = () => {
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

        if (this.props.onResize) {
          this.props.onResize(el);
        }
      });
    }
  };

  get value() {return this.isControlledOutside ? this.props.value : this.state.value;}

  onChange: ChangeEventHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  componentDidUpdate(prevProps: TextareaProps, prevState: TextareaState) {
    if (prevProps.value && this.props.value === '') {
      // Fix iOS extra indent on removing content
      window.requestAnimationFrame(() => {
        this.element.value = '';
      });
    }

    if (this.props.grow && (
      this.isControlledOutside && prevProps.value !== this.props.value
      || !this.isControlledOutside && prevState.value !== this.state.value
    )) {
      this.resize();
    }
  }

  render() {
    const { defaultValue, value, onChange, grow, style, onResize, className,
      getRootRef, getRef, sizeY, platform, ...restProps } = this.props;

    const height = this.state.height || style.height || 66;

    return (
      <FormField
        vkuiClass={classNames(getClassName('Textarea', platform), `Textarea--sizeY-${sizeY}`)}
        className={className}
        style={style}
        getRootRef={getRootRef}
        disabled={restProps.disabled}
      >
        <textarea
          {...restProps}
          vkuiClass="Textarea__el"
          value={this.value}
          onChange={this.onChange}
          ref={this.getRef}
          style={{ height }}
        />
      </FormField>
    );
  }
}
export default withPlatform(withAdaptivity(Textarea, {
  sizeY: true,
}));
