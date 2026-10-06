'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Removable, type RemovableProps } from '../Removable/Removable';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './FormLayoutGroup.module.css';
import stylesGlobal from '../FormItem/FormItem.global.module.css';
import stylesIconButtonGlobal from '../IconButton/IconButton.global.module.css';

const densityClassNames = {
  none: stylesGlobal.formLayoutGroupDensityNone,
  compact: stylesGlobal.formLayoutGroupDensityCompact,
};

export interface FormLayoutGroupProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    RemovableProps {
  /**
   * Направление отображения элементов формы.
   */
  mode?: 'vertical' | 'horizontal' | undefined;
  /**
   * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
   *
   * Режим `indent` предназначен для визуального отступа.
   */
  removable?: boolean | 'indent' | undefined;

  /**
   * Дает возможность склеить несколько `FormItem`.
   */
  segmented?: boolean | undefined;
  /**
   * Удаляет внешние отступы вокруг компонента.
   * @since 8.0.0
   */
  noPadding?: boolean | undefined;
}

/**
 * @see https://vkui.io/components/form-layout-group
 */
export const FormLayoutGroup = ({
  children,
  mode = 'vertical',
  removable,
  segmented,
  noPadding,
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
        mode === 'horizontal' && !noPadding && styles.withPadding,
        density !== 'regular' && densityClassNames[density],
        mode === 'horizontal' &&
          classNames(styles.modeHorizontal, stylesGlobal.formLayoutGroupModeHorizontal),
        mode === 'vertical' && stylesGlobal.formLayoutGroupModeVertical,
        isRemovable && classNames(styles.withRemovable, stylesGlobal.formLayoutGroupRemovable),
        isRemovable && stylesIconButtonGlobal.iconButtonFormLayoutGroupRemovable,
        segmented && classNames(styles.segmented, stylesGlobal.formLayoutGroupSegmented),
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
          noPadding={noPadding}
        >
          {children}
        </Removable>
      ) : (
        <React.Fragment>
          {children}
          <span
            className={classNames(styles.offset, stylesGlobal.formLayoutGroupOffset)}
            aria-hidden
          />
        </React.Fragment>
      )}
    </RootComponent>
  );
};
