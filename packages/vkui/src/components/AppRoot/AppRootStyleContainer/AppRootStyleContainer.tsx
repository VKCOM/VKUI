'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useTokensClassName } from '../../../lib/tokens/useTokenClassName';
import { useConfigProvider } from '../../ConfigProvider/ConfigProviderContext';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent';
import { AppRootContext } from '../AppRootContext';
import { getSafeAreaInsetsAsCssVariables, getUserSelectModeClassName } from '../helpers';
import styles from './AppRootStyleContainer.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export function useAppRootStyles() {
  const { safeAreaInsets, mode, userSelectMode } = React.useContext(AppRootContext);
  const { hasPointer, sizeY = 'none' } = useAdaptivity();
  const { isWebView } = useConfigProvider();
  const userSelectModeClassName = getUserSelectModeClassName({
    userSelectMode,
    isWebView,
    hasPointer,
  });
  const tokensClassName = useTokensClassName();

  return {
    style: safeAreaInsets ? getSafeAreaInsetsAsCssVariables(safeAreaInsets) : undefined,
    className: classNames(
      styles.host,
      mode === 'embedded' && styles.embedded,
      sizeY !== 'regular' && sizeYClassNames[sizeY],
      userSelectModeClassName,
      tokensClassName,
    ),
  };
}

type AppRootStyleContainerProps = RootComponentProps<HTMLDivElement>;

/**
 * Специальный контейнер для переиспользования стилей, токенов и safe-area-inset в:
 * - точке монтирования приложения – `AppRoot`;
 * - точке монтирования порталов для модальных окон – `AppRootPortal`.
 *
 * @private
 */
export function AppRootStyleContainer(props: AppRootStyleContainerProps) {
  const { style: appRootStyle, className: appRootClassName } = useAppRootStyles();

  return <RootComponent baseClassName={appRootClassName} baseStyle={appRootStyle} {...props} />;
}
