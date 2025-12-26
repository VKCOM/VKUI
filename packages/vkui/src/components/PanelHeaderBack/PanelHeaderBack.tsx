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
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { usePlatform } from '../../hooks/usePlatform';
import { type SizeTypeValues, ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import type { PlatformType } from '../../lib/platform';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import {
  PanelHeaderButton,
  type PanelHeaderButtonProps,
} from '../PanelHeaderButton/PanelHeaderButton';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from '../PanelHeaderButton/PanelHeaderButton.module.css';

function getViewWidthClassName(
  viewWidth: ViewWidthType | 'none',
  legacySizeX: SizeTypeValues | undefined,
) {
  // TODO [>=10]: #9015 Удалить это условие
  if (legacySizeX !== undefined && legacySizeX === 'compact') {
    return styles.backViewWidthNone;
  }
  if (viewWidth === 'none') {
    return styles.backViewWidthSmallTabletMinus;
  }
  if (viewWidth < ViewWidth.SMALL_TABLET) {
    return styles.backViewWidthNone;
  }
  return;
}

export type PanelHeaderBackProps = Omit<PanelHeaderButtonProps, 'children'> & {
  /**
   * Скрыть надпись на платформе `vkcom`.
   */
  hideLabelOnVKCom?: boolean;
  /**
   * Скрыть надпись на платформе `ios`.
   */
  hideLabelOnIOS?: boolean;
};

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
 * @see https://vkui.io/components/panel-header#panel-header-back
 */
export const PanelHeaderBack = ({
  label = 'Назад',
  className,
  hideLabelOnVKCom = false,
  hideLabelOnIOS = false,
  ...restProps
}: PanelHeaderBackProps): React.ReactNode => {
  const platform = usePlatform();
  const direction = useConfigDirection();
  const { sizeX: legacySizeX, viewWidth = 'none' } = useAdaptivity();
  // также label нужно скрывать при platform === 'ios' && viewWidth < ViewWidth.SMALL_TABLET
  // https://github.com/VKCOM/VKUI/blob/master/src/components/PanelHeaderButton/PanelHeaderButton.css#L104
  const showLabel =
    (platform === 'vkcom' && !hideLabelOnVKCom) || (platform === 'ios' && !hideLabelOnIOS);

  return (
    <PanelHeaderButton
      {...restProps}
      className={classNames(
        getViewWidthClassName(viewWidth, legacySizeX),
        platform === 'ios' && styles.backIos,
        platform === 'vkcom' && styles.backVkcom,
        showLabel && !!label && styles.backHasLabel,
        direction === 'rtl' && styles.rtl,
        className,
      )}
      label={showLabel ? label : label && <VisuallyHidden>{label}</VisuallyHidden>}
    >
      {getBackIcon(platform)}
    </PanelHeaderButton>
  );
};
