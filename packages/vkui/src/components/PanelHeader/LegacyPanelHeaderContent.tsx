import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { warnOnce } from '../../lib/warnOnce';
import { HasComponent } from '../../types';
import { Text } from '../Typography/Text/Text';
import styles from './PanelHeader.module.css';

export interface LegacyPanelHeaderContentProps
  extends React.HTMLAttributes<HTMLElement>,
    HasComponent {}

const warn = warnOnce('PanelHeader');

/**
 * TODO [>=6]: Удалить подкомпонент
 * @deprecated
 */
export const LegacyPanelHeaderContent = ({
  children,
  Component = 'span',
  id,
}: LegacyPanelHeaderContentProps) => {
  if (process.env.NODE_ENV === 'development') {
    warn(
      'Подкомпонент PanelHeader.Content устарел и будет удалён в v6. Используйте параметр typographyProps.',
    );
  }

  const platform = usePlatform();

  return platform === Platform.VKCOM ? (
    <Text weight="2" Component={Component} id={id}>
      {children}
    </Text>
  ) : (
    <Component className={styles['PanelHeader__content-in']} id={id}>
      {children}
    </Component>
  );
};

LegacyPanelHeaderContent.displayName = 'LegacyPanelHeaderContent';
