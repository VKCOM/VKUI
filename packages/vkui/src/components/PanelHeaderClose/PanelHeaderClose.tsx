import * as React from 'react';
import { Icon24CancelOutline, Icon28CancelOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderClose = ({ children = 'Отмена', ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton {...restProps}>
      {platform === 'ios' ? (
        children
      ) : (
        <>
          <VisuallyHidden>{children}</VisuallyHidden>
          <AdaptiveIconRenderer
            IconCompact={Icon24CancelOutline}
            IconRegular={Icon28CancelOutline}
          />
        </>
      )}
    </PanelHeaderButton>
  );
};
