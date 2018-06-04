import './File.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Button from '../Button/Button';

const baseClassNames = getClassName('File');

export default class File extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null
    };
  }

  static propTypes = {
    style: PropTypes.object,
    label: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    onChange: PropTypes.func
  };

  static defaultProps = {
    label: 'Choose file',
    alignment: 'left',
    onChange: () => {}
  };

  changeHandler = e => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render () {
    const { style, label, alignment, ...restProps } = this.props;

    return (
      <Button
        alignment={alignment}
        className={baseClassNames}
        style={style}
        component="div"
        type="cell"
      >
        <label className="File__in">
          <input
            className="File__self"
            type="file"
            onChange={this.changeHandler}
            {...restProps}
          />
        </label>
        {label}
      </Button>
    );
  }
}
