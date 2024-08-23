import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { RootComponent } from '../../RootComponent/RootComponent';
import { Footnote } from '../../Typography/Footnote/Footnote';
import { Text } from '../../Typography/Text/Text';
import styles from './SelectionControlLabel.module.css';

const sizeYClassNames = {
  none: styles['SelectionControlLabel--sizeY-none'],
  compact: styles['SelectionControlLabel--sizeY-compact'],
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
      baseClassName={classNames(
        styles['SelectionControlLabel'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      {...restProps}
    >
      <div className={styles['SelectionControlLabel__titleLayout']}>
        <Text className={styles['SelectionControlLabel__title']}>{children}</Text>
        <div className={styles['SelectionControlLabel__titleAfter']}>{titleAfter}</div>
      </div>
      {hasReactNode(description) && (
        <Footnote className={styles['SelectionControlLabel__description']}>{description}</Footnote>
      )}
    </RootComponent>
  );
}
