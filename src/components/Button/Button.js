import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ButtonNew from '../ButtonNew/ButtonNew';
import ButtonOld from '../ButtonOld/ButtonOld';

export default class Button extends Component {
  static propTypes = {
    v: PropTypes.oneOf(['old', 'new'])
  };
  static defaultProps = {
    v: 'new'
  };
  render () {
    const {v, ...restProps} = this.props;

    switch (v) {
      case 'old':
        return <ButtonOld {...restProps} />;
      case 'new':
        return <ButtonNew {...restProps} />;
    }
  }
}
