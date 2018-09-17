import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

import Icon16Search from '@vkontakte/icons/dist/16/search';

const baseClassName = getClassName('Search');

let searchId = 0;

export default class SearchIOS extends React.Component {
  constructor (props) {
    super(props);

    let state = {
      showAfter: false,
      focused: false,
      placeholderOffset: null,
      afterWidth: null
    };

    if (props.hasOwnProperty('value')) {
      this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }
    searchId++;
    this.state = state;
  }

  static propTypes = {
    className: PropTypes.string,
    after: PropTypes.node,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.node,
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

  onFocus = (e) => {
    this.setState({ focused: true });
    this.props.onFocus && this.props.onFocus(e);
  };

  onBlur = (e) => {
    this.setState({ focused: false });
    this.props.onBlur && this.props.onBlur(e);
  };

  onChange = (e) => {
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
      this.props.onChange('');
    }
  };

  inputRef = el => this.props.getRef && this.props.getRef(el);

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
      <div className={classnames(baseClassName, {
        [`Search--${theme}`]: true,
        'Search--focused': this.state.focused,
        'Search--has-value': this.value,
        'Search--has-after': after
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
            {after && <div className="Search__after-width">{after}</div>}
            <label
              className="Search__placeholder"
              htmlFor={`search-${searchId}`}
            >
              <div className="Search__placeholder-in">
                <Icon16Search/>
                <div className="Search__placeholder-text" dangerouslySetInnerHTML={{__html: placeholder}} />
              </div>
            </label>
          </div>
          {after &&
          <div className="Search__after" onClick={this.onCancel}>
            <div className="Search__after-in">{after}</div>
          </div>
          }
        </div>
      </div>
    );
  }
}
