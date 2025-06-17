'use client';

import * as React from 'react';
import { Icon24ChevronDown } from '@vkontakte/icons';
import { classNames, Headline, Spacing, Subhead, Tappable } from '@vkontakte/vkui';
import type { Heading } from 'nextra';
import { useConfig } from '../../contexts';
import { calculateItemPadding } from './helpers';
import { useActiveAnchor } from './hooks/useActiveAnchor';
import styles from './TOC.module.css';

export interface TOCItemProps {
  id: string;
  value: Heading['value'];
  depth: number;
  isActive?: boolean;
}

function TOCItem({ id, value, depth, isActive }: TOCItemProps) {
  return (
    <Subhead Component="li" className={styles.anchor}>
      <Tappable
        href={`#${id}`}
        className={classNames(styles.menuItem, isActive && styles.activeMenuItem)}
        activeMode="opacity"
        hoverMode={styles.hoverMenuItem}
        focusVisibleMode="inside"
        borderRadiusMode="inherit"
        style={{ paddingLeft: `${calculateItemPadding(depth)}px` }}
      >
        {value}
      </Tappable>
    </Subhead>
  );
}

export interface TOCProps {
  toc: Heading[];
}

export function TOC({ toc }: TOCProps) {
  const anchorIds = React.useMemo(() => toc.map((anchor) => anchor.id) || [], [toc]);
  const activeAnchorId = useActiveAnchor(anchorIds);
  const {
    normalizePagesResult: { activeThemeContext: themeContext },
    isBlog,
  } = useConfig();
  const { toc: tocVisible } = themeContext;

  if (isBlog) {
    return null;
  }

  if (!tocVisible || !toc.length) {
    return <div className={styles.root} />;
  }

  return (
    <aside className={styles.root}>
      <Headline level="2" Component="p" className={styles.title}>
        <Icon24ChevronDown /> СОДЕРЖАНИЕ
      </Headline>
      <nav className={styles.nav}>
        <ul>
          {toc.map(({ id, value, depth }) => (
            <TOCItem
              key={id}
              id={id}
              value={value}
              depth={depth}
              isActive={id === activeAnchorId}
            />
          ))}
          <Spacing size={32} />
        </ul>
      </nav>
    </aside>
  );
}
