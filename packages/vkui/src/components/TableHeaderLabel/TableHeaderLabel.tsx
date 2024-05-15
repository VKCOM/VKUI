import * as React from 'react';
import { Icon12ArrowUp, Icon12Help } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { preventEventBubbling } from '../../lib/utils';
import type { StateProps } from '../Clickable/useState';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import type { StateProps as TappableStateProps } from '../Tappable/state';
import { Tooltip } from '../Tooltip/Tooltip';
import styles from './TableHeaderLabel.module.css';

export interface TableHeaderLabelProps
  extends Omit<TappableProps, 'title' | keyof StateProps | keyof TappableStateProps> {
  sort?: undefined | 'ascending' | 'descending';
  helpText?: React.ReactNode;
}

export const TableHeaderLabel = ({
  sort,
  children,
  helpText,
  ...restProps
}: TableHeaderLabelProps) => {
  return (
    <Tappable
      baseClassName={styles.TableHeaderLabel}
      hoverMode="opacity"
      activeMode="opacity"
      {...restProps}
    >
      {sort ? (
        <Icon12ArrowUp
          className={classNames(
            styles.TableHeaderLabel__sortIcon,
            sort === 'descending' && styles['TableHeaderLabel__sortIcon--desc'],
          )}
        />
      ) : null}
      {children}
      {hasReactNode(helpText) ? (
        <Tooltip text={helpText}>
          <Icon12Help
            className={styles.TableHeaderLabel__titleIcon}
            onClick={preventEventBubbling}
          />
        </Tooltip>
      ) : null}
    </Tappable>
  );
};
