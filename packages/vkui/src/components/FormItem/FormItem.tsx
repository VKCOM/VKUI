import * as React from 'react';
import { HasComponent, HasRootRef } from '../../types';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Footnote } from '../Typography/Footnote/Footnote';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { Removable, RemovableProps } from '../Removable/Removable';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import styles from './FormItem.module.css';

export interface FormItemProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    RemovableProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  status?: 'default' | 'error' | 'valid';
  /**
   * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
   */
  removable?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormItem
 */
export const FormItem = ({
  children,
  top,
  bottom,
  status = 'default',
  Component = 'div',
  removable,
  onRemove = noop,
  removePlaceholder = 'Удалить',
  getRootRef,
  className,
  ...restProps
}: FormItemProps) => {
  const rootEl = useExternRef(getRootRef);
  const { sizeY } = useAdaptivity();

  const wrappedChildren = (
    <React.Fragment>
      {hasReactNode(top) && <Subhead className={styles['FormItem__top']}>{top}</Subhead>}
      {children}
      {hasReactNode(bottom) && <Footnote className={styles['FormItem__bottom']}>{bottom}</Footnote>}
    </React.Fragment>
  );

  return (
    <Component
      {...restProps}
      ref={rootEl}
      className={classNames(
        styles['FormItem'],
        status !== 'default' && styles[`FormItem--status-${status}`],
        getSizeYClassName(styles['FormItem'], sizeY),
        hasReactNode(top) && styles['FormItem--withTop'],
        removable && styles['FormItem--removable'],
        className,
      )}
    >
      {removable ? (
        <Removable
          align="start"
          onRemove={(e) => {
            if (rootEl?.current) {
              onRemove(e, rootEl.current);
            }
          }}
          removePlaceholder={removePlaceholder}
        >
          <div className={styles['FormItem__removable']}>{wrappedChildren}</div>
        </Removable>
      ) : (
        wrappedChildren
      )}
    </Component>
  );
};
