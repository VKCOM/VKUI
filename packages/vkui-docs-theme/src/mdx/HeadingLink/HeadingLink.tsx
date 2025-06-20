import * as React from 'react';
import { Icon16Linked } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import styles from './HeadingLink.module.css';

export function HeadingLink({
  Tag,
  children,
  id,
  className,
  ...props
}: React.ComponentProps<'h2'> & {
  Tag: `h${2 | 3 | 4 | 5 | 6}`;
}): React.ReactElement {
  return (
    <Tag
      className={classNames(
        styles.heading,
        (Tag === 'h2' || Tag === 'h3' || Tag === 'h4') &&
          {
            h2: styles.heading2,
            h3: styles.heading3,
            h4: styles.heading4,
          }[Tag],
      )}
      id={id}
      {...props}
    >
      {id ? (
        <a
          href={`#${id}`}
          className={styles.anchor}
          aria-label={`Постоянная ссылка на секцию ${children}`}
        >
          {children}
          <Icon16Linked className={styles.anchorIcon} />
        </a>
      ) : (
        children
      )}
    </Tag>
  );
}
