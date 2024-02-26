import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { getTitleFromChildren } from '../../lib/utils';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import styles from './Chip.module.css';

const sizeYClassNames = {
  none: styles['Chip--sizeY-none'],
  [SizeType.COMPACT]: styles['Chip--sizeY-compact'],
};

export type ChipValue = string | number;

export interface ChipOption {
  value?: ChipValue;
  label?: string;
  disabled?: boolean;
  [otherProp: string]: any;
}

export interface ChipProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  value: ChipValue;
  option?: ChipOption;
  onRemove?: (event?: React.MouseEvent, value?: ChipValue) => void;
  removable?: boolean;
  removeAriaLabel?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export interface RenderChip<T extends ChipOption> extends ChipProps {
  label: string;
  option: T;
  disabled: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Chip
 */
export const Chip = ({
  value = '',
  option,
  removable = true,
  onRemove = noop,
  removeAriaLabel = 'Удалить',
  before = null,
  after,
  children,
  ...restProps
}: ChipProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const onRemoveWrapper = React.useCallback(
    (event: React.MouseEvent) => {
      onRemove(event, value);
    },
    [onRemove, value],
  );
  const title = getTitleFromChildren(children);

  return (
    <RootComponent
      baseClassName={classNames(
        styles['Chip'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        removable && styles['Chip--removable'],
      )}
      role="option"
      aria-label={title}
      {...restProps}
    >
      <div className={styles['Chip__in']} role="presentation">
        {hasReactNode(before) && <div className={styles['Chip__before']}>{before}</div>}
        <span className={styles['Chip__content']} title={title} aria-hidden>
          {children}
        </span>
        {hasReactNode(after) && <div className={styles['Chip__after']}>{after}</div>}

        {removable && (
          <Tappable
            Component="button"
            className={styles['Chip__remove']}
            onClick={onRemoveWrapper}
            hasHover={false}
            hasActive={false}
            aria-label={`${removeAriaLabel} ${title}`}
          >
            <Icon16Cancel />
          </Tappable>
        )}
      </div>
    </RootComponent>
  );
};
