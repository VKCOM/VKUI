import {
  Component,
  ReactNode,
  FocusEvent,
  FocusEventHandler,
  InputHTMLAttributes,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import { classNames } from '../../lib/classNames';
import { withPlatform } from '../../hoc/withPlatform';
import { getClassName } from '../../helpers/getClassName';
import { Icon16SearchOutline, Icon16Clear, Icon24Cancel } from '@vkontakte/icons';
import { IOS, VKCOM } from '../../lib/platform';
import { HasPlatform, HasRef } from '../../types';
import Touch, { TouchEventHandler, TouchEvent } from '../Touch/Touch';
import { VKUITouchEvent } from '../../lib/touch';
import { setRef } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import Title from '../Typography/Title/Title';
import { Separator } from '../../index';

let searchId = 0;

export type InputRef = (element: HTMLInputElement) => void;

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasPlatform {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: ReactNode;
  before?: ReactNode;
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
    before: <Icon16SearchOutline />,
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
    this.inputEl = element;
    setRef(element, this.props.getRef);
  };

  render() {
    const {
      before,
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
      style,
      ...inputProps
    } = this.props;

    return (
      <div
        className={classNames(getClassName('Search', platform), {
          'Search--focused': this.state.focused,
          'Search--has-value': !!this.value,
          'Search--has-after': !!after,
          'Search--has-icon': !!icon,
        }, className)}
        style={style}
      >
        <div className="Search__in">
          <div className="Search__width" />
          <label className="Search__control">
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
                {before}
                {platform === VKCOM
                  ? <Text className="Search__placeholder-text" weight="regular">{placeholder}</Text>
                  : <Title className="Search__placeholder-text" level="3" weight="regular">{placeholder}</Title>
                }
              </div>
              {this.state.focused && platform === IOS && after && <div className="Search__after-width">{after}</div>}
            </div>
          </label>
          <div className="Search__after" onClick={this.onCancel}>
            <div className="Search__icons">
              {icon &&
                <Touch onStart={this.onIconClickStart} className="Search__icon">
                  {icon}
                </Touch>
              }
              {!!this.value &&
                <Touch onStart={this.onIconCancelClickStart} className="Search__icon">
                  {platform === VKCOM
                    ? <Icon24Cancel />
                    : <Icon16Clear />
                  }
                </Touch>
              }
            </div>
            {platform === IOS && after &&
              <div className="Search__after-in">{after}</div>
            }
          </div>
        </div>
        {platform === VKCOM && <Separator className="Search__separator" wide />}
      </div>
    );
  }
}

export default withPlatform(Search);
