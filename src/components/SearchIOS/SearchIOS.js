import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './SearchIOS.css';
import Icon16Search from '../../../dist/icons/16/search';

const baseClassName = getClassName('Search');

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

    this.state = state;
  }

  static propTypes = {
    className: PropTypes.string,
    before: PropTypes.node,
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

  componentDidMount () {
    this.calcSizes();
  }

  calcSizes = () => {
    const afterWidth = this.afterEl.offsetWidth;
    const placeholderWidth = this.placeholderEl.offsetWidth;
    const controlWidth = this.controlEl.offsetWidth;
    const beforeWidth = this.beforeEl ? this.beforeEl.offsetWidth : 0;

    this.setState({
      afterWidth,
      placeholderWidth,
      controlWidth,
      beforeWidth,
      placeholderOffset: (controlWidth - beforeWidth - (this.state.showAfter ? afterWidth : 0) - placeholderWidth) / 2
    });
  };

  componentDidUpdate () {
    if (this.state.afterWidth !== this.afterEl.offsetWidth) {
      this.calcSizes();
    }
  }

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  onFocus = (e) => {
    this.setState({
      focused: true,
      showAfter: true
    }, () => this.props.onFocus && this.props.onFocus(e));
  };

  onBlur = (e) => {
    this.setState({
      focused: false,
      showAfter: this.value
    }, () => this.props.onBlur && this.props.onBlur(e));
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
    this.setState({ showAfter: false });
    if (!this.isControlledOutside) {
      this.setState({ value: '' });
    }
    if (this.props.onChange) {
      this.props.onChange('');
    }
  };

  inputRef = (el) => {
    this.inputEl = el;
    this.props.getRef && this.props.getRef(el);
  };

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
      before,
      after,
      getRef,
      ...inputProps
    } = this.props;

    return (
      <div className={classnames(baseClassName, {
        [`Search--${theme}`]: true,
        'Search--focused': this.state.focused,
        'Search--has-value': !!this.value
      }, className)}>
        {before && <div className="Search__before" ref={el => this.beforeEl = el}>{before}</div>}
        <div
          className="Search__control"
          ref={el => this.controlEl = el}
          style={{
            width: `${this.state.controlWidth - this.state.beforeWidth - (this.state.showAfter ? this.state.afterWidth : 0)}px`
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
            <div className="Search__placeholder-text" dangerouslySetInnerHTML={{__html: placeholder}} />
            }
          </div>
          <input
            ref={this.inputRef}
            type="text"
            className="Search__input"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            value={this.value}
            {...inputProps}
          />
        </div>
        <div
          ref={el => this.afterEl = el}
          className="Search__after"
          onClick={this.onCancel}
        >
          {after}
        </div>
      </div>
    );
  }
}
