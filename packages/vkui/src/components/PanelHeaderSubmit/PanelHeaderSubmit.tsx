import * as React from 'react';
import { Icon28DoneOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { getTitleFromChildren } from '../../lib/utils';
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
      {platform === Platform.IOS ? children : <Icon28DoneOutline />}
    </PanelHeaderButton>
  );
};
