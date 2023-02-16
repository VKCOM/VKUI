import * as React from 'react';
import { Icon28CancelOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { getTitleFromChildren } from '../../lib/utils';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderClose
 */
export const PanelHeaderClose = ({ children = 'Отмена', ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton aria-label={getTitleFromChildren(children)} {...restProps}>
      {platform === Platform.IOS ? children : <Icon28CancelOutline />}
    </PanelHeaderButton>
  );
};
