import * as React from 'react';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { HasComponent, HasComponentProps, HasRootRef } from '../../types';
import { Removable, RemovableProps } from '../Removable/Removable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './FormItem.module.css';

const sizeYClassNames = {
  none: classNames(styles['FormItem--sizeY-none'], 'vkuiInternalFormItem--sizeY-none'),
  [SizeType.COMPACT]: classNames(
    styles['FormItem--sizeY-compact'],
    'vkuiInternalFormItem--sizeY-compact',
  ),
};

export interface FormItemProps<T = 'div'>
  extends React.HTMLAttributes<T>,
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
export const FormItem = <C extends React.ElementType = 'div'>({
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
}: HasComponentProps<C, FormItemProps<C>>) => {
  const rootEl = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();

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
        'vkuiInternalFormItem',
        status === 'error' &&
          classNames(styles['FormItem--status-error'], 'vkuiInternalFormItem--status-error'),
        status === 'valid' &&
          classNames(styles['FormItem--status-valid'], 'vkuiInternalFormItem--status-valid'),
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        hasReactNode(top) &&
          classNames(styles['FormItem--withTop'], 'vkuiInternalFormItem--withTop'),
        removable && classNames(styles['FormItem--removable'], 'vkuiInternalFormItem--removable'),
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
          <div
            className={classNames(styles['FormItem__removable'], 'vkuiInternalFormItem__removable')}
          >
            {wrappedChildren}
          </div>
        </Removable>
      ) : (
        wrappedChildren
      )}
    </Component>
  );
};
