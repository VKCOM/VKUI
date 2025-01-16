import * as React from 'react';
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
        (Tag === 'h2' || Tag === 'h3') &&
          {
            h2: styles.heading2,
            h3: styles.heading3,
          }[Tag],
      )}
      {...props}
    >
      {children}
      {id && (
        <a
          href={`#${id}`}
          id={id}
          className={styles.anchor}
          aria-label="Постоянная ссылка на секцию"
        />
      )}
    </Tag>
  );
}
