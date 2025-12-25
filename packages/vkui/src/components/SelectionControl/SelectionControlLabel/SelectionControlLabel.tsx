'use client';
/* eslint-disable jsdoc/require-jsdoc */

import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { RootComponent } from '../../RootComponent/RootComponent';
import { Footnote } from '../../Typography/Footnote/Footnote';
import { Text } from '../../Typography/Text/Text';
import { useSelectionControlContext } from '../SelectionControlContext';
import styles from './SelectionControlLabel.module.css';

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
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
  const { noPadding } = useSelectionControlContext();
  const { density = 'none' } = useAdaptivity();

  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        density !== 'regular' && densityClassNames[density],
        !noPadding && styles.withPadding,
      )}
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
