'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Removable, type RemovableProps } from '../Removable/Removable';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './FormLayoutGroup.module.css';

const densityClassNames = {
  none: classNames(styles.densityNone, 'vkuiInternalFormLayoutGroup--density-none'),
  compact: classNames(styles.densityCompact, 'vkuiInternalFormLayoutGroup--density-compact'),
};

export interface FormLayoutGroupProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    RemovableProps {
  /**
   * Направление отображения элементов формы.
   */
  mode?: 'vertical' | 'horizontal';
  /**
   * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
   *
   * Режим `indent` предназначен для визуального отступа.
   */
  removable?: boolean | 'indent';

  /**
   * Дает возможность склеить несколько `FormItem`.
   */
  segmented?: boolean;
}

/**
 * @see https://vkui.io/components/form-layout-group
 */
export const FormLayoutGroup = ({
  children,
  mode = 'vertical',
  removable,
  segmented,
  removePlaceholder = 'Удалить',
  onRemove,
  getRootRef,
  disabled,
  ...restProps
}: FormLayoutGroupProps): React.ReactNode => {
  const { density = 'none' } = useAdaptivity();
  const isRemovable = removable && mode === 'horizontal';
  const rootEl = useExternRef(getRootRef);

  return (
    <RootComponent
      getRootRef={rootEl}
      Component="fieldset"
      baseClassName={classNames(
        styles.host,
        density !== 'regular' && densityClassNames[density],
        mode === 'horizontal' &&
          classNames(styles.modeHorizontal, 'vkuiInternalFormLayoutGroup--mode-horizontal'),
        mode === 'vertical' && 'vkuiInternalFormLayoutGroup--mode-vertical',
        isRemovable && classNames(styles.withRemovable, 'vkuiInternalFormLayoutGroup--removable'),
        segmented && classNames(styles.segmented, 'vkuiInternalFormLayoutGroup--segmented'),
      )}
      disabled={disabled}
      {...restProps}
    >
      {isRemovable ? (
        <Removable
          className={styles.removable}
          align="start"
          removePlaceholder={removePlaceholder}
          onRemove={(e) => {
            if (rootEl?.current) {
              onRemove?.(e, rootEl.current);
            }
          }}
          disabled={disabled}
          indent={removable === 'indent'}
        >
          {children}
        </Removable>
      ) : (
        <React.Fragment>
          {children}
          <span className={styles.offset} aria-hidden />
        </React.Fragment>
      )}
    </RootComponent>
  );
};
