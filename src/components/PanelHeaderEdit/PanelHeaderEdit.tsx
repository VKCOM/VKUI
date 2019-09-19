import React, { FunctionComponent } from 'react';
import HeaderButton, { HeaderButtonProps } from '../HeaderButton/HeaderButton';
import { ANDROID } from '../../lib/platform';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import usePlatform from '../../hooks/usePlatform';

export interface PanelHeaderEditProps extends HeaderButtonProps {
  /**
   * Включен ли режим редактирования
   */
  isActive?: boolean,
  /**
   * iOS only. Текст кнопки, когда режим редактирования не активен
   */
  editLabel?: string,
  /**
   * iOS only. Текст кнопки при активном режиме редактирования для выхода из него
   */
  doneLabel?: string
}

const PanelHeaderEdit: FunctionComponent<PanelHeaderEditProps> = ({
  isActive,
  editLabel,
  doneLabel,
  ...restProps
}: PanelHeaderEditProps) => {
  const iOSText = isActive ? doneLabel : editLabel;
  const AndroidIcon = isActive ? <Icon24Done/> : <Icon24Write />;
  const platform = usePlatform();

  return (
    <HeaderButton {...restProps}>
      {platform === ANDROID ? AndroidIcon : iOSText}
    </HeaderButton>
  );
};

PanelHeaderEdit.defaultProps = {
  isActive: false,
  editLabel: 'Редактировать',
  doneLabel: 'Готово'
};

export default PanelHeaderEdit;
