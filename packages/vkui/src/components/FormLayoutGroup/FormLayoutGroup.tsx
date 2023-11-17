import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { HTMLAttributesWithRootRef } from '../../types';
import { Removable, RemovableProps } from '../Removable/Removable';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './FormLayoutGroup.module.css';

const sizeYClassNames = {
  none: classNames(
    styles['FormLayoutGroup--sizeY-none'],
    'vkuiInternalFormLayoutGroup--sizeY-none',
  ),
  ['compact']: classNames(
    styles['FormLayoutGroup--sizeY-compact'],
    'vkuiInternalFormLayoutGroup--sizeY-compact',
  ),
};

export interface FormLayoutGroupProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    RemovableProps {
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
  ...restProps
}: FormLayoutGroupProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const isRemovable = removable && mode === 'horizontal';
  const rootEl = useExternRef(getRootRef);

  return (
    <RootComponent
      getRootRef={rootEl}
      baseClassName={classNames(
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        mode === 'horizontal' &&
          classNames(
            styles['FormLayoutGroup--mode-horizontal'],
            'vkuiInternalFormLayoutGroup--mode-horizontal',
          ),
        mode === 'vertical' &&
          classNames(
            styles['FormLayoutGroup--mode-vertical'],
            'vkuiInternalFormLayoutGroup--mode-vertical',
          ),
        isRemovable &&
          classNames(
            styles['FormLayoutGroup--removable'],
            'vkuiInternalFormLayoutGroup--removable',
          ),
        segmented &&
          classNames(
            styles['FormLayoutGroup--segmented'],
            'vkuiInternalFormLayoutGroup--segmented',
          ),
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
    </RootComponent>
  );
};
