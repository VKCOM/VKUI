import React from 'react';
import PropTypes from 'prop-types';
import Icon16Search from '@vkontakte/icons/dist/16/search';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasClassName } from '../../types/props';

const baseClassName = getClassName('Search');

let searchId = 0;

export interface SearchIOSProps extends HasClassName {
  after?: React.ReactNode;
  autoComplete?: string;
  autoFocus?: boolean;
  before?: React.ReactNode;
  theme?: 'header' | 'default';
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  getRef?: (instance: HTMLInputElement) => void;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

type State = {
  showAfter: boolean;
  focused: boolean;
  afterWidth: null;
  value?: string;
};

export default class SearchIOS extends React.Component<SearchIOSProps, State> {
  isControlledOutside: boolean = this.props.hasOwnProperty('value');

  state: State = {
    showAfter: false,
    focused: false,
    afterWidth: null,
    value: this.props.hasOwnProperty('value') ? this.props.defaultValue || '' : undefined
  };

  constructor (props) {
    super(props);

    searchId++;
  }

  static propTypes = {
    className: PropTypes.string,
    after: PropTypes.node,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    theme: PropTypes.oneOf(['header', 'default']),
    getRef: PropTypes.func
  };

  static defaultProps = {
    after: 'Отменить',
    theme: 'default',
    placeholder: 'Поиск'
  };

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: true });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: false });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }

    if (this.props.onChange) {
      this.props.onChange(e.target.value, e);
    }
  };

  onCancel = () => {
    if (!this.isControlledOutside) {
      this.setState({ value: '' });
    }

    if (this.props.onChange) {
      // FIXME: WTF?
      // this.props.onChange('');
    }
  };

  inputRef = (el: HTMLInputElement) => this.props.getRef && this.props.getRef(el);

  render () {
    const {
      className,
      theme,
      onFocus,
      onBlur,
      onChange,
      defaultValue,
      value,
      placeholder,
      after,
      getRef,
      ...inputProps
    } = this.props;

    return (
      <div
        className={classNames(
          baseClassName,
          {
            [`Search--${theme}`]: true,
            'Search--focused': this.state.focused,
            'Search--has-value': this.value,
            'Search--has-after': after
          },
          className
        )}
      >
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
            {after && <div className="Search__after-width">{after}</div>}
            <label className="Search__placeholder" htmlFor={`search-${searchId}`}>
              <div className="Search__placeholder-in">
                <Icon16Search />
                <div className="Search__placeholder-text" dangerouslySetInnerHTML={{ __html: placeholder }} />
              </div>
            </label>
          </div>
          {after && (
            <div className="Search__after" onClick={this.onCancel}>
              <div className="Search__after-in">{after}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
