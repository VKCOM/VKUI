import * as React from 'react';
import { Icon24DoneOutline, Icon28DoneOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { getTitleFromChildren } from '../../lib/utils';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderSubmit = ({
  children = 'Готово',
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton aria-label={getTitleFromChildren(children)} primary {...restProps}>
      {platform === Platform.IOS ? (
        children
      ) : (
        <AdaptiveIconRenderer IconCompact={Icon24DoneOutline} IconRegular={Icon28DoneOutline} />
      )}
    </PanelHeaderButton>
  );
};
