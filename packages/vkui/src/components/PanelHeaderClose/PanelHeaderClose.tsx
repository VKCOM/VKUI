import * as React from 'react';
import { Icon24CancelOutline, Icon28CancelOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { getTitleFromChildren } from '../../lib/utils';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderClose = ({ children = 'Отмена', ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton aria-label={getTitleFromChildren(children)} {...restProps}>
      {platform === Platform.IOS ? (
        children
      ) : (
        <AdaptiveIconRenderer IconCompact={Icon24CancelOutline} IconRegular={Icon28CancelOutline} />
      )}
    </PanelHeaderButton>
  );
};
