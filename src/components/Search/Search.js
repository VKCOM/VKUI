import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import getClassname from '../../helpers/getClassName';
import Icon16SearchOutline from '@vkontakte/icons/dist/16/search_outline';
import { IOS } from '../../lib/platform';

let searchId = 0;

class Search extends React.Component {
  static propTypes = {
    /**
     * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
     */
    after: PropTypes.node,
    autoFocus: PropTypes.bool,
    /**
     * **Важно:** в коллбэк первым аргументом прилетает *значение* текстового поля.
     * Объект события передается вторым аргументом.
     */
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.node,
    getRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
    platform: PropTypes.string,
  };

  static defaultProps = {
    autoComplete: 'off',
    placeholder: 'Поиск',
    after: 'Отмена',
  };

  constructor(props) {
    super(props);

    let state = {
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

  inputRef = (element) => {
    const getRef = this.props.getRef;
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
        'Search--has-value': this.value,
        'Search--has-after': after,
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
