import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { getTitleFromChildren, hasReactNode } from '../../lib/utils';
import { classNames, noop } from '@vkontakte/vkjs';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Tappable } from '../Tappable/Tappable';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import styles from './Chip.module.css';

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
  const { sizeY } = useAdaptivity();
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
        getSizeYClassName(styles['Chip'], sizeY),
        removable && styles['Chip--removable'],
        className,
      )}
      role="option"
      aria-label={title}
      {...restProps}
    >
      <div className={styles['Chip__in']} role="presentation">
        {hasReactNode(before) && <div className={styles['Chip__before']}>{before}</div>}
        <Footnote className={styles['Chip__content']} title={title} aria-hidden="true">
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
