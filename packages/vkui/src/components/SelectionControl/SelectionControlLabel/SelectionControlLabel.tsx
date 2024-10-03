'use client';

import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { RootComponent } from '../../RootComponent/RootComponent';
import { Footnote } from '../../Typography/Footnote/Footnote';
import { Text } from '../../Typography/Text/Text';
import styles from './SelectionControlLabel.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

interface SelectionControlLabelProps extends React.ComponentProps<'div'> {
  description?: React.ReactNode;
  titleAfter?: React.ReactNode;
}

export function SelectionControlLabel({
  children,
  titleAfter,
  description,
  ...restProps
}: SelectionControlLabelProps) {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <RootComponent
      baseClassName={classNames(styles.host, sizeY !== 'regular' && sizeYClassNames[sizeY])}
      {...restProps}
    >
      <div className={styles.titleLayout}>
        <Text className={styles.title}>{children}</Text>
        <div className={styles.titleAfter}>{titleAfter}</div>
      </div>
      {hasReactNode(description) && (
        <Footnote className={styles.description}>{description}</Footnote>
      )}
    </RootComponent>
  );
}
