import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { HasRootRef } from '../../types';
import { Removable, RemovableProps } from '../Removable/Removable';
import styles from './FormLayoutGroup.module.css';

const sizeYClassNames = {
  none: classNames(
    styles['FormLayoutGroup--sizeY-none'],
    'vkuiInternalFormLayoutGroup--sizeY-none',
  ),
  [SizeType.COMPACT]: classNames(
    styles['FormLayoutGroup--sizeY-compact'],
    'vkuiInternalFormLayoutGroup--sizeY-compact',
  ),
};

export interface FormLayoutGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    RemovableProps,
    HasRootRef<HTMLDivElement> {
  mode?: 'vertical' | 'horizontal';
  /**
   * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
   *
   * Режим `indent` предназначен для визуального отступа.
   */
  removable?: boolean | 'indent';

  /**
   * Только для режима horizontal. Дает возможность склеить несколько `FormItem`.
   */
  segmented?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormLayoutGroup
 */
export const FormLayoutGroup = ({
  children,
  mode = 'vertical',
  removable,
  segmented,
  removePlaceholder = 'Удалить',
  onRemove = noop,
  getRootRef,
  className,
  ...restProps
}: FormLayoutGroupProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const isRemovable = removable && mode === 'horizontal';
  const isSegmented = segmented && mode === 'horizontal';
  const rootEl = useExternRef(getRootRef);

  return (
    <div
      ref={rootEl}
      className={classNames(
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        mode === 'horizontal' &&
          classNames(
            styles['FormLayoutGroup--mode-horizontal'],
            'vkuiInternalFormLayoutGroup--mode-horizontal',
          ),
        isRemovable &&
          classNames(
            styles['FormLayoutGroup--removable'],
            'vkuiInternalFormLayoutGroup--removable',
          ),
        isSegmented &&
          classNames(
            styles['FormLayoutGroup--segmented'],
            'vkuiInternalFormLayoutGroup--segmented',
          ),
        className,
      )}
      {...restProps}
    >
      {isRemovable ? (
        <Removable
          className={styles['FormLayoutGroup__removable']}
          align="start"
          removePlaceholder={removePlaceholder}
          onRemove={(e) => {
            if (rootEl?.current) {
              onRemove(e, rootEl.current);
            }
          }}
          indent={removable === 'indent'}
        >
          {children}
        </Removable>
      ) : (
        <React.Fragment>
          {children}
          <span className={styles['FormLayoutGroup__offset']} aria-hidden />
        </React.Fragment>
      )}
    </div>
  );
};
