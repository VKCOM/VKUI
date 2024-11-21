'use client';

import { Icon24DoneOutline, Icon28DoneOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import {
  PanelHeaderButton,
  type PanelHeaderButtonProps,
} from '../PanelHeaderButton/PanelHeaderButton';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

export type PanelHeaderSubmitProps = Omit<PanelHeaderButtonProps, 'children'>;

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderSubmit = ({
  label = 'Готово',
  ...restProps
}: PanelHeaderSubmitProps): React.ReactNode => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton
      primary
      label={platform === 'ios' ? label : label && <VisuallyHidden>{label}</VisuallyHidden>}
      {...restProps}
    >
      {platform !== 'ios' && (
        <AdaptiveIconRenderer IconCompact={Icon24DoneOutline} IconRegular={Icon28DoneOutline} />
      )}
    </PanelHeaderButton>
  );
};
