'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useGlobalOnClickOutside } from '../../hooks/useGlobalOnClickOutside';
import { usePlatform } from '../../hooks/usePlatform';
import { type SizeTypeValues, ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import type { HTMLAttributesWithRootRef } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { Box } from '../Box/Box';
import { SplitColWidthWrapper } from '../FixedLayout/SplitColWidthWrapper';
import { OnboardingTooltipFixedContainer } from '../OnboardingTooltip/OnboardingTooltipFixedContainer';
import { Popover } from '../Popover/Popover';
import styles from './PanelHeaderContext.module.css';

function getViewWidthClassName(
  viewWidth: ViewWidthType | 'none',
  legacySizeX: SizeTypeValues | undefined,
) {
  // TODO [>=10]: #9015 Удалить это условие
  if (legacySizeX !== undefined) {
    return legacySizeX === 'regular'
      ? styles.viewWidthSmallTabletPlus
      : styles.viewWidthSmallTabletMinus;
  }
  if (viewWidth === 'none') {
    return classNames(styles.viewWidthNone, 'vkuiInternalGroup--viewWidth-none');
  }
  return viewWidth >= ViewWidth.SMALL_TABLET
    ? styles.viewWidthSmallTabletPlus
    : styles.viewWidthSmallTabletMinus;
}

export interface PanelHeaderContextProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Управление состоянием всплывающего элемента
   * true - элемент открыт, false - элемент закрыт.
   */
  opened: boolean;

  /**
   * Обработчик закрытия всплывающего элемента.
   */
  onClose: VoidFunction;
}

const ComponentDecorators = [SplitColWidthWrapper, OnboardingTooltipFixedContainer];

/**
 * @see https://vkui.io/components/panel-header-context
 */
export const PanelHeaderContext = ({
  children,
  opened = false,
  className,
  onClose,
  ...restProps
}: PanelHeaderContextProps): React.ReactNode => {
  const platform = usePlatform();
  const { sizeX: legacySizeX, viewWidth = 'none' } = useAdaptivity();
  const [visible, setVisible] = React.useState<boolean>(opened);
  const [prevOpened, setPrevOpened] = React.useState<boolean>(opened);
  const anchorRef = React.useRef<HTMLElement | null>(null);
  const popoverRef = React.useRef<HTMLDivElement | null>(null);

  if (prevOpened !== opened) {
    if (opened) {
      setVisible(true);
    }
    setPrevOpened(opened);
  }

  const handleGlobalOnClickOutside = React.useCallback(
    (event: MouseEvent) => {
      if (opened) {
        event.stopPropagation();
        onClose();
      }
    },
    [opened, onClose],
  );

  useScrollLock(platform !== 'vkcom' && visible);

  useGlobalOnClickOutside(
    handleGlobalOnClickOutside,
    visible ? anchorRef : null,
    visible ? popoverRef : null,
  );

  if (!visible) {
    return null;
  }

  return (
    <Box
      Component={ComponentDecorators}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        opened ? styles.opened : styles.closing,
        getViewWidthClassName(viewWidth, legacySizeX),
        className,
      )}
      position="fixed"
      inlineSize="100%"
      insetBlockStart={0}
      {...restProps}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className={styles.fade}
      />
      <Popover
        shown={opened}
        disableFlipMiddleware
        disableShiftMiddleware
        disableCloseOnClickOutside
        disableCloseOnEscKey
        strategy="absolute"
        trigger="manual"
        role="presentation"
        content={<div className={styles.content}>{children}</div>}
        sameWidth
        usePortal={false}
        zIndex={1}
        noStyling
        className={styles.in}
        offsetByMainAxis={0}
        onShownChanged={(shown) => {
          if (!shown) {
            setVisible(false);
          }
        }}
        getRootRef={popoverRef}
      >
        <Box getRootRef={anchorRef} inlineSize="100%" />
      </Popover>
    </Box>
  );
};
