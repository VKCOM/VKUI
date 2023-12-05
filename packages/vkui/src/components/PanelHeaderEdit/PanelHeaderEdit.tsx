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
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

export interface PanelHeaderEditProps extends PanelHeaderButtonProps {
  /**
   * Включен ли режим редактирования
   */
  isActive?: boolean;
  /**
   * Текст кнопки, когда режим редактирования не активен. Визуально скрыт везде, кроме iOS
   */
  editLabel?: string;
  /**
   * Текст кнопки при активном режиме редактирования для выхода из него. Визуально скрыт везде, кроме iOS
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
  const platform = usePlatform();
  const label = isActive ? doneLabel : editLabel;

  return (
    <PanelHeaderButton {...restProps}>
      {platform === 'ios' ? (
        label
      ) : (
        <>
          <VisuallyHidden>{label}</VisuallyHidden>
          <AdaptiveIconRenderer
            IconCompact={isActive ? Icon24DoneOutline : Icon24PenOutline}
            IconRegular={isActive ? Icon28DoneOutline : Icon28EditOutline}
          />
        </>
      )}
    </PanelHeaderButton>
  );
};
