import './AlertInput.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { platform, ANDROID } from '../../lib/platform';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';

import FormLayout from '../FormLayout/FormLayout';
import Input from '../Input/Input';
import IosAlertInput from './IosAlertInput';

const osname = platform();
const baseClassNames = getClassName('AlertInput');

export default class AlertInput extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  render () {
    const { className } = this.props;

    if (osname === ANDROID) {
      return (
        <div className={classnames(baseClassNames, className)}>
          <FormLayout>
            <Input {...removeObjectKeys(this.props, ['className'])} />
          </FormLayout>
        </div>
      );
    }

    return (
      <IosAlertInput
        className={classnames(baseClassNames, className)}
        {...removeObjectKeys(this.props, ['className'])}
      />
    );
  }
}
