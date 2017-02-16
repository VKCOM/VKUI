import './File.css';
import React, { Component, PropTypes } from 'react';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';
import Button from '../Button/Button';

const baseClassNames = getClassName('File');

export default class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: !!props.checked
    };
  }
  static propTypes = {
    style: PropTypes.object,
    label: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    appearance: PropTypes.oneOf(['primary', 'default', 'danger'])
  };
  static defaultProps = {
    style: {},
    label: 'Choose file',
    alignment: 'left',
    appearance: 'default'
  };
  changeHandler(e) {
    this.setState({ checked: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render() {
    const { style, label, alignment, appearance } = this.props;

    return (
      <label className={baseClassNames} style={style}>
        <input
          className="File__self"
          type="file"
          {...removeObjectKeys(this.props, ['onChange', 'style', 'label', 'alignment', 'appearance'])}
        />
        <Button alignment={alignment} appearance={appearance}>{label}</Button>
      </label>
    );
  }
}
