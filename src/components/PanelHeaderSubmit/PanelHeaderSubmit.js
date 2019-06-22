import React from 'react';
import PropTypes from 'prop-types';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import HeaderButton from '../HeaderButton/HeaderButton';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';

const PanelHeaderSubmit = ({ children, ...restProps }) => (
  <HeaderButton primary {...restProps}>
    {IS_PLATFORM_ANDROID ? <Icon24Done /> : children}
  </HeaderButton>
);

PanelHeaderSubmit.propTypes = {
  onClick: PropTypes.func.isRequired,

  /**
   * iOS only: Текст кнопки
   */
  children: PropTypes.string
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово'
};

export default PanelHeaderSubmit;
