import React, {
  Component,
  ReactNode,
  FocusEvent,
  FocusEventHandler,
  InputHTMLAttributes,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import getClassname from '../../helpers/getClassName';
import Icon16SearchOutline from '@vkontakte/icons/dist/16/search_outline';
import { IOS } from '../../lib/platform';
import { HasPlatform, HasRef } from '../../types/props';

let searchId = 0;

export type InputRef = (element: HTMLInputElement) => void;

export type CancelHandler = () => void;

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasPlatform {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: ReactNode;
  defaultValue?: string;
}

export interface SearchState {
  value?: string;
  focused?: boolean;
}

class Search extends Component<SearchProps, SearchState> {
  static defaultProps: SearchProps = {
    autoComplete: 'off',
    placeholder: 'Поиск',
    after: 'Отмена',
  };

  isControlledOutside: boolean;

  inputEl: HTMLInputElement;

  constructor(props: SearchProps) {
    super(props);

    const state: SearchState = {
      focused: false,
    };

    if (props.hasOwnProperty('value')) {
      this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }
    searchId++;
    this.state = state;
  }

  get value() {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  onFocus: FocusEventHandler = (e: FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: true });
    this.props.onFocus && this.props.onFocus(e);
  };

  onBlur: FocusEventHandler = (e: FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: false });
    this.props.onBlur && this.props.onBlur(e);
  };

  onChange: ChangeEventHandler = (e?: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!this.isControlledOutside) {
      this.setState({ value: target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  onCancel: CancelHandler = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(this.inputEl, '');

    const ev2 = new Event('input', { bubbles: true });
    this.inputEl.dispatchEvent(ev2);
  };

  inputRef: InputRef = (element: HTMLInputElement) => {
    const getRef = this.props.getRef;
    this.inputEl = element;
    if (getRef) {
      if (typeof getRef === 'function') {
        getRef(element);
      } else {
        getRef.current = element;
      }
    }
  };

  render() {
    const {
      className,
      onFocus,
      onBlur,
      onChange,
      defaultValue,
      value,
      placeholder,
      after,
      getRef,
      platform,
      ...inputProps
    } = this.props;

    return (
      <div className={classNames(getClassname('Search', platform), {
        'Search--focused': this.state.focused,
        'Search--has-value': !!this.value,
        'Search--has-after': !!after,
      }, className)}>
        <div className="Search__in">
          <div className="Search__width" />
          <div className="Search__control">
            <input
              {...inputProps}
              id={`search-${searchId}`}
              ref={this.inputRef}
              type="text"
              className="Search__input"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              value={this.value}
            />
            {platform === IOS && after && <div className="Search__after-width">{after}</div>}
            <label
              className="Search__placeholder"
              htmlFor={`search-${searchId}`}
            >
              <div className="Search__placeholder-in">
                <Icon16SearchOutline />
                <div className="Search__placeholder-text" dangerouslySetInnerHTML={{ __html: placeholder }} />
              </div>
            </label>
          </div>
          {platform === IOS && after &&
            <div className="Search__after" onClick={this.onCancel}>
              <div className="Search__after-in">{after}</div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default withPlatform(Search);
