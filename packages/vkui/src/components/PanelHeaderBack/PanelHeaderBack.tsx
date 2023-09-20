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
import { SizeType } from '../../lib/adaptivity';
import { Platform, PlatformType } from '../../lib/platform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import styles from '../PanelHeaderButton/PanelHeaderButton.module.css';

export type PanelHeaderBackProps = PanelHeaderButtonProps & {
  'aria-label'?: string;
};

const getBackIcon = (platform: PlatformType) => {
  switch (platform) {
    case Platform.IOS:
      return <Icon28ChevronBack />;
    case Platform.VKCOM:
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
  // так-же label нужно скрывать при platform === Platform.IOS && sizeX === regular
  // https://github.com/VKCOM/VKUI/blob/master/src/components/PanelHeaderButton/PanelHeaderButton.css#L104
  const showLabel = platform === Platform.VKCOM || platform === Platform.IOS;

  return (
    <PanelHeaderButton
      {...restProps}
      className={classNames(
        sizeX === SizeType.COMPACT && styles['PanelHeaderBack--sizeX-compact'],
        platform === Platform.IOS && styles['PanelHeaderBack--ios'],
        platform === Platform.VKCOM && styles['PanelHeaderBack--vkcom'],
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
