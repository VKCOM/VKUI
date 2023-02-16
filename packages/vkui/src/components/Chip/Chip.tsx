import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { getTitleFromChildren } from '../../lib/utils';
import { Tappable } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Chip.module.css';

const sizeYClassNames = {
  none: styles['Chip--sizeY-none'],
  [SizeType.COMPACT]: styles['Chip--sizeY-compact'],
};

export type ChipValue = string | number;

export interface ChipOption {
  value?: ChipValue;
  label?: string;
  [otherProp: string]: any;
}

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
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
  className,
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
    <div
      className={classNames(
        styles['Chip'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        removable && styles['Chip--removable'],
        className,
      )}
      role="option"
      aria-label={title}
      {...restProps}
    >
      <div className={styles['Chip__in']} role="presentation">
        {hasReactNode(before) && <div className={styles['Chip__before']}>{before}</div>}
        <Footnote className={styles['Chip__content']} title={title} aria-hidden>
          {children}
        </Footnote>
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
    </div>
  );
};
