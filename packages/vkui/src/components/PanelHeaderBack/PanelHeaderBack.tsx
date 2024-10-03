'use client';

import * as React from 'react';
import {
  Icon20ChevronLeftOutline,
  Icon24ArrowLeftOutline,
  Icon28ArrowLeftOutline,
  Icon28ChevronBack,
  Icon28ChevronLeftOutline,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { PlatformType } from '../../lib/platform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import {
  PanelHeaderButton,
  type PanelHeaderButtonProps,
} from '../PanelHeaderButton/PanelHeaderButton';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from '../PanelHeaderButton/PanelHeaderButton.module.css';

const sizeXClassNames = {
  none: styles.backSizeXNone,
  compact: styles.backSizeXCompact,
};

export interface PanelHeaderBackProps extends Omit<PanelHeaderButtonProps, 'children'> {
  children?: string;
}

const getBackIcon = (platform: PlatformType) => {
  switch (platform) {
    case 'ios':
      return <Icon28ChevronBack />;
    case 'vkcom':
      return (
        <AdaptiveIconRenderer
          IconCompact={Icon20ChevronLeftOutline}
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
  className,
  children = 'Назад',
  ...restProps
}: PanelHeaderButtonProps): React.ReactNode => {
  const platform = usePlatform();
  const { sizeX = 'none' } = useAdaptivity();
  // также label нужно скрывать при platform === 'ios' && sizeX === regular
  // https://github.com/VKCOM/VKUI/blob/master/src/components/PanelHeaderButton/PanelHeaderButton.css#L104
  const showLabel = platform === 'vkcom' || platform === 'ios';

  return (
    <PanelHeaderButton
      {...restProps}
      className={classNames(
        sizeX !== 'regular' && sizeXClassNames[sizeX],
        platform === 'ios' && styles['backIos'],
        platform === 'vkcom' && styles['backVkcom'],
        showLabel && !!label && styles['backHasLabel'],
        className,
      )}
      label={showLabel && label}
    >
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
      {getBackIcon(platform)}
    </PanelHeaderButton>
  );
};
