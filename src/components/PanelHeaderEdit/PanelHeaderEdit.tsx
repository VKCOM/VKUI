import * as React from 'react';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID, VKCOM } from '../../lib/platform';
import { Icon28EditOutline, Icon28DoneOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';

export interface PanelHeaderEditProps extends PanelHeaderButtonProps {
  /**
   * Включен ли режим редактирования
   */
  isActive?: boolean;
  /**
   * iOS only. Текст кнопки, когда режим редактирования не активен
   */
  editLabel?: string;
  /**
   * iOS only. Текст кнопки при активном режиме редактирования для выхода из него
   */
  doneLabel?: string;
}

const PanelHeaderEdit: React.FunctionComponent<PanelHeaderEditProps> = ({
  isActive,
  editLabel,
  doneLabel,
  ...restProps
}: PanelHeaderEditProps) => {
  const iOSText = isActive ? doneLabel : editLabel;
  const AndroidIcon = isActive ? Icon28DoneOutline : Icon28EditOutline;
  const platform = usePlatform();

  return (
    <PanelHeaderButton aria-label={iOSText} {...restProps}>
      {platform === ANDROID || platform === VKCOM
        ? <AndroidIcon />
        : iOSText
      }
    </PanelHeaderButton>
  );
};

PanelHeaderEdit.defaultProps = {
  isActive: false,
  editLabel: 'Редактировать',
  doneLabel: 'Готово',
};

export default PanelHeaderEdit;
