'use client';

import { Icon24CancelOutline, Icon28CancelOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import {
  PanelHeaderButton,
  type PanelHeaderButtonProps,
} from '../PanelHeaderButton/PanelHeaderButton';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

export type PanelHeaderCloseProps = Omit<PanelHeaderButtonProps, 'children'>;

/**
 * @see https://vkui.io/components/panel-header#panel-header-close
 */
export const PanelHeaderClose = ({
  label = 'Отмена',
  ...restProps
}: PanelHeaderCloseProps): React.ReactNode => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton
      {...restProps}
      label={platform === 'ios' ? label : label && <VisuallyHidden>{label}</VisuallyHidden>}
    >
      {platform !== 'ios' && (
        <AdaptiveIconRenderer IconCompact={Icon24CancelOutline} IconRegular={Icon28CancelOutline} />
      )}
    </PanelHeaderButton>
  );
};
