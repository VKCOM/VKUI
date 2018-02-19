import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './Search.css';
import { platform, IOS } from '../../lib/platform';
import HeaderButton from '../HeaderButton/HeaderButton';
import Icon24Back from '../../../dist/icons/24/back';
import Icon24Cancel from '../../../dist/icons/24/cancel';
import Icon16Search from '../../../dist/icons/16/search';

const osname = platform();

const baseClassName = getClassName('Search');

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
            <Icon16Search/>
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
            <Icon24Back/>
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
            <Icon24Cancel/>
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
