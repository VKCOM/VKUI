import React from 'react';
import PropTypes from 'prop-types';
import FormLayoutNew from '../FormLayoutNew/FormLayoutNew';
import FormLayoutOld from '../FormLayoutOld/FormLayoutOld';

export default class FormLayout extends React.Component {

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
        return <FormLayoutOld {...restProps} />;
      case 'new':
        return <FormLayoutNew {...restProps} />;
    }
  }
}
