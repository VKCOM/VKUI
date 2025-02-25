'use client';

import * as React from 'react';
import { Icon12ChevronOutline } from '@vkontakte/icons';
import { classNames, Footnote } from '@vkontakte/vkui';
import type { Item } from 'nextra/normalize-pages';
import { Anchor } from '../Anchor';
import styles from './Breadcrumbs.module.css';

export function Breadcrumbs({ activePath }: { activePath: Item[] }) {
  return (
    <div className={styles.root}>
      {activePath.map((item, index, arr) => {
        const nextItem = arr[index + 1];
        const href = nextItem ? (item.frontMatter ? item.route : '') : '';

        return (
          <React.Fragment key={`${item.route}-${item.name}`}>
            {index > 0 && <Icon12ChevronOutline aria-hidden className={classNames(styles.icon)} />}
            <Footnote className={styles.item}>
              {href ? <Anchor href={href}>{item.title}</Anchor> : item.title}
            </Footnote>
          </React.Fragment>
        );
      })}
    </div>
  );
}
