import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './Search.css';
import { platform, IOS } from '../../lib/platform';
import HeaderButton from '../HeaderButton/HeaderButton';
import Icon24Back from '../../../dist/icons/24/back';
import Icon24Cancel from '../../../dist/icons/24/cancel';

const osname = platform();

const baseClassName = getClassName('Search');

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M14.743 13.574L10.91 9.74c.687-.938 1.055-2.07 1.05-3.232-.013-3.034-2.466-5.49-5.5-5.508-1.45-.007-2.845.568-3.87 1.595C1.564 3.622.992 5.017 1 6.468c.013 3.033 2.467 5.49 5.5 5.508 1.167.005 2.304-.367 3.242-1.06l.004-.004 3.83 3.83c.206.218.515.306.805.23.292-.075.518-.302.593-.592.076-.29-.013-.6-.23-.806zm-8.247-2.696c-2.426-.014-4.39-1.98-4.4-4.406-.006-1.16.45-2.276 1.272-3.098.82-.822 1.935-1.28 3.096-1.276 2.427.014 4.39 1.98 4.4 4.406.007 1.16-.45 2.276-1.272 3.098-.82.82-1.935 1.28-3.096 1.276z"/></svg>
);

class SearchIOS extends React.Component {

  constructor (props) {
    super(props);

    let state = {
      showAfter: props.theme === 'header',
      focused: false,
      placeholderOffset: null,
      afterWidth: null
    };

    if (props.hasOwnProperty('value')) {
      this.isControlledOutside = true;
    } else {
      state.value = props.initialValue || '';
    }

    this.state = state;
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    before: PropTypes.node,
    after: PropTypes.node,
    initialValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    theme: osname === IOS ? PropTypes.oneOf(['header', 'default']) : PropTypes.oneOf(['default'])
  };

  componentDidMount () {
    this.setState({
      afterWidth: this.afterEl.offsetWidth,
      controlWidth: this.controlEl.offsetWidth,
      placeholderOffset: (this.controlEl.offsetWidth - (this.state.showAfter ? this.afterEl.offsetWidth + 12 : 0) - this.placeholderEl.offsetWidth) / 2
    });
  }

  static defaultProps = {
    after: osname === IOS ? 'Отменить' : '',
    theme: 'default',
    placeholder: 'Поиск'
  };

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  onFocus = (e) => {
    this.setState({ focused: true, showAfter: true }, () => this.props.onFocus && this.props.onFocus(e));
  };

  onBlur = (e) => {
    this.setState({ focused: false, showAfter: this.value || this.props.theme === 'header' }, () => this.props.onBlur && this.props.onBlur(e));
  };

  onChange = (e) => {
    if (this.isControlledOutside) {
      this.props.onChange(e.target.value, e);
    } else {
      this.setState({ value: e.target.value });
    }
  };

  onCancel = () => {
    if (this.isControlledOutside) {
      this.props.onChange('');
    } else {
      this.setState({ value: '' });
    }
    this.setState({ showAfter: false });
  };

  render () {
    const className = classnames(baseClassName, {
      [`Search--${this.props.theme}`]: true,
      'Search--focused': this.state.focused,
      'Search--has-value': !!this.value
    }, this.props.className);

    return (
      <div className={className}>
        {this.props.before &&
        <div className="Search__before">
          {this.props.before}
        </div>
        }
        <div
          className="Search__control"
          ref={el => this.controlEl = el}
          style={{
            width: `${this.state.controlWidth - (this.state.showAfter ? this.state.afterWidth + 12 : 0)}px`
          }}
        >
          <div
            className="Search__placeholder"
            onClick={() => this.inputEl.focus()}
            ref={el => this.placeholderEl = el}
            style={{
              transform: `translateX(${this.state.focused || this.value ? 0 : this.state.placeholderOffset + 'px'})`
            }}
          >
            <SearchIcon/>
            {!this.value &&
            <div className="Search__placeholder-text">
              {this.props.placeholder}
            </div>
            }
          </div>
          <input
            ref={el => this.inputEl = el}
            type="text"
            className="Search__input"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            value={this.value}
          />
        </div>
        <div
          ref={el => this.afterEl = el}
          className="Search__after"
          onClick={this.onCancel}
          style={{
            marginLeft: 12
          }}
        >
          {this.props.after}
        </div>
      </div>
    );
  }
}

class SearchAndroid extends React.Component {

  constructor (props) {
    super(props);

    let state = {};

    if (props.hasOwnProperty('value')) {
      this.isControlledOutside = true;
    } else {
      state.value = props.initialValue || '';
    }

    this.state = state;
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    initialValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    placeholder: 'Поиск'
  };

  onCancel = () => {
    if (this.isControlledOutside) {
      this.props.onChange('');
    } else {
      this.setState({ value: '' });
    }
    this.inputEl.focus();
  };

  onChange = (e) => {
    if (this.isControlledOutside) {
      this.props.onChange(e.target.value, e);
    } else {
      this.setState({ value: e.target.value });
    }
  };

  onFocus = (e) => {
    this.props.onFocus && this.props.onFocus(e);
  };

  onBlur = (e) => {
    this.props.onBlur && this.props.onBlur(e);
  };

  onClose = () => {
    this.props.onClose && this.props.onClose();
  };

  componentDidMount () {
    this.inputEl.focus();
  }

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  render () {
    const className = classnames(baseClassName, {
      'Search--focused': this.state.focused,
      'Search--has-value': !!this.value
    }, this.props.className);

    return (
      <div className={className}>
        <div className="Search__before">
          <HeaderButton onClick={this.onClose}>
            <Icon24Back fill="#fff" />
          </HeaderButton>
        </div>
        <div className="Search__control">
          <input
            className="Search__input"
            placeholder={this.props.placeholder}
            ref={el => this.inputEl = el}
            value={this.value}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
        <div className="Search__after">
          <HeaderButton onClick={this.onCancel}>
            <Icon24Cancel fill="#fff" />
          </HeaderButton>
        </div>
      </div>
    );
  }
}

export default class Search extends React.Component {

  render () {
    if (osname === IOS) {
      return <SearchIOS {...this.props} />;
    } else {
      return <SearchAndroid {...this.props}/>;
    }
  }
}
