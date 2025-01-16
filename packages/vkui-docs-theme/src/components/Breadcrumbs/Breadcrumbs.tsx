import { Fragment } from 'react';
import { Icon12ChevronOutline } from '@vkontakte/icons';
import { classNames, Footnote } from '@vkontakte/vkui';
import type { Item } from 'nextra/normalize-pages';
import { Anchor } from '../Anchor';
import styles from './Breadcrumbs.module.css';

export function Breadcrumbs({ activePath }: { activePath: Item[] }) {
  return (
    <div className={styles.root}>
      {activePath.map((item, index) => {
        const isLink = !item.children || item.withIndexPage;
        const isActive = index === activePath.length - 1;

        return (
          <Fragment key={`${item.route}-${item.name}`}>
            {index > 0 && <Icon12ChevronOutline aria-hidden className={classNames(styles.icon)} />}
            <Footnote className={classNames(styles.item, isActive && styles.activeItem)}>
              {isLink && !isActive ? <Anchor href={item.route}>{item.title}</Anchor> : item.title}
            </Footnote>
          </Fragment>
        );
      })}
    </div>
  );
}
