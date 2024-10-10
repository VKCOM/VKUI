'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useTokensClassName } from '../../lib/tokens';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { AppRootContext } from './AppRootContext';
import { getSafeAreaInsetsAsCssVariables, getUserSelectModeClassName } from './helpers';
import styles from './AppRootStyleContainer.module.css';

const sizeXClassNames = {
  none: styles.sizeXNone,
  regular: styles.sizeXRegular,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

const layoutClassNames = {
  card: styles.layoutCard,
  plain: styles.layoutPlain,
};

type AppRootStyleContainerProps = RootComponentProps<HTMLDivElement>;
/* Специальный контейнер для переиспользования стилей, токенов и area-inset в AppRoot
 * (точке монтирования приложения) и PortalRoot (точке монтирования порталов для модальных
 * окон) */
export function AppRootStyleContainer({ style, ...props }: AppRootStyleContainerProps) {
  const { layout, safeAreaInsets, mode, userSelectMode } = React.useContext(AppRootContext);
  const { hasPointer, sizeX = 'none', sizeY = 'none' } = useAdaptivity();
  const { isWebView } = useConfigProvider();
  const userSelectModeClassName = getUserSelectModeClassName({
    userSelectMode,
    isWebView,
    hasPointer,
  });
  const tokensClassName = useTokensClassName();

  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        mode === 'embedded' && styles.embedded,
        sizeX !== 'compact' && sizeXClassNames[sizeX],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        layout && layoutClassNames[layout],
        userSelectModeClassName,
        tokensClassName,
      )}
      style={{ ...getSafeAreaInsetsAsCssVariables(safeAreaInsets), ...style }}
      {...props}
    />
  );
}
