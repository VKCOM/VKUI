import React from 'react';
import PropTypes from 'prop-types';
import HeaderButton from '../HeaderButton/HeaderButton';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Done from '@vkontakte/icons/dist/24/done';

const PanelHeaderEdit = ({ isActive, editLabel, doneLabel, ...restProps }) => {
  const iOSText = isActive ? doneLabel : editLabel;
  const AndroidIcon = isActive ? <Icon24Done/> : <Icon24Write />;

  return (
    <HeaderButton {...restProps}>
      {IS_PLATFORM_ANDROID ? AndroidIcon : iOSText}
    </HeaderButton>
  );
};

PanelHeaderEdit.propTypes = {
  onClick: PropTypes.func.isRequired,

  /**
   * Включен ли режим редактирования
   */
  isActive: PropTypes.bool,

  /**
   * iOS only. Текст кнопки, когда режим редактирования не активен
   */
  editLabel: PropTypes.string,

  /**
   * iOS only. Текст кнопки при активном режиме редактирования для выхода из него
   */
  doneLabel: PropTypes.string
};

PanelHeaderEdit.defaultProps = {
  isActive: false,
  editLabel: 'Редактировать',
  doneLabel: 'Готово'
};

export default PanelHeaderEdit;
