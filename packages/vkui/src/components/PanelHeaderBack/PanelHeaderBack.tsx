import * as React from 'react';
import {
  Icon24ArrowLeftOutline,
  Icon24ChevronLeftOutline,
  Icon28ArrowLeftOutline,
  Icon28ChevronBack,
  Icon28ChevronLeftOutline,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { PlatformType } from '../../lib/platform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import styles from '../PanelHeaderButton/PanelHeaderButton.module.css';

export type PanelHeaderBackProps = PanelHeaderButtonProps & {
  'aria-label'?: string;
};

const getBackIcon = (platform: PlatformType) => {
  switch (platform) {
    case 'ios':
      return <Icon28ChevronBack />;
    case 'vkcom':
      return (
        <AdaptiveIconRenderer
          IconCompact={Icon24ChevronLeftOutline}
          IconRegular={Icon28ChevronLeftOutline}
        />
      );
    default:
      return (
        <AdaptiveIconRenderer
          IconCompact={Icon24ArrowLeftOutline}
          IconRegular={Icon28ArrowLeftOutline}
        />
      );
  }
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderBack = ({
  label,
  'aria-label': ariaLabel = 'Назад',
  className,
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  const { sizeX = 'none' } = useAdaptivity();
  // так-же label нужно скрывать при platform === 'ios' && sizeX === regular
  // https://github.com/VKCOM/VKUI/blob/master/src/components/PanelHeaderButton/PanelHeaderButton.css#L104
  const showLabel = platform === 'vkcom' || platform === 'ios';

  return (
    <PanelHeaderButton
      {...restProps}
      className={classNames(
        sizeX === 'compact' && styles['PanelHeaderBack--sizeX-compact'],
        platform === 'ios' && styles['PanelHeaderBack--ios'],
        platform === 'vkcom' && styles['PanelHeaderBack--vkcom'],
        showLabel && !!label && styles['PanelHeaderBack--has-label'],
        className,
      )}
      label={showLabel && label}
      aria-label={ariaLabel}
    >
      {getBackIcon(platform)}
    </PanelHeaderButton>
  );
};
