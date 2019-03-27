import React from 'react';
import PropTypes from 'prop-types';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import HeaderButton from '../HeaderButton/HeaderButton';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';

const PanelHeaderClose = ({ children, ...restProps }) => (
  <HeaderButton {...restProps}>
    {IS_PLATFORM_ANDROID ? <Icon24Cancel /> : children}
  </HeaderButton>
);

PanelHeaderClose.propTypes = {
  onClick: PropTypes.func.isRequired,

  /**
   * iOS only. Текст кнопки
   */
  children: PropTypes.string
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена'
};

export default PanelHeaderClose;
