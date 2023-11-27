import * as React from 'react';
import {
  Icon24DoneOutline,
  Icon24PenOutline,
  Icon28DoneOutline,
  Icon28EditOutline,
} from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';

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

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderEdit = ({
  isActive = false,
  editLabel = 'Редактировать',
  doneLabel = 'Готово',
  ...restProps
}: PanelHeaderEditProps) => {
  const iOSText = isActive ? doneLabel : editLabel;
  const platform = usePlatform();

  return (
    <PanelHeaderButton aria-label={iOSText} {...restProps}>
      {platform === 'ios' ? (
        iOSText
      ) : (
        <AdaptiveIconRenderer
          IconCompact={isActive ? Icon24DoneOutline : Icon24PenOutline}
          IconRegular={isActive ? Icon28DoneOutline : Icon28EditOutline}
        />
      )}
    </PanelHeaderButton>
  );
};
