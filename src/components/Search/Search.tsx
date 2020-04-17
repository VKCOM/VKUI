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
import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import { IOS } from '../../lib/platform';
import { HasPlatform, HasRef } from '../../types';
import Touch, { TouchEventHandler, TouchEvent } from '../Touch/Touch';
import { VKUITouchEvent } from '../../lib/touch';

let searchId = 0;

export type InputRef = (element: HTMLInputElement) => void;

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasPlatform {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: ReactNode;
  icon?: ReactNode;
  onIconClick?: (e: VKUITouchEvent) => void;
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

  searchId: string;

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
    this.searchId = `search-${searchId++}`;
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

  onCancel: VoidFunction = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(this.inputEl, '');

    const ev2 = new Event('input', { bubbles: true });
    this.inputEl.dispatchEvent(ev2);
  };

  onIconClickStart: TouchEventHandler = (e: TouchEvent) => {
    this.props.onIconClick && this.props.onIconClick(e.originalEvent);
  };

  onIconCancelClickStart: TouchEventHandler = (e: TouchEvent) => {
    e.originalEvent.preventDefault();
    this.inputEl.focus();
    this.onCancel();
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
      icon,
      onIconClick,
      ...inputProps
    } = this.props;

    return (
      <div className={classNames(getClassname('Search', platform), {
        'Search--focused': this.state.focused,
        'Search--has-value': !!this.value,
        'Search--has-after': !!after,
        'Search--has-icon': !!icon,
      }, className)}>
        <div className="Search__in">
          <div className="Search__width" />
          <div className="Search__control">
            <input
              {...inputProps}
              ref={this.inputRef}
              type="text"
              className="Search__input"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              value={this.value}
            />
            {platform === IOS && after && <div className="Search__after-width">{after}</div>}
            <div className="Search__placeholder">
              <div className="Search__placeholder-in">
                <Icon16SearchOutline />
                <div className="Search__placeholder-text" dangerouslySetInnerHTML={{ __html: placeholder }} />
              </div>
            </div>
          </div>
          <div className="Search__after" onClick={this.onCancel}>
            <div className="Search__icons">
              {icon &&
                <Touch onStart={this.onIconClickStart} className="Search__icon">
                  {icon}
                </Touch>
              }
              {!!this.value &&
                <Touch onStart={this.onIconCancelClickStart} className="Search__icon">
                  <Icon16Clear />
                </Touch>
              }
            </div>
            {platform === IOS && after &&
              <div className="Search__after-in">{after}</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withPlatform(Search);
